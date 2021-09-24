import styled from 'styled-components'
import { ButtonProps, BtnType } from './index'

export const SButton = styled.button<ButtonProps>`
  width: 158px;
  height: 53px;
  border-radius: 10px;
  background-color: ${({ theme, btnType }) =>
    btnType === BtnType.Dark && theme.colors['tertiary']};
`

export const SText = styled.p<ButtonProps>`
  display: inline-block;
  margin-left: 15px;
  color: ${({ theme, btnType }) =>
    btnType === BtnType.Dark
      ? theme.colors['text:white']
      : theme.colors['text:grey']};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 14px;
  line-height: 20px;

  :hover {
    text-decoration: underline;
  }
`
