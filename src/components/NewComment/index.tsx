import { FC, ChangeEvent, useState } from 'react'
import * as S from './styled'
import Button, { BtnType } from '../Button'

const MAX_CHARS = 250

const NewComment: FC = () => {
  const [comment, setComment] = useState('')

  const handleSubmit = () => {}

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value)
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Title>Add Comment</S.Title>
      <S.TextArea
        value={comment}
        onChange={handleChange}
        maxLength={MAX_CHARS}
        placeholder="Type your comment here"
      />
      <S.FlexContainer>
        <S.Chars>{`${MAX_CHARS - comment.length} Characters left`}</S.Chars>
        <Button type="submit" btnType={BtnType.Primary}>
          Post Comment
        </Button>
      </S.FlexContainer>
    </S.Form>
  )
}

export default NewComment
