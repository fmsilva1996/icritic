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
}

const Button: FC<ButtonProps> = ({ btnType, children }) => {
  return <S.Button btnType={btnType}>{children}</S.Button>
}

export default Button
