export const metadata = { title: 'Amplify.ai', description: 'Sign in' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link href="https://fonts.bunny.net/css?family=inter:400,500,600,700|fraunces:600,700,900" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-white font-sans" style={{ fontFamily: 'Inter, sans-serif' }}>{children}</body>
    </html>
  )
}
