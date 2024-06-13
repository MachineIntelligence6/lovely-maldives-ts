import { MenuItem, Select } from '@mui/material'
import React from 'react'

function CustomSelect(props: any) {
  const { value, placeholder, options, onChange, name } = props
  console.log('options ', options)
  return (
    <Select
      id="outlined-basic"
      placeholder={placeholder}
      variant="outlined"
      value={value}
      name={name}
      displayEmpty
      onChange={onChange}
      sx={{
        width: '100%',
        height: '38px',
        borderRadius: '6px',
        color: '#4B465C',
        opacity: '.7',
        bgcolor: '#F6F6F6',
        border: '1px solid #F6F6F6',
        fontFamily: 'Public Sans',
        fontSize: { xs: '12px', sm: '16px' },
        px: '0px',
        '& .MuiSelect-root': {
          color: '#757575',
        },
      }}
    >
      <MenuItem
        sx={{
          fontFamily: 'Public Sans',
        }}
        value=""
        disabled
      >
        {placeholder}
      </MenuItem>
      {options?.map((option: any, index: number) => (
        <MenuItem
          sx={{ fontFamily: 'Public Sans' }}
          key={index}
          value={option?.value}
        >
          {option?.label}
        </MenuItem>
      ))}
    </Select>
  )
}

export default CustomSelect
