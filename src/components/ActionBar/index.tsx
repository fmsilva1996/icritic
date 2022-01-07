import { FC, useState } from 'react'
import { useRouter } from 'next/router'

import useClickOutside from '@/hooks/useClickOutside'

import Chevron from '../Chevron'
import Button, { BtnType } from '../Button'
import Dropdown, { DropdownProps } from '../Dropdown'

import * as S from './styled'
import { SORTS } from './data'

const ActionBar: FC = () => {
  const [selected, setSelected] = useState(SORTS[0])
  const [expanded, setExpanded] = useState(false)
  const dropdownRef = useClickOutside(() => setExpanded(false))
  const router = useRouter()

  const handleOptionClick: DropdownProps['handleOptionClick'] = option => {
    setSelected(option)
    setExpanded(false)
  }

  const handleAddClick = () => router.push('/create')

  return (
    <S.Container>
      <S.FilterDropdown ref={dropdownRef}>
        <S.SortButton
          open={expanded}
          onClick={() => setExpanded(prevState => !prevState)}
        >
          Sort by: <S.SortType>{selected}</S.SortType>
          <Chevron
            height="9"
            width="7"
            viewBox="0 0 9 7"
            path={expanded ? 'M1 6L5 2L9 6' : 'M1 1L5 5L9 1'}
            colorKey="text:white"
          />
        </S.SortButton>
        {expanded && (
          <Dropdown
            options={SORTS}
            handleOptionClick={handleOptionClick}
            selected={selected}
          />
        )}
      </S.FilterDropdown>
      <Button btnType={BtnType.Primary} handleClick={handleAddClick}>
        + Add Feedback
      </Button>
    </S.Container>
  )
}

export default ActionBar
