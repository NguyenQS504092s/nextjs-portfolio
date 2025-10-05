import "./globals.css";

export const metadata = {
  title: "Portfolio - Nguyen Quang Sang",
  description: "Personal portfolio website for Nguyen Quang Sang",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
