import { Box, Typography } from '@mui/material'
import React from 'react'

const SectionTitle = ({ title }: any) => {
  return (
    <Box sx={{ width: '100%', height: '40px', pt: '10px', pl: '16px' }}>
      <Typography
        component="div"
        sx={{
          fontSize: '12px',
          fontWeight: 'bold',
          color: 'var(--brown)',
          lineHeight: '14px',
          py: 1,
          borderTop: '1px solid #E5E5E5',
        }}
      >
        {title}
      </Typography>
    </Box>
  )
}

export default SectionTitle
