import { Inter } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
const inter = Inter({ subsets: ["latin"] });
config.autoAddCss = false;
export const metadata = {
  title: "Somanshu Bhardwaj",
  description: "Portfolio of Somanshu Bhardwaj",
  url: "https://somanshu-bhardwaj.vercel.app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
