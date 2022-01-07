import { FC } from 'react'
import * as S from './styled'

export enum BtnType {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Danger = 'danger',
}

export interface ButtonProps {
  btnType: BtnType
  handleClick?: () => {}
  type?: 'submit' | 'reset' | 'button'
}

const Button: FC<ButtonProps> = ({ btnType, handleClick, type, children }) => (
  <S.Button btnType={btnType} onClick={handleClick} type={type}>
    {children}
  </S.Button>
)

export default Button
