import { Poppins } from "next/font/google";
import { NavigationMenuDemo } from "@/components/navegation/Navegation";
import "./globals.css";

const fontWebsite = Poppins({ 
  subsets: ["latin"],
  weight: ["300","400", "600"]
});

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-BR">
      <body className={fontWebsite.className}>
        {children}
      </body>
    </html>
  );
}
