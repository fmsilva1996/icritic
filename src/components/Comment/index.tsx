import { FC } from 'react'
import Image from 'next/image'
import * as S from './styled'
import { User } from '@/types/user'
import { Link } from '@/styles/typography'

interface CommentProps {
  user: User
  content: string
}

const Comment: FC<CommentProps> = ({ user, content }) => (
  <S.Comment>
    <S.Header>
      <S.FlexContainer>
        <Image alt="Profile" src={user.img} height={40} width={40} />
        <S.Details>
          <S.Name>{user.name}</S.Name>
          <S.TextGrey>@{user.username}</S.TextGrey>
        </S.Details>
      </S.FlexContainer>
      <Link>Reply</Link>
    </S.Header>
    <S.TextGrey>{content}</S.TextGrey>
  </S.Comment>
)

export default Comment
