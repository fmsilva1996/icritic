import { FC } from 'react'
import { SChevron, SPath } from './styled'

export interface ChevronProps {
  height: string
  width: string
  viewBox: string
  path: string
  colorKey: 'secondary' | 'text:white'
}

const Chevron: FC<ChevronProps> = props => (
  <SChevron {...props}>
    <SPath {...props} />
  </SChevron>
)

export default Chevron
