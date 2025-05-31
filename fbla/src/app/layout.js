import "./globals.css";
import { Poppins } from "next/font/google";
<<<<<<< HEAD
import { ClerkProvider } from "@clerk/nextjs";
=======
import { ClerkProvider } from '@clerk/nextjs';
>>>>>>> 9a183aa (first test)


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
});

export const metadata = {
  title: "Student Job Portal",
  description: "Find jobs and internships made for students",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
<<<<<<< HEAD
      <html lang="en" className={poppins.variable}>
        <body className="antialiased">{children}</body>
      </html>
    </ClerkProvider>
    
=======
    <html lang="en" className={poppins.variable}>
      <body className="antialiased">{children}</body>
    </html>
    </ClerkProvider>
>>>>>>> 9a183aa (first test)
  );
}

