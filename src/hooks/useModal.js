import { useState } from 'react'

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onOpenChange = (state) => {
    !state ? setIsOpen(false) : setIsOpen(true)
  }
  return {
    isOpen,
    open: () => {
      setIsOpen(true)
    },
    close: () => {
      setIsOpen(false)
    },
    onOpenChange
  }
}
export default useModal
