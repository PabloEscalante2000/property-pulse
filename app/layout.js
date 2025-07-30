import "@/assets/styles/globals.css"

export const metadata = {
  title: "Property Pulse | Find The Perfect Rental Property",
  description: "Find your dream rental property",
  keywords: "rental, find properties, find rentals"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
