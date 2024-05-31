/* eslint-disable no-unneeded-ternary */

'use  client'

import { Button, Menu, MenuItem } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import React, { useState } from 'react'

const CustomDropdown = (props: any) => {
  const { label, options, handleFilterChange, filter } = props
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleOptionSelect = (option: any) => {
    handleFilterChange(option)
    handleClose()
  }
  return (
    <div>
      <Button
        onClick={handleClick}
        sx={{
          color: '#A8AAAE',
          fontSize: '15px',
          borderRadius: '6px',
          minWidth: '100px',
          height: '38px',
          bgcolor: 'white',
          border: '1px solid #c4c4c4',
          textTransform: 'capitalize',
        }}
      >
        {filter ? filter : 'Filters'}
        <ArrowDropDownIcon
          sx={{
            fontSize: '15px',
            ml: '10px',
            color: '#A8AAAE',
          }}
        />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        {options?.map((option: any, index: number) => (
          <MenuItem
            key={index}
            onClick={() => handleOptionSelect(option.label)}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export default CustomDropdown
