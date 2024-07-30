export const metadata = {
  title: 'Chakra project',
  description: 'made by Irirwanirira',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
