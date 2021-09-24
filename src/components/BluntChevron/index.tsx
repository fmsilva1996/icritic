import { FC } from 'react'
import { SBluntChevron, SPath } from './styled'

export interface BluntChevronProps {
  colorKey: 'secondary' | 'text:grey'
}

const BluntChevron: FC<BluntChevronProps> = ({ colorKey }) => (
  <SBluntChevron>
    <SPath colorKey={colorKey} />
  </SBluntChevron>
)

export default BluntChevron
