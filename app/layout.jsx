import "@/assets/styles/globals.css"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Property Pulse | Find The Perfect Rental Property",
  description: "Find your dream rental property",
  keywords: "rental, find properties, find rentals"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
