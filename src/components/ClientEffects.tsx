"use client";

import dynamic from "next/dynamic";

const CustomCursor = dynamic(() => import("@/components/ui/CustomCursor"), {
    ssr: false,
});

const GsapEffects = dynamic(() => import("@/components/ui/GsapEffects"), {
    ssr: false,
});

export default function ClientEffects() {
    return (
        <>
            <CustomCursor />
            <GsapEffects />
        </>
    );
}
