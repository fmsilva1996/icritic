import styled from 'styled-components'
import { ButtonProps } from './index'

export const SButton = styled.button<ButtonProps>`
  width: 158px;
  height: 44px;
  border-radius: 10px;
  background-color: ${({ theme, btnType }) => theme.colors[btnType]};

  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 14px;
  line-height: 20px;
  text-align: center;

  :hover {
    background-color: ${({ theme, btnType }) =>
      theme.colors[`${btnType}:faded`]};
  }
`
