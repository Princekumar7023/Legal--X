import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemedToaster, ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LegalX - Your Legal Partner",
  description: "Professional legal services at your fingertips",
  metadataBase: new URL("https://legal-x.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <ClerkProvider>
            <main>{children}</main>
            <ThemedToaster />
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
