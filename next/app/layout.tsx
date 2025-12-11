export const metadata = { title: 'Amplify.ai', description: 'Sign in' }

/**
 * Root layout component that renders the top-level HTML document, loads fonts, and places `children` inside the body.
 *
 * @param children - React nodes to be rendered inside the document body
 * @returns The root `<html>` element containing the `<head>` with font preconnect/stylesheet and the `<body>` with `children`
 */
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