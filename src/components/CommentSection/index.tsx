import { FC } from 'react'
import * as S from './styled'
import { getCommentCount } from './helpers'
import CommentChain from '../CommentChain'
import { Comment as IComment } from '@/types/comment'

interface CommentSectionProps {
  comments: IComment[]
}

const CommentSection: FC<CommentSectionProps> = ({ comments }) => (
  <S.Section>
    <S.Title>{getCommentCount(comments)} Comments</S.Title>
    {comments.map(comment => (
      <CommentChain key={comment.id} comment={comment} />
    ))}
  </S.Section>
)

export default CommentSection
