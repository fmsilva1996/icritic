import styled from 'styled-components'
import { Body1 } from '@/styles/typography'

export const Navbar = styled.div`
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background: radial-gradient(
    128.88% 128.88% at 103.9% -10.39%,
    #e84d70 0%,
    #a337f6 53.09%,
    #28a7ed 100%
  );
`

export const Title = styled.h1`
  margin: 0;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -0.1875px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors['text:white']};
`

export const Subtitle = styled.h2`
  margin: 0;
  font-size: 13px;
  line-height: 22px;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors['text:white']};
  opacity: 0.75;
`

export const Pointer = styled.div`
  cursor: pointer;
`

interface SidebarProps {
  open: boolean
}

export const Overlay = styled.div<SidebarProps>`
  width: 100vw;
  height: 100vh;
  z-index: 1;
  position: fixed;
  background: rgb(151, 151, 151);
  display: ${({ open }) => (open ? 'block' : 'none')};
  opacity: ${({ open }) => (open ? '0.75' : '0')};
  transition: ease 200ms opacity;
`

export const Sidebar = styled.div<SidebarProps>`
  position: fixed;
  right: ${({ open }) => (open ? '0' : '-275px')};
  width: 275px;
  height: 100%;
  z-index: 2;
  background: #f7f8fd;
  transition: ease 200ms right;
`
export const SidebarSection = styled.div`
  display: flex;
  background: white;
  margin: 24px;
  padding: 24px;
  border-radius: 10px;
`
export const Suggestions = styled(SidebarSection)`
  flex-wrap: wrap;
  gap: 14px 8px;
`

export const Roadmap = styled(SidebarSection)`
  flex-direction: column;
  padding-top: 0;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 19px 0 24px;
`

export const SectionTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: -0.25px;
  line-height: 26px;
  color: #3a4374;
`

export const Link = styled.a`
  margin: 0;
  font-size: 13px;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  line-height: 19px;
  color: #4661e6;
`

export const StageName = styled(Body1)`
  flex: 2;
`

export const StageCount = styled(Body1)`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  li:not(:last-child) {
    margin-bottom: 8px;
  }
`

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

interface BulletProps {
  colour: string
}

export const Bullet = styled.span<BulletProps>`
  height: 8px;
  width: 8px;
  background-color: ${({ colour }) => colour};
  border-radius: 50%;
  margin-right: 16px;
`
