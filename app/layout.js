export const metadata = {
  title: "QR TEAM GAME",
  description: "팀원들과 함께하는 QR 미션 게임",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
