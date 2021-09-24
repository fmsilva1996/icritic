import { FC } from 'react'
import Image from 'next/image'
import { SButton, SText } from './styled'
import BluntChevron from '../BluntChevron'

export enum BtnType {
  Dark = 'dark',
  Light = 'light',
}

export interface ButtonProps {
  btnType: BtnType
}

const BackButton: FC<ButtonProps> = ({ btnType, children }) => {
  const colorKey = btnType === BtnType.Dark ? 'text:grey' : 'secondary'

  return (
    <SButton btnType={btnType}>
      <BluntChevron colorKey={colorKey} />
      <SText btnType={btnType}>{children}</SText>
    </SButton>
  )
}

export default BackButton
