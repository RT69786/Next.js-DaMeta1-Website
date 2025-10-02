import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Orbitron } from "next/font/google";
import "./globals.scss";

// Load Orbitron font
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"], // choose weights you need
});

export const metadata = {
  title: "My Next App",
  description: "Learning Next.js with SCSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      {/* Apply Orbitron font to everything */}
      <body className={orbitron.className}>{children}</body>
    </html>
  );
}
