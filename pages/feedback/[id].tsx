import { FC } from 'react'
import * as S from './styled'
import BackLink, { LinkType } from '@/components/BackLink'
import Button, { BtnType } from '@/components/Button'
import SuggestionCard from '@/components/SuggestionCard'
import { SUGGESTION } from '@/components/SuggestionCard/data'

const Feedback: FC = () => (
  <main>
    <S.Header>
      <BackLink linkType={LinkType.Light} href="/">
        Go Back
      </BackLink>
      <Button btnType={BtnType.Secondary}>Edit Feedback</Button>
    </S.Header>
    <SuggestionCard suggestion={SUGGESTION} />
  </main>
)

export default Feedback
