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
  type?: 'submit' | 'reset' | 'button'
}

const Button: FC<ButtonProps> = ({ btnType, children, type }) => (
  <S.Button btnType={btnType} type={type}>
    {children}
  </S.Button>
)

export default Button
