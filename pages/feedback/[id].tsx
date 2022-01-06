import { FC } from 'react'
import * as S from './styled'
import BackLink, { LinkType } from '@/components/BackLink'
import Button, { BtnType } from '@/components/Button'
import SuggestionCard from '@/components/SuggestionCard'
import { SUGGESTION } from '@/components/SuggestionCard/data'
import CommentSection from '@/components/CommentSection'
import { COMMENTS } from '@/components/CommentSection/data'
import NewComment from '@/components/NewComment'

const Feedback: FC = () => (
  <main>
    <S.Header>
      <BackLink linkType={LinkType.Light} href="/">
        Go Back
      </BackLink>
      <Button btnType={BtnType.Secondary}>Edit Feedback</Button>
    </S.Header>
    <SuggestionCard suggestion={SUGGESTION} />
    <CommentSection comments={COMMENTS} />
    <NewComment />
  </main>
)

export default Feedback
