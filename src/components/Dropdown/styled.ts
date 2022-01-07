import styled from 'styled-components'
import { Body1 } from '@/styles/typography'

export const Dropdown = styled.div`
  position: absolute;
  margin-top: 16px;
  width: 255px;
  background-color: #ffffff;
  box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.350492);
  border-radius: 10px;

  div:not(:last-child) {
    border-bottom: 1px solid rgba(58, 67, 116, 0.15);
  }
`

export const Option = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px;
  cursor: pointer;
`

export const OptionCopy = styled(Body1)`
  color: ${({ theme }) => theme.colors['text:grey']};

  ${Option}:hover & {
    color: ${({ theme }) => theme.colors.primary};
  }
`
