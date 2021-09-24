import { FC } from 'react'
import { SButton } from './styled'

export enum BtnTypes {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Danger = 'danger',
}

export interface ButtonProps {
  btnType: BtnTypes
}

const Button: FC<ButtonProps> = ({ btnType, children }) => {
  return <SButton btnType={btnType}>{children}</SButton>
}

export default Button
