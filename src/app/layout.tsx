
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mailsy - Shopier E-posta Otomasyonu",
  description: "Shopier siparişleriniz için otomatik e-posta gönderimi ve müşteri iletişimi",
  icons: [{
    rel: 'icon',
    url: '/mailsy-logo.svg',
    type: 'image/svg+xml',
  }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
