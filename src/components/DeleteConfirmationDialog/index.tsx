import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core'
import React from 'react'

type Props = {
  open: boolean
  onCancel: () => void
  onConfirm: () => void
}

export function DeleteConfirmationDialog({ onCancel, onConfirm, open }: Props) {
  return (
    <Dialog
      open={open}
      onClose={onCancel}
      keepMounted={false}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Please confirm removal</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you wish to permanently remove this?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="secondary" autoFocus={true}>
          Remove
        </Button>
      </DialogActions>
    </Dialog>
  )
}
