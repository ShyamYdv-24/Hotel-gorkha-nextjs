import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const siteDescription =
  "Hotel Gorkha is a welcoming place to stay, offering comfortable rooms and simple, friendly hospitality. Request a room booking, browse the sample menu, and view the gallery.";

export const metadata = {
  title: {
    default: "Hotel Gorkha — A comfortable stay in Dharan, Nepal",
    template: "%s | Hotel Gorkha",
  },
  description: siteDescription,
  applicationName: "Hotel Gorkha",
  keywords: ["Hotel Gorkha", "hotel", "Dharan", "Nepal", "rooms", "stay"],
  openGraph: {
    title: "Hotel Gorkha",
    description: siteDescription,
    type: "website",
    locale: "en_US",
    siteName: "Hotel Gorkha",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
