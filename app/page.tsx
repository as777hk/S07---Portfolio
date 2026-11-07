export default function HomePage() {
  return (
    <main style={{ margin: 0, minHeight: "100vh", width: "100%", overflow: "hidden" }}>
      <iframe
        title="SAM — 20-Agent Live Cybersecurity Portfolio Builder"
        src="/sam-live-builder.html"
        allow="autoplay"
        loading="eager"
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100dvh",
          border: 0,
          display: "block",
          background: "#06070b"
        }}
      />
    </main>
  );
}
