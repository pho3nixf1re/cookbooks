import { useState, MouseEvent } from 'react'

export function useMenuState() {
  const [element, setElement] = useState<null | HTMLElement>(null)
  const closeMenu = () => setElement(null)
  const openMenu = (event: MouseEvent<HTMLElement>) =>
    setElement(event.currentTarget)
  const isOpen = Boolean(element)

  return { isOpen, closeMenu, openMenu, element }
}
