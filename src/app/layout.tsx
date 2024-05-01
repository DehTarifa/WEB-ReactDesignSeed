import { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "React Designer Seed",
  description: "Dynamic components for any application",
  authors: [{ name: 'Denner Tarifa Ribeiro', url: ''}],
  keywords: 'site, webpage, website, react, nextjs, application, components'
};

const fontWebsite = Poppins({ 
  subsets: ["latin"],
  weight: ["300","400","600"]
});

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-BR">
      <body className={fontWebsite.className}>
        <header></header>

        <main>
          {children}
        </main>

        <footer></footer>
      </body>
    </html>
  );
}
