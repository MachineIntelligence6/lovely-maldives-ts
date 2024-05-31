import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

const AddBtnsWraper = (props: any) => {
  const { handleRemoveSection, index, title } = props
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ mb: 1 }}
    >
      <Typography
        variant="h3"
        color="var(--black)"
        sx={{ fontSize: '22px', mb: 2, fontWeight: 'bold' }}
      >
        {title}
      </Typography>
      <Button
        variant="outlined"
        color="error"
        onClick={() => handleRemoveSection(index)}
      >
        Remove
      </Button>
    </Stack>
  )
}

export default AddBtnsWraper
