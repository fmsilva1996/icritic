import styled from 'styled-components'

export const SUpVotes = styled.div`
  width: 69px;
  height: 32px;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['text']};
  color: ${({ theme }) => theme.colors['secondary']};
  cursor: pointer;

  :hover {
    background-color: #cfd7ff;
  }

  :active {
    background-color: ${({ theme }) => theme.colors['secondary']};
    color: ${({ theme }) => theme.colors['text:white']};
  }

  @media (min-width: 768px) {
    width: 40px;
    height: 53px;
    flex-direction: column;
  }
`

export const SText = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-size: 13px;
  line-height: 19px;
  margin: 0;
`
