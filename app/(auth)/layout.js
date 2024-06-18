import { Inter } from "next/font/google";
// import "@/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hillgan Bulk SMS",
  description: "A platform to manage bulk sms",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          {children}
        </body>
    </html>
  );
}
