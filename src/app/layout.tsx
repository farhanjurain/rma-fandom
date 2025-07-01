import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "R3AL M4DRID FANDOM | Co-op Tournament",
  description: "Official R3AL M4DRID FANDOM Co-op Tournament 2025 - Where the best Real Madrid fans compete for glory!",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${bebas.variable} bg-rm-light text-rm-dark min-h-screen`}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-rm-blue text-white shadow-lg">
            <Navigation />
          </header>
          
          <main className="flex-grow">
            {children}
          </main>
          
          <footer className="bg-rm-dark text-white py-8 mt-12">
            <div className="container mx-auto px-4 text-center">
              <p>© {new Date().getFullYear()} R3AL M4DRID FANDOM Co-op Tournament. Not affiliated with Real Madrid CF.</p>
              <p className="text-sm text-gray-400 mt-2">Made with ❤️ by Real Madrid fans, for Real Madrid fans</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
