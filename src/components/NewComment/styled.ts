import styled from 'styled-components'
import { Body3, H3 } from '@/styles/typography'

export const Form = styled.form`
  width: 85%;
  margin: 0 auto 88px;
  padding: 24px;
  border-radius: 10px;
  background-color: #ffffff;
`

export const Title = styled(H3)`
  margin-bottom: 24px;
`

export const TextArea = styled.textarea`
  border: none;
  outline: none;
  width: 100%;
  height: 80px;
  padding: 16px;
  margin-bottom: 16px;
  background-color: #f7f8fd;
  border-radius: 5px;
  font-family: 'Jost', sans-serif;
  font-size: 13px;
  line-height: 19px;
  color: #3a4374;

  ::placeholder {
    color: #8c93b3;
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Chars = styled(Body3)`
  color: ${({ theme }) => theme.colors['text:grey']};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`
