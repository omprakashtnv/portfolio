import "./style.css";
export const metadata = {
  title: "Om Prakash Gupta | Full Stack Developer",
  description: "Full Stack, AWS and AI engineering portfolio",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
