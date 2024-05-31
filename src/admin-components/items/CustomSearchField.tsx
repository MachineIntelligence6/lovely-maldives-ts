'use client'

import styled from '@emotion/styled'
import { Box, InputAdornment, InputLabel, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import React from 'react'

const CustomLabel = styled(InputLabel)(({ theme }) => ({
  fontSize: '16px',
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontWeight: 400,
  color: '#4B465C',
}))

function CustomSearchField(props: any) {
  const { type, value, name, onChange, label, placeholder } = props
  return (
    <Box sx={{ width: '100%', maxWidth: '350px' }}>
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
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          sx: {
            height: '38px !important',
            fontFamily: 'Public Sans',
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

export default CustomSearchField
