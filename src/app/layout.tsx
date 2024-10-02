import "./globals.css";
import Presenting from "@/components/layout/presenting";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

// import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  metadataBase: new URL('https://tu-sitio-web.com/'),
  title: "App-Weather",
  description: "Descripción breve de tu aplicación",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="flex flex-col items-center h-[100%] bg-gradient-to-b from-[var(--color-bg-from)] to-[var(--color-bg-to)]">
        {/* <Analytics /> */}
        <Presenting></Presenting>
        <header className="max-w-4xl mt-8 w-full md:mb-0 mb-6">
          <Nav />
        </header>
        <main className="w-full max-w-4xl px-4 text-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
