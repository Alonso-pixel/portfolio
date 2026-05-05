import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Privacy Policy | Bulgario",
  description:
    "Privacy policy for Bulgario, your fermentation partner app available on Google Play.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-gray-50`}
      >
        {children}
      </body>
    </html>
  );
}
