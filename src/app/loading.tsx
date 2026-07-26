export default function Loading() {
  return (
    <main id="content" className="shell py-12 md:py-16" aria-busy="true" aria-live="polite">
      <span className="sr-only">Loading…</span>

      <div className="space-y-6">
        <div
          className="h-9 w-56 animate-pulse"
          style={{ background: "var(--surface-2)" }}
        />
        <div
          className="h-4 w-full max-w-xl animate-pulse"
          style={{ background: "var(--surface-2)" }}
        />

        <div className="grid gap-5 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-56 animate-pulse border"
              style={{
                borderColor: "var(--border)",
                background: "var(--surface-2)",
                animationDelay: `${i * 90}ms`,
              }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
