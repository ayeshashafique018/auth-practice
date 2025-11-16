import "./globals.css";
import Navbar from "../components/navbar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
