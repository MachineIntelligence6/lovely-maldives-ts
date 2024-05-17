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

const TextFieldWraper = (props: any) => {
  return (
    <Box sx={{ mb: '15px', width: '100%' }}>
      <CustomLabel id="demo-simple-select-label" sx={{ mb: '7px' }}>
        {props?.label}
      </CustomLabel>
      <TextField
        id="outlined-basic"
        placeholder={props?.placeholder}
        variant="outlined"
        type={props?.type}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
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
