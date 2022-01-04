import styled from 'styled-components'
import { device } from '@/styles/devices'
import { ButtonProps } from './index'

export const Button = styled.button<ButtonProps>`
  width: 134px;
  height: 40px;
  border-radius: 10px;
  background-color: ${({ theme, btnType }) => theme.colors[btnType]};

  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 13px;
  line-height: 19px;
  text-align: center;

  @media ${device.mobileL} {
    width: 158px;
    height: 44px;
    font-size: 14px;
    line-height: 20px;
  }

  :hover {
    background-color: ${({ theme, btnType }) =>
      theme.colors[`${btnType}:faded`]};
  }
`
