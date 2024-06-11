import { Box } from '@mui/material'
import React from 'react'

const CustomIconUploader = (props: any) => {
  const { onChange, value, index, subIndex } = props
  return (
    <label
      htmlFor={`icon_menu_items_${index}_${subIndex}`}
      style={{ width: '100%', fontFamily: 'Public Sans' }}
    >
      Icon
      <input
        type="file"
        id={`icon_menu_items_${index}_${subIndex}`}
        hidden
        onChange={onChange}
        // onChange={(e: any) => {
        //   console.log('icons is ', index)
        //   handleIconChange(index, subIndex, 'icon', e)
        // }}
      />
      <Box
        sx={{
          width: '100%',
          height: '38px',
          border: '1px solid darkgray',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          pl: '10px',
          color: 'var(--black)',
          fontSize: '14px',
          fontWeight: 300,
          mb: 3,
          mt: '12px',
          overflow: 'hidden',
        }}
      >
        {value || 'Upload icon'}
      </Box>
    </label>
  )
}

export default CustomIconUploader
