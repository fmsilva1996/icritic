import styled from 'styled-components'
import { Body1 } from '@/styles/typography'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;
  height: 56px;
  background-color: #373f68;
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

export const Dropdown = styled.div`
  position: absolute;
  margin-top: 16px;
  width: 255px;
  background-color: #ffffff;
  box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.350492);
  border-radius: 10px;

  div:not(:last-child) {
    border-bottom: 1px solid rgba(58, 67, 116, 0.15);
  }
`

export const Option = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px;
  cursor: pointer;
`

export const OptionCopy = styled(Body1)`
  color: 647196;

  ${Option}:hover & {
    color: ${({ theme }) => theme.colors.primary};
  }
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
