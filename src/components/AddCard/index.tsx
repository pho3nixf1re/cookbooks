import { Card, Button } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import React from 'react'
import { useStyles } from './styles'

type Props = {
  onClick: () => void
}

export const AddCard = ({ onClick }: Props) => {
  const styles = useStyles()

  return (
    <Card className={styles.container}>
      <Button className={styles.button} onClick={onClick}>
        <Add />
      </Button>
    </Card>
  )
}
