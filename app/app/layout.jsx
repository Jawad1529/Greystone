import Navbar from "../components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Greystone Hyde",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased m-0 p-0">
        <Navbar />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
