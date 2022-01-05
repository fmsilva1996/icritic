import styled from 'styled-components'
import { Body3, H4 } from '@/styles/typography'

export const Card = styled.a`
  display: block;
  width: 85%;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 24px;
`

export const Title = styled(H4)`
  font-size: 13px;
  line-height: 19px;
`

export const Description = styled(Body3)`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors['text:grey']};
  margin: 9px 0 8px;
`

export const Engagement = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`

export const Comments = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`
