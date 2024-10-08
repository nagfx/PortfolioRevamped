import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { StarryBackground } from "@/components/starry-background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naman Iqbal - Portfolio",
  description:
    "Portfolio website of Naman Iqbal, a web developer and software engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster />
          <StarryBackground />
        </ThemeProvider>
      </body>
    </html>
  );
}
