import styled from 'styled-components'

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

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  opacity: 0.75;
  background: #979797;
`

export const Sidebar = styled.div`
  width: 271px;
  height: 100vh;
  background: #f2f4ff;
`
