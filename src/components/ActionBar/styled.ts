import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;
  height: 56px;
  background-color: #373f68;
  margin-bottom: 32px;
`

interface SortButtonProps {
  open: boolean
}

export const FilterDropdown = styled.div`
  position: relative;
`

export const SortButton = styled.button<SortButtonProps>`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: 14px;
  line-height: 20.23px;
  color: #f2f4fe;
  ${({ open }) => open && 'opacity: 0.75;'}
`

export const SortType = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-right: 9px;
`

export const AddButton = styled.button`
  height: 40px;
  border-radius: 10px;
  padding: 10.5px 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #f2f4fe;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 13px;
  line-height: 19px;
`
