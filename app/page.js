export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "#f7f5ff",
        fontFamily: "Arial, sans-serif",
        padding: "24px",
      }}
    >
      <div style={{ fontSize: "60px", marginBottom: "10px" }}>
        🔍
      </div>

      <h1
        style={{
          fontSize: "38px",
          margin: "0 0 12px",
        }}
      >
        QR TEAM GAME
      </h1>

      <p
        style={{
          fontSize: "18px",
          lineHeight: "1.6",
          marginBottom: "35px",
        }}
      >
        숨겨진 QR을 찾아<br />
        팀원들과 함께 미션을 해결하세요!
      </p>

      <a
        href="/game"
        style={{
          border: "none",
          borderRadius: "15px",
          padding: "16px 40px",
          fontSize: "18px",
          fontWeight: "bold",
          cursor: "pointer",
          textDecoration: "none",
          color: "inherit",
          display: "inline-block",
        }}
      >
        GAME START
      </a>
    </main>
  );
}
