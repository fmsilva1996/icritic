import styled from 'styled-components'

export const H4 = styled.h4`
  margin: 0;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 20px;
  letter-spacing: -0.2;
  color: #3a4374;
`

export const Body1 = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: 23px;
  color: #3a4374;
`

export const Body3 = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  line-height: 19px;
  color: #3a4374; ;
`
