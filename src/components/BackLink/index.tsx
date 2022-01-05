import { FC } from 'react'
import Link from 'next/link'
import * as S from './styled'
import BluntChevron from '../BluntChevron'

export enum LinkType {
  Dark = 'dark',
  Light = 'light',
}

export interface LinkProps {
  linkType: LinkType
}

export interface BackLinkProps extends LinkProps {
  href: string
}

const BackLink: FC<BackLinkProps> = ({ linkType, href, children }) => {
  const colorKey = linkType === LinkType.Dark ? 'text:grey' : 'secondary'

  return (
    <Link href={href} passHref>
      <S.Link linkType={linkType}>
        <BluntChevron colorKey={colorKey} />
        <S.Text linkType={linkType}>{children}</S.Text>
      </S.Link>
    </Link>
  )
}

export default BackLink
