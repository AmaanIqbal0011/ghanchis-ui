import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider"
import { ClerkProvider } from "@clerk/nextjs";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ghanchis.pk",
  description: "The Smart Collection",
};

export default function RootLayout({ children }) {
  return (
   <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>

    <html lang="en" suppressHydrationWarning>
      <body
       
      >
           <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
