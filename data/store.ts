export type StoreItem = {
  id: string
  title: string
  description: string
  priceInCents: number
  coverImage?: string
  creator?: string
}

// Add each book here after its cover and protected download are ready.
export const books: StoreItem[] = []

// Add each song or release here after its artwork and protected download are ready.
export const songs: StoreItem[] = []

export function findStoreItem(kind: 'book' | 'song', id: string) {
  return (kind === 'book' ? books : songs).find((item) => item.id === id)
}