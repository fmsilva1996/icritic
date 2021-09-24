import styled from 'styled-components'

import { BluntChevronProps } from './index'

export const SBluntChevron = styled.svg.attrs(() => ({
  width: '5',
  height: '10',
  viewBox: '0 0 5 10',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
}))``

export const SPath = styled.path.attrs(() => ({
  d: 'M4 9L0 5L4 1',
  strokeWidth: '2',
}))<BluntChevronProps>`
  stroke: ${({ theme, colorKey }) => theme.colors[colorKey]};
`
