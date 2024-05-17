'use client'

import styled from '@emotion/styled'
import { Box, InputLabel, TextField } from '@mui/material'
import React from 'react'

const CustomLabel = styled(InputLabel)(({ theme }) => ({
  fontSize: '16px',
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontWeight: 400,
  color: '#4B465C',
}))

function TextFieldWraper(props: any) {
  const { type, value, name, onChange, label, placeholder } = props
  return (
    <Box sx={{ mb: '15px', width: '100%' }}>
      <CustomLabel id="demo-simple-select-label" sx={{ mb: '7px' }}>
        {label}
      </CustomLabel>
      <TextField
        id="outlined-basic"
        placeholder={placeholder}
        variant="outlined"
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          sx: {
            height: '38px !important',
          },
        }}
        sx={{
          width: '100%',
          borderRadius: '6px',
        }}
      />
    </Box>
  )
}

export default TextFieldWraper
