import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Suggestion } from '@/types/suggestion'
import * as S from './styled'
import Pill from '../Pill'
import UpVotes from '../UpVotes'

interface SuggestionCardProps {
  suggestion: Suggestion
}

const SuggestionCard: FC<SuggestionCardProps> = ({
  suggestion: { id, title, description, category, upvotes, comments },
}) => (
  <Link href={`/feedback/${id}`} passHref>
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <Pill>{category}</Pill>
      <S.Engagement>
        <UpVotes>{upvotes}</UpVotes>
        <S.Comments>
          <Image
            src="/icons/comments.svg"
            alt="Comments"
            height={16}
            width={18}
          />
          <S.Title>{comments}</S.Title>
        </S.Comments>
      </S.Engagement>
    </S.Card>
  </Link>
)

export default SuggestionCard
