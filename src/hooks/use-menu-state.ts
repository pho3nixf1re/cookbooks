import { useState } from 'react'

export function useMenuState() {
  const [isOpen, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)
  const openMenu = () => setOpen(true)

  return { isOpen, closeMenu, openMenu }
}
