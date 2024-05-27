import { Button, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

function HeadingWraper(props: any) {
  const{handleSave} = props
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      gap="1rem"
    >
      <Typography
        variant="body1"
        color="var(--black)"
        sx={{ fontSize: '18px', fontWeight: 'bold', mb: 3 }}
      >
        {props?.title}
      </Typography>
      <Button
        sx={{
          bgcolor: 'var(--blue)',
          color: 'white',
          width: '120px',
          height: '36px',
          '&:hover': {
            bgcolor: 'var(--blue)',
          },
        }}
        onClick={handleSave}
      >
        Save
      </Button>
    </Stack>
  )
}

export default HeadingWraper
