import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "TV BOX Premium - Streaming de Alta Qualidade",
  description:
    "Descubra o melhor em entretenimento com nosso TV BOX. Milhares de canais, filmes e séries em alta definição.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
