export enum SuggestionCategory {
  ALL = 'All',
  UI = 'UI',
  UX = 'UX',
  ENHANCEMENT = 'Enhancement',
  BUG = 'Bug',
  FEATURE = 'Feature',
}

export interface Suggestion {
  id: string
  title: string
  description: string
  category: SuggestionCategory
  upvotes: number
  comments: number
}
