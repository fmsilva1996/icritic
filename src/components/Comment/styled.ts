import styled from 'styled-components'
import { Body3 } from '@/styles/typography'

// Here to encapsulate each comment so that it can easily be selected by its parent. Thought it would be better to name it using styled components
export const Comment = styled.div``

export const FlexContainer = styled.div`
  display: flex;
`

export const Header = styled(FlexContainer)`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const Details = styled(FlexContainer)`
  flex-direction: column;
  margin-left: 16px;
`

export const Name = styled(Body3)`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`

export const TextGrey = styled(Body3)`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors['text:grey']};
`
