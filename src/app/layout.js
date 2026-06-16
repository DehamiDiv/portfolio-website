import "./globals.css";

export const metadata = {
  title: "DevPortfolio | IT Undergraduate & Full Stack Developer",
  description: "Personal portfolio website showcasing software engineering projects, academic background, tech skills, and achievements.",
  keywords: ["portfolio", "IT undergraduate", "software engineer", "full stack developer", "nextjs", "react"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
