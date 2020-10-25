import { IconButton } from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import React, { useState } from 'react'
import { useRemoveCookbookMutation } from '../../../hooks/data/use-remove-cookbook-mutation'
import { DeleteConfirmationDialog } from '../../DeleteConfirmationDialog'

type Props = {
  bookId: number
}

export function DeleteAction({ bookId }: Props) {
  const { removeCookbook } = useRemoveCookbookMutation({ bookId })
  const [open, setOpen] = useState(false)
  const handleConfirmation = (): void => {
    removeCookbook()
    setOpen(false)
  }
  const handleCancel = (): void => setOpen(false)
  const handleClick = (): void => setOpen(true)

  return (
    <>
      <IconButton
        size="small"
        color="secondary"
        onClick={handleClick}
        aria-label="delete"
      >
        <Delete />
      </IconButton>
      <DeleteConfirmationDialog
        open={open}
        onCancel={handleCancel}
        onConfirm={handleConfirmation}
      />
    </>
  )
}
