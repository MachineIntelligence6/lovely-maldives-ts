'use client'
import styled from '@emotion/styled'
import { Card } from '@mui/material'

export const CustomCard = styled(Card)(({ theme }) => ({
  overflowX: 'hidden',
  boxShadow: '0px 2px 4px 0px rgba(165, 163, 174, 0.30)',
  border: 'none',
  borderRadius: '6px',
  minHeight: '50px',
  height: 'auto',
  backgroundColor: 'white',
  padding: '1rem',
}))
