import { FC, Fragment, useState } from 'react'
import Image from 'next/image'
import * as S from './styled'

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

  const renderSidebar = () => (
    <S.Overlay>
      <S.Sidebar>Sidebar HERE!</S.Sidebar>
    </S.Overlay>
  )

  return (
    <>
      <S.Navbar>
        <div>
          <S.Title>Frontend Mentor</S.Title>
          <S.Subtitle>Feedback Board</S.Subtitle>
        </div>
        {renderMenuIcon()}
      </S.Navbar>
      {showSidebar && renderSidebar()}
    </>
  )
}

export default MobileHeader
