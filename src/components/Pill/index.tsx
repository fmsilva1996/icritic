import { FC } from 'react'
import { SPill, SText } from './styled'

const Pill: FC = ({ children }) => {
  return (
    <SPill>
      <SText>{children}</SText>
    </SPill>
  )
}

export default Pill
