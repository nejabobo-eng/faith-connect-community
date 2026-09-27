export type Book = {
  title: string
  description: string
  format: string
  coverImage?: string
  purchaseUrl?: string
}

export type MusicRelease = {
  title: string
  artist?: string
  type: string
  coverImage?: string
  listenUrl?: string
}

// Add published books here as they become available.
export const books: Book[] = []

// Add released songs, albums, or productions here as they become available.
export const music: MusicRelease[] = []
