import { Body3, H3 } from '@/styles/typography'
import styled from 'styled-components'

export const Header = styled.div`
  width: 85%;
  margin: 34px auto 55px;
`

export const Form = styled.form`
  width: 85%;
  margin: 0 auto;
  padding: 44px 24px 24px;
  background-color: #ffffff;
  border-radius: 10px;
`

export const Title = styled(H3)`
  margin-bottom: 24px;
`

export const Label = styled.label`
  margin: 0;
  font-size: 13px;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  line-height: 19px;
  color: #3a4374;
`

export const Description = styled(Body3)`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors['text:grey']};
`

export const Input = styled.input`
  border: none;
  outline: none;
  height: 48px;
  width: 100%;
  margin: 16px 0 24px;
  padding: 15px 16px;
  background-color: #f7f8fd;
  border-radius: 5px;
  font-family: 'Jost', sans-serif;
  font-size: 13px;
  line-height: 19px;
  color: #3a4374;
`
