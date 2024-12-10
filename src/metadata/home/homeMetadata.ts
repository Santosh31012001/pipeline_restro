import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home page',
  description: 'Page Description',
  openGraph: {
    title: 'Open Graph Title',
    description: 'Open Graph Description',
    url: 'https://example.com',
    images: [
      {
        url: 'https://example.com/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Og Image Alt',
      },
    ],
  },
}
