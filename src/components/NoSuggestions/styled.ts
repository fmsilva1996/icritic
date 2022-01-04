import styled from 'styled-components'
import { Body3, H3 } from '@/styles/typography'

export const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  padding: 75px 25px;
  border-radius: 10px;
  background-color: #ffffff;
  text-align: center;
`

export const Title = styled(H3)`
  margin: 39px 0 14px;
`

export const Subtitle = styled(Body3)`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: #647196;
  margin-bottom: 24px;
`
