'use client'
import { InputLabel } from '@mui/material'
import styled from '@emotion/styled'

export const CustomLabel = styled(InputLabel)(({ theme }) => ({
  fontSize: '16px',
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontWeight: 400,
  color: '#4B465C',
}))
