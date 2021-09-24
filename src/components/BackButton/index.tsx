import { FC } from 'react'
import Image from 'next/image'
import { SButton, SText } from './styled'

export enum BtnType {
  Dark = 'dark',
  Light = 'light',
}

export interface ButtonProps {
  btnType: BtnType
}

const BackButton: FC<ButtonProps> = ({ btnType, children }) => {
  const src =
    btnType === BtnType.Dark
      ? '/icons/chevron-grey.svg'
      : '/icons/chevron-blue.svg'

  return (
    <SButton btnType={btnType}>
      <Image src={src} alt="chevron" height="10" width="10" />
      <SText btnType={btnType}>{children}</SText>
    </SButton>
  )
}

export default BackButton
