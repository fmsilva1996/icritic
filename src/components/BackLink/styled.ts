import styled from 'styled-components'
import { LinkProps, LinkType } from './index'
import { H4 } from '@/styles/typography'

export const Link = styled.a<LinkProps>`
  ${({ theme, linkType }) =>
    linkType === LinkType.Dark &&
    `
      width: 158px;
      height: 53px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      background-color: ${theme.colors['tertiary']};
    `}
`

export const Text = styled(H4)<LinkProps>`
  display: inline-block;
  margin-left: 15px;
  color: ${({ theme, linkType }) =>
    linkType === LinkType.Dark
      ? theme.colors['text:white']
      : theme.colors['text:grey']};

  :hover {
    text-decoration: underline;
  }
`
