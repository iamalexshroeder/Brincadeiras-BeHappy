import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'BeHappy',
    short_name: 'BeHappy',
    description: 'A maior biblioteca de brincadeiras e atividades infantis geradas pela comunidade.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F9F9F7',
    theme_color: '#FF9500',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
