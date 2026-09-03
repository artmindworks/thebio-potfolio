export default function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Dot grid, tiled across the full viewport */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "url('/images/grid-bg.svg')",
          backgroundSize: "700px",
          backgroundRepeat: "repeat",
        }}
      />
      {/* Soft gradient glow, anchored bottom */}
      <div
        className="absolute inset-x-0 bottom-0 h-[60vh] opacity-70"
        style={{
          backgroundImage: "url('/images/gradient-bg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
}
