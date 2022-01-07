import { FC } from 'react'
import * as S from './styled'
import BackLink, { LinkType } from '@/components/BackLink'

const Create: FC = () => {
  return (
    <main>
      <S.Header>
        <BackLink href="/" linkType={LinkType.Light}>
          Go Back
        </BackLink>
      </S.Header>
      <S.Form>
        <S.Title>Create New Feedback</S.Title>
        <S.Label htmlFor="title">Feedback Title</S.Label>
        <S.Description>Add a short, descriptive headline</S.Description>
        <S.Input type="text" name="title" />
        <S.Label htmlFor="category">Category</S.Label>
        <S.Description>Choose a category for your feedback</S.Description>
        <S.Input type="text" name="category" />
      </S.Form>
    </main>
  )
}

export default Create
