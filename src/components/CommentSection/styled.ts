import styled from 'styled-components'
import { H3 } from '@/styles/typography'
import { FlexContainer } from '../Comment/styled'

export const Section = styled.div`
  width: 85%;
  margin: 24px auto;
  padding: 24px;
  border-radius: 10px;
  background-color: #ffffff;

  > div:not(:last-child) {
    &:after {
      content: '';
      display: block;
      border: 1px solid rgba(140, 146, 179, 0.25);
      margin: 24px 0;
    }
  }
`

export const Title = styled(H3)`
  margin-bottom: 24px;
`
