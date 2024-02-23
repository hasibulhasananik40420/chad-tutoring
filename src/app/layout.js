import Navbar from "@/components/Shared/Navbar";
import "./globals.css";
import Footer from "@/components/Shared/Footer";


export const metadata = {
  title: "Chad's Tutoring",
  description: "Chad's Tutoring",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='font-Manrope'>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
