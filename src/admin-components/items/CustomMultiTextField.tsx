'use client'

import React from 'react'
import styled from '@emotion/styled'
import { Box, InputLabel, TextField } from '@mui/material'

const CustomLabel = styled(InputLabel)(({ theme }) => ({
    fontSize: '16px',
    fontFeatureSettings: "'clig' off, 'liga' off",
    fontWeight: 400,
    color: '#4B465C',
  }))

const CustomMultiTextField = (props: any) => {
    const { type, value, name, onChange, label, placeholder } = props
  return (
    <Box sx={{ mb: '15px', width: '100%' }}>
      <CustomLabel
        id="demo-simple-select-label"
        sx={{ mb: '7px', fontFamily: 'Public Sans' }}
      >
        {label}
      </CustomLabel>
      <Box
      sx={{
        width: '100%',
         height: '38px',
         borderRadius: '6px',
         fontFamily: 'Public Sans',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'space-between',
         border: '1px solid #e1e1e1',
      }}
      >
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
            height: '100% !important',
            fontFamily: 'Public Sans',
          },
        }}
        sx={{
          width: '90%',
          border: 'none',
          borderRadius: '6px',
        }}/>
      </Box>
      {/* <TextField
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
            fontFamily: 'Public Sans',
          },
        }}
        sx={{
          width: '100%',
          borderRadius: '6px',
        }}
      /> */}
    </Box>
  )
}

export default CustomMultiTextField
