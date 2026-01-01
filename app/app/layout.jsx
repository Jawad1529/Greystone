import Navbar from "../components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased m-0 p-0">
        <Navbar />
        <main className="">{children}</main> {/* pt-20 to offset sticky navbar */}
      </body>
    </html>
  );
}
