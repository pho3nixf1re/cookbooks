import { TextField as Delegate, TextFieldProps } from '@material-ui/core'
import { useField } from 'formik'
import React from 'react'

type Props = { name: string } & TextFieldProps

export function TextField({ name, ...props }: Props) {
  const [field, { error }] = useField(name)
  return <Delegate {...field} {...props} error={!!error} helperText={error} />
}
