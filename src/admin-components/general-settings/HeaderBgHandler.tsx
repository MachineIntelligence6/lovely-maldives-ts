'use client'

import { Box, Stack } from '@mui/system'
import React, { useState } from 'react'
import { CustomLabel } from '../styled/CustomLabels'

function HeaderBgHandler() {
  const [selectedColor, setSelectedColor] = useState('#967f5d') // Default black color

  const handleColorChange = (e: any) => {
    setSelectedColor(e.target.value)
  }

  const handleHexInputChange = (e: any) => {
    setSelectedColor(e.target.value)
  }
  return (
    <Stack direction="row" alignItems="start">
      <input
        type="color"
        value={selectedColor}
        onChange={handleColorChange}
        style={{
          width: '72px',
          height: '72px',
        }}
      />
      <Box sx={{ ml: 3 }}>
        <CustomLabel id="demo-simple-select-label" sx={{ mb: 1 }}>
          Hex Code
        </CustomLabel>
        <input
          type="text"
          value={selectedColor}
          onChange={handleHexInputChange}
          style={{
            width: '100px',
            height: '36px',
            padding: '2px 4px',
            border: '1px solid #e1e1e1',
            borderRadius: '4px',
          }}
        />
      </Box>
    </Stack>
  )
}

export default HeaderBgHandler
