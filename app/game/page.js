"use client";
import { useState } from "react";
export default function GamePage() {
  const [userName, setUserName] = useState("");
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
        <p style={{ fontWeight: "bold" }}>YOUR NAME</p>

        <input
          type="text"
          placeholder="이름을 입력하세요"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          style={{
            width: "90%",
            padding: "12px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
<p style={{ fontWeight: "bold", marginTop: "20px" }}>YOUR TEAM</p>

<select
  value={teamName}
  onChange={(e) => setTeamName(e.target.value)}
  style={{
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    backgroundColor: "white",
  }}
>
  <option value="">팀을 선택하세요</option>
  <option value="1조">1조</option>
  <option value="2조">2조</option>
  <option value="3조">3조</option>
</select>
        <button
onClick={() => {
  if (userName.trim() === "") {
    alert("이름을 입력해주세요!");
    return;
  }

  if (teamName === "") {
    alert("팀을 선택해주세요!");
    return;
  }

  localStorage.setItem("userName", userName);
  localStorage.setItem("teamName", teamName);
  window.location.href = "/play";
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
