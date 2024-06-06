import { Button, CircularProgress, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

function HeadingWraper(props: any) {
  const { handleSave, detectChange } = props
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
        sx={{ fontSize: '18px', fontWeight: 'bold' }}
      >
        {props?.title}
      </Typography>
      <Button
        sx={{
          bgcolor: !detectChange ? 'silver' : 'var(--blue)',
          color: 'white',
          width: '120px',
          height: '36px',
          textTransform: 'capitalize',
          fonsSize: '14px',
          '&:hover': {
            bgcolor: 'var(--blue)',
          },
        }}
        onClick={handleSave}
        disabled={!detectChange}
      >
        Save
      </Button>
    </Stack>
  )
}

export default HeadingWraper
