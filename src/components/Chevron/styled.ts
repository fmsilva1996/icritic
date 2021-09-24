import styled from 'styled-components'
import { SUpVotes } from '../UpVotes/styled'

import { ChevronProps } from './index'

export const SChevron = styled.svg.attrs(({ width, height, viewBox }) => ({
  width,
  height,
  viewBox,
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
}))``

export const SPath = styled.path.attrs(({ path }) => ({
  d: path,
  strokeWidth: '2',
}))<ChevronProps>`
  stroke: ${({ theme, colorKey }) => theme.colors[colorKey]};

  ${SUpVotes}:hover & {
    stroke: ${({ theme }) => theme.colors['secondary']};
  }

  ${SUpVotes}:active & {
    stroke: ${({ theme }) => theme.colors['text:white']};
  }
`
