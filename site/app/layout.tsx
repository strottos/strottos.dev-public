import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Steven Trotter's Blog",
  description:
    "UK based software engineer Steven Trotter blog about all things coding, cloud and calculations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <div className="flex flex-col h-screen justify-between">
          <Header />
          <main key="main">
            <div
              className="container bg-white md:min-h-[calc(100vh-11.8rem)] lg:min-h-[calc(100vh-7.8rem)] md:shadow-xl"
            >
              <div className="mt-16 md:mt-12 lg:mt-16">
                {children}
              </div>
            </div>
          </main>
          <Footer key="footer" />
        </div>
      </body>
    </html>
  );
}
