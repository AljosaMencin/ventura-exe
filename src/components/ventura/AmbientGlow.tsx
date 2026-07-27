const BLOBS = [
  { top: "5%", left: "12%", size: "58rem", opacity: 0.08, duration: "9s", delay: "0s" },
  { top: "38%", left: "88%", size: "52rem", opacity: 0.06, duration: "12s", delay: "-4s" },
  { top: "72%", left: "8%", size: "56rem", opacity: 0.07, duration: "10s", delay: "-7s" },
  { top: "95%", left: "70%", size: "48rem", opacity: 0.06, duration: "11s", delay: "-2s" },
];

const AmbientGlow = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    {BLOBS.map((blob, i) => (
      <div
        key={i}
        className="absolute animate-pulse-slow rounded-full blur-[100px]"
        style={{
          top: blob.top,
          left: blob.left,
          width: blob.size,
          height: blob.size,
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, hsl(var(--primary) / ${blob.opacity}), transparent 70%)`,
          animationDuration: blob.duration,
          animationDelay: blob.delay,
        }}
      />
    ))}
  </div>
);

export default AmbientGlow;
