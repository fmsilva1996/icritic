import { useRef, RefObject, useEffect } from 'react'

const useClickOutside = (handleClickOutside: () => void) => {
  const ref: RefObject<HTMLDivElement> | null = useRef(null)

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        ref?.current &&
        !ref.current.contains(event.target as HTMLDivElement)
      ) {
        handleClickOutside()
      }
    }

    document.addEventListener('mousedown', handleClick)
    return () => document.addEventListener('mousedown', handleClick)
  }, [ref, handleClickOutside])

  return ref
}

export default useClickOutside
