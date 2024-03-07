import Stack from '@mui/material/Stack'

import { ReactNode } from 'react'
import Button from '@mui/material/Button'
import Header from '@/components/Header'

export default function Home(): ReactNode {
  return (
    <main>
      <Header />
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>{' '}
    </main>
  )
}
