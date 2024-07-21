
import "./globals.css";


export const metadata = {
  title: "Always On QR",
  description: "Always on QR landing page created with NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
