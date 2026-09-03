export default function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Dot grid, tiled across the full viewport, sitting on top of the body's gradient */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "url('/images/grid-bg.svg')",
          backgroundSize: "700px",
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
}
