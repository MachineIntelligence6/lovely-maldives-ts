import { Box } from '@mui/system'
import React from 'react'

const IconUploader = (props: any) => {
  const { label, onChange, iconName } = props
  return (
    <label htmlFor="icon_">
      {label}
      <input type="file" id="icon_" hidden onChange={onChange} />
      <Box
        sx={{
          width: '100%',
          height: '38px',
          border: '1px solid #e1e1e1',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          pl: '10px',
          color: 'darkgray',
          fontSize: '14px',
          fontWeight: 300,
          mb: 3,
          mt: 1,
          overflow: 'hidden',
        }}
      >
        {iconName}
      </Box>
    </label>
  )
}

export default IconUploader
