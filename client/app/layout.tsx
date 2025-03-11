import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crud Next JS",
  description: "CRUD Based Next js with Laravel api",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
