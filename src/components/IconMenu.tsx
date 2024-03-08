/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from '@mui/material'

function IconMenu({ isVisible }: any) {
  return (
    <>
      <Box
        sx={{
          width: '40px',
          height: '2px',
          background: { md: 'var(--brown)', xs: 'white' },
        }}
        className={`line ${isVisible ? 'line1' : ''}`}
      />
      <Box
        sx={{
          width: '40px',
          height: '2px',
          background: { md: 'var(--brown)', xs: 'white' },
          mt: isVisible ? '0px' : '.6rem',
        }}
        className={`line ${isVisible ? 'line2' : ''}`}
      />
    </>
  )
}

export default IconMenu
