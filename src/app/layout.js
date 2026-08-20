import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://dehami-portfolio.vercel.app"),
  title: "Dehami Divyanjalee — Full-Stack & Cloud Developer | IT Undergraduate",
  description: "Dehami Divyanjalee — IT undergraduate and Full-Stack Developer at University of Moratuwa building modern web applications, scalable APIs, and intelligent software systems.",
  keywords: ["Dehami Divyanjalee", "Dehami", "Software Engineer", "Full Stack Developer", "Next.js", "React", "University of Moratuwa", "Portfolio", "Web Developer"],
  authors: [{ name: "Dehami Divyanjalee" }],
  creator: "Dehami Divyanjalee",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Dehami Divyanjalee — Portfolio",
    description: "IT Undergraduate & Full Stack Developer · University of Moratuwa",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Dehami Divyanjalee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dehami Divyanjalee — Portfolio",
    description: "IT Undergraduate & Full Stack Developer · University of Moratuwa",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem('de_theme');
                const theme = saved === 'light' || saved === 'dark' ? saved : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
                document.documentElement.dataset.theme = theme;
              } catch (e) {
                document.documentElement.dataset.theme = 'dark';
              }
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
