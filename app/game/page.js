"use client";
import { useState } from "react";
export default function GamePage() {
  const [teamName, setTeamName] = useState("");
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ fontSize: "60px", marginBottom: "10px" }}>🎮</div>

      <h1>게임 준비</h1>

      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        팀 정보를 입력하고
        <br />
        게임을 시작해보세요!
      </p>

      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "15px",
          width: "280px",
        }}
      >
        <p style={{ fontWeight: "bold" }}>TEAM NAME</p>

        <input
          type="text"
          placeholder="팀 이름을 입력하세요"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          style={{
            width: "90%",
            padding: "12px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <button
          onClick={() => {
            if (teamName.trim() === "") {
            alert("팀 이름을 입력해주세요!");
            return;
           }
          alert("입력된 팀 이름: " + teamName);
          localStorage.setItem("teamName", teamName);
          window.location.href = "/game";
          }}
          style={{
            marginTop: "15px",
            padding: "12px 25px",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          NEXT
        </button>
      </div>
    </main>
  );
}
