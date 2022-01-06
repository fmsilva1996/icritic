import { Comment } from '@/types/comment'

export const getCommentCount = (comments: Comment[]) => {
  return comments.reduce((acc, cur) => {
    if (cur.replies) acc += cur.replies.length
    return (acc += 1)
  }, 0)
}
