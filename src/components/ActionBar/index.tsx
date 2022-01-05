import { FC, RefObject, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Chevron from '../Chevron'
import * as S from './styled'
import { SORT_OPTIONS, SortOption } from './data'
import Button, { BtnType } from '../Button'

const ActionBar: FC = () => {
  const [selected, setSelected] = useState(SORT_OPTIONS[0].name)
  const [expanded, setExpanded] = useState(false)
  const dropdownRef: RefObject<HTMLDivElement> | null = useRef(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef?.current &&
        !dropdownRef.current.contains(event.target as HTMLDivElement)
      ) {
        setExpanded(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.addEventListener('mousedown', handleClickOutside)
  }, [dropdownRef])

  const handleOptionClick = (option: SortOption) => {
    setSelected(option.name)
    setExpanded(false)
  }

  const isCurrentSort = (option: SortOption) => option.name === selected

  const renderDropdown = () => (
    <S.Dropdown>
      {SORT_OPTIONS.map((option, index) => (
        <S.Option
          key={`option-${index}`}
          role="button"
          onClick={() => handleOptionClick(option)}
        >
          <S.OptionCopy>{option.name}</S.OptionCopy>
          {isCurrentSort(option) && (
            <Image src="/icons/tick.svg" alt="Tick" height={7.5} width={11} />
          )}
        </S.Option>
      ))}
    </S.Dropdown>
  )

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
        {expanded && renderDropdown()}
      </S.FilterDropdown>
      <Button btnType={BtnType.Primary}>+ Add Feedback</Button>
    </S.Container>
  )
}

export default ActionBar
