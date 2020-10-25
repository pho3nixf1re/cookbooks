import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@material-ui/core'
import { Formik, Form, FormikHelpers } from 'formik'
import React from 'react'
import { object, string } from 'yup'
import { useCreateCookbookMutation } from '../../hooks/data/use-create-cookbook-mutation'
import { TextField } from '../formik/TextField'

type Props = {
  onClose: () => void
  open: boolean
}

type FormValues = {
  name: string
}

const SCHEMA = object().shape({ name: string().required() })

const INITIAL_VALUES = { name: '' }

export function AddCookbookDialog({ onClose, open }: Props) {
  const { createCookbook } = useCreateCookbookMutation()
  const onSubmit = async (
    { name }: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    resetForm()
    onClose()

    await createCookbook({ name })
  }
  const onReset = (): void => onClose()

  return (
    <Formik<FormValues>
      initialValues={INITIAL_VALUES}
      validationSchema={SCHEMA}
      onSubmit={onSubmit}
      onReset={onReset}
    >
      {({ handleReset }) => (
        <Dialog
          open={open}
          onClose={(): void => handleReset()}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add a cookbook</DialogTitle>
          <Form>
            <DialogContent>
              <TextField
                autoFocus={true}
                margin="dense"
                name="name"
                label="Cookbook name"
                fullWidth={true}
              />
            </DialogContent>
            <DialogActions>
              <Button type="reset" color="secondary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Create
              </Button>
            </DialogActions>
          </Form>
        </Dialog>
      )}
    </Formik>
  )
}
