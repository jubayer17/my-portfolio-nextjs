"use client";

import { Fragment } from "react";
import { LazyMotion, domAnimation, m, useReducedMotion, type Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: { staggerChildren: stagger },
  }),
};

const word: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.55, ease: EASE } },
};

interface Props {
  readonly text: string;
  readonly className?: string;
  readonly style?: React.CSSProperties;
  readonly as?: "h1" | "h2" | "h3" | "p" | "span";
  readonly stagger?: number;
  readonly delay?: number;
  /** Play immediately instead of waiting for the element to scroll in. */
  readonly immediate?: boolean;
}

/**
 * Reveals a line word by word, each sliding up from behind a clipping mask.
 * The full string stays in the accessibility tree as a single label, so
 * screen readers don't announce it one word at a time.
 */
export default function RevealText({
  text,
  className,
  style,
  as = "span",
  stagger = 0.055,
  delay = 0,
  immediate = false,
}: Props) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (reduceMotion) {
    const Plain = as;
    return (
      <Plain className={className} style={style}>
        {text}
      </Plain>
    );
  }

  const Tag = m[as];
  const motionProps = immediate
    ? { initial: "hidden" as const, animate: "visible" as const }
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, margin: "-60px" },
      };

  return (
    <LazyMotion features={domAnimation} strict>
      <Tag
        className={className}
        style={style}
        variants={container}
        custom={stagger}
        transition={{ delayChildren: delay }}
        aria-label={text}
        {...motionProps}
      >
        {words.map((w, i) => (
          // Words repeat within a heading, so index has to be part of the key.
          <Fragment key={`${w}-${i}`}>
            <span
              aria-hidden="true"
              style={{
                display: "inline-block",
                overflow: "hidden",
                // Without this the mask crops descenders — the y and j in
                // "Jubayer" get sliced off. Pad the clip box, then pull the
                // layout back so spacing is unchanged.
                paddingBottom: "0.16em",
                marginBottom: "-0.16em",
              }}
            >
              <m.span variants={word} style={{ display: "inline-block", willChange: "transform" }}>
                {w}
              </m.span>
            </span>
            {/* Real text node between masks, so long headings still wrap. */}
            {i < words.length - 1 ? " " : null}
          </Fragment>
        ))}
      </Tag>
    </LazyMotion>
  );
}
