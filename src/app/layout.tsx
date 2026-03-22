// Root layout — minimal passthrough. The actual html/body is in [locale]/layout.tsx.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
