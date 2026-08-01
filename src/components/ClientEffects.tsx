"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const CustomCursor = dynamic(() => import("@/components/ui/CustomCursor"), {
    ssr: false,
});

const GsapEffects = dynamic(() => import("@/components/ui/GsapEffects"), {
    ssr: false,
});

/**
 * Neither of these paints anything the page needs. GsapEffects walks the whole
 * DOM wiring up ScrollTriggers, CustomCursor attaches its own pointer
 * listeners, and both used to start the moment hydration finished — competing
 * with first paint for the main thread.
 *
 * They're held back until the browser reports itself idle, so the page is
 * interactive before either begins. The timeout is a floor, not a nicety:
 * requestIdleCallback can be starved indefinitely on a busy thread, and Safari
 * still doesn't implement it.
 */
function useDeferredUntilIdle(): boolean {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const idle = window.requestIdleCallback;
        if (typeof idle === "function") {
            const handle = idle(() => setReady(true), { timeout: 2000 });
            return () => window.cancelIdleCallback?.(handle);
        }
        const timer = window.setTimeout(() => setReady(true), 200);
        return () => window.clearTimeout(timer);
    }, []);

    return ready;
}

/**
 * A trailing cursor is meaningless without a mouse. On a touch device it was
 * pure cost — a chunk fetched and listeners bound for something that could
 * never be seen. Checked before the import, so the chunk is never requested.
 */
function useFinePointer(): boolean {
    const [fine, setFine] = useState(false);

    useEffect(() => {
        const query = window.matchMedia("(hover: hover) and (pointer: fine)");
        const sync = () => setFine(query.matches);
        sync();
        query.addEventListener("change", sync);
        return () => query.removeEventListener("change", sync);
    }, []);

    return fine;
}

export default function ClientEffects() {
    const idle = useDeferredUntilIdle();
    const finePointer = useFinePointer();

    if (!idle) return null;

    return (
        <>
            {finePointer && <CustomCursor />}
            <GsapEffects />
        </>
    );
}
