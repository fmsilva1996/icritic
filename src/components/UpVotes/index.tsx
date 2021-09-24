import { FC } from 'react'
import { SUpVotes, SText } from './styled'
import Chevron from '../Chevron/index'

const UpVotes: FC = ({ children }) => {
  return (
    <SUpVotes>
      <Chevron
        height="7"
        width="11"
        viewBox="0 0 11 7"
        path="M1.33398 6L5.33398 2L9.33398 6"
        colorKey="secondary"
      />
      <SText>{children}</SText>
    </SUpVotes>
  )
}

export default UpVotes
