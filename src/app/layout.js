import { Geist, Geist_Mono, IBM_Plex_Mono, Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-relaway",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "amina portfolio",
  description: "amina portfolio - web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <header></header>
        {children}
        <footer>Made with ❤️</footer>
      </body>
    </html>
  );
}
