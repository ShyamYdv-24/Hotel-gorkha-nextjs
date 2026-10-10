import "./globals.css";

const siteDescription =
  "Hotel Gorkha is a welcoming place to stay in Dharan, Nepal, offering comfortable accommodation and friendly hospitality. Explore our rooms, sample menu and gallery, or request a room booking.";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
