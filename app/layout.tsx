import "./style.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om Prakash Gupta | Full Stack Developer",
  description:
    "Official portfolio of Om Prakash Gupta — Full Stack Developer specializing in React, Next.js, Node.js, AWS and AI.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
