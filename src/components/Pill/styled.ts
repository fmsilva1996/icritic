import styled from 'styled-components'

export const SPill = styled.div`
  width: fit-content;
  height: 30px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 16px 6px 16px;
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
`

export const SText = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-size: 13px;
  line-height: 19px;
`
