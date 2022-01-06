import { User } from './user'

export interface Comment {
  id: string
  user: User
  content: string
  replies?: Comment[] | null
}
