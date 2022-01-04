import { FC } from 'react'
import Image from 'next/image'
import * as S from './styled'
import Button, { BtnTypes } from '../Button'

const NoSuggestions: FC = () => (
  <S.Container>
    <Image
      src="/icons/detective.svg"
      alt="No feedback"
      height={102}
      width={108}
    />
    <S.Title>There is no feedback yet.</S.Title>
    <S.Subtitle>
      Got a suggestion? Found a bug that needs to be squashed? We love hearing
      about new ideas to improve our app.
    </S.Subtitle>
    <Button btnType={BtnTypes.Primary}>+ Add Feedback</Button>
  </S.Container>
)

export default NoSuggestions
