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
      <body className="grid h-screen grid-rows-[auto_1fr_auto]">
        <header
          style={{
            backgroundColor: "lightblue",
            padding: "1rem",
            textAlign: "center",
          }}
        >
          <p>Header</p>
        </header>
        <main className="p-4 h-full">{children}</main>
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
