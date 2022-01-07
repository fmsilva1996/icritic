import { FC } from 'react'
import Image from 'next/image'

import * as S from './styled'

export interface DropdownProps {
  options: string[]
  handleOptionClick: (option: string) => void
  selected: string
}

const Dropdown: FC<DropdownProps> = ({
  options,
  handleOptionClick,
  selected,
}) => {
  const isSelected = (option: string) => option === selected

  return (
    <S.Dropdown>
      {options.map((option, index) => (
        <S.Option
          key={`option-${index}`}
          role="button"
          onClick={() => handleOptionClick(option)}
        >
          <S.OptionCopy>{option}</S.OptionCopy>
          {isSelected(option) && (
            <Image src="/icons/tick.svg" alt="Tick" height={7.5} width={11} />
          )}
        </S.Option>
      ))}
    </S.Dropdown>
  )
}

export default Dropdown
