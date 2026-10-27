import "./globals.css";

export const metadata = {
  title: "Harmony Heritage | A Place to Belong",
  description: "Discover Harmony Heritage — thoughtfully designed residences for a more harmonious way of living.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
