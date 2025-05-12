import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Next App",
    template: "%s | Next App",
  },
  description: "This is next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="gap-4 grid h-screen grid-rows-[auto_1fr_auto]">
        <header
          style={{
            backgroundColor: "lightblue",
            padding: "1rem",
            textAlign: "center",
          }}
        >
          <p>Header</p>
        </header>
        {children}
        <footer
          style={{
            backgroundColor: "ghostWhite",
            padding: "1rem",
            textAlign: "center",
          }}
        >
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
