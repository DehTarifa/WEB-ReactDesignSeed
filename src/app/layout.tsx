
import { Poppins } from "next/font/google";
import "./globals.css";
import { NavigationMenuDemo } from "@/components/navegation/Navegation";

const fontWebsite = Poppins({ 
  subsets: ["latin"],
  weight: ["300","400", "600"]
});

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-BR">
      <body className={fontWebsite.className}>
        <NavigationMenuDemo/>

        {children}
      </body>
    </html>
  );
}
