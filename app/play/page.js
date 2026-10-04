"use client";

import { useEffect, useState } from "react";

export default function PlayPage() {
  const [teamName, setTeamName] = useState("");

  useEffect(() => {
    const savedTeamName = localStorage.getItem("teamName");
    setTeamName(savedTeamName || "우리 팀");
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f7f5ff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        padding: "24px",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "55px", marginBottom: "15px" }}>🎮</div>

      <h1
        style={{
          fontSize: "36px",
          marginBottom: "10px",
        }}
      >
        {teamName}
      </h1>

      <p
        style={{
          fontSize: "18px",
          lineHeight: "1.6",
          marginBottom: "30px",
        }}
      >
        게임이 시작되었습니다!
        <br />
        QR을 찾아 문제를 해결하세요 🔍
      </p>

      <div
        style={{
          backgroundColor: "white",
          padding: "25px",
          borderRadius: "15px",
          width: "280px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
        }}
      >
        <p style={{ margin: "0 0 12px 0" }}>
          현재 점수
        </p>

        <h2 style={{ fontSize: "32px", margin: "0 0 20px 0" }}>
          0점
        </h2>

        <p style={{ margin: 0 }}>
          해결한 문제: 0 / 15
        </p>
      </div>
    </main>
  );
}
