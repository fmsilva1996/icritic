import { FC } from 'react'
import * as S from './styled'
import { Comment as IComment } from '@/types/comment'
import Comment from '../Comment'

interface CommentChainProps {
  comment: IComment
}

const CommentChain: FC<CommentChainProps> = ({
  comment: { user, content, replies },
}) => {
  const renderReplies = (replies: IComment[]) => (
    <S.Replies>
      <S.VerticalLine />
      {replies.map(({ id, user, content }) => (
        <S.Reply key={id}>
          <Comment user={user} content={content} />
        </S.Reply>
      ))}
    </S.Replies>
  )

  return (
    <S.CommentChain>
      <Comment user={user} content={content} />
      {replies && renderReplies(replies)}
    </S.CommentChain>
  )
}

export default CommentChain
