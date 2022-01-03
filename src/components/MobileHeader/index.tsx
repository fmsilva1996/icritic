import { FC, useState } from 'react'
import Image from 'next/image'
import * as S from './styled'
import Pill from '../Pill'
import { ROADMAP } from './data'
import { SuggestionCategory } from '@/types/suggestion'

const MobileHeader: FC = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSidebar = () => setShowSidebar(prevState => !prevState)

  const renderMenuIcon = () => {
    return showSidebar ? (
      <S.Pointer role="button" onClick={toggleSidebar}>
        <Image src="/icons/cross.svg" alt="Close Menu" height={16} width={16} />
      </S.Pointer>
    ) : (
      <S.Pointer role="button" onClick={toggleSidebar}>
        <Image
          src="/icons/hamburger.svg"
          alt="Open Menu"
          height={17}
          width={20}
        />
      </S.Pointer>
    )
  }

  return (
    <>
      <S.Navbar>
        <div>
          <S.Title>Frontend Mentor</S.Title>
          <S.Subtitle>Feedback Board</S.Subtitle>
        </div>
        {renderMenuIcon()}
      </S.Navbar>
      <S.Overlay role="button" onClick={toggleSidebar} open={showSidebar} />
      <S.Sidebar open={showSidebar}>
        <S.Suggestions>
          {Object.entries(SuggestionCategory).map(([key, value]) => (
            <Pill key={key}>{value}</Pill>
          ))}
        </S.Suggestions>
        <S.Roadmap>
          <S.Header>
            <S.SectionTitle>Roadmap</S.SectionTitle>
            <S.Link href="#">View</S.Link>
          </S.Header>
          <S.List>
            {ROADMAP.map((stage, index) => (
              <S.ListItem key={`roadmap-${index}`}>
                <S.Bullet colour={stage.color} />
                <S.StageName>{stage.name}</S.StageName>
                <S.StageCount>{stage.count}</S.StageCount>
              </S.ListItem>
            ))}
          </S.List>
        </S.Roadmap>
      </S.Sidebar>
    </>
  )
}

export default MobileHeader
