/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */

'use client'

import { useRouter } from 'next/navigation'
import MenuItem from '@mui/material/MenuItem'
import Link from 'next/link'
import { Box } from '@mui/system'

function NavItems({ items }: any) {
  const router = useRouter()
  console.log('mobile items ', items)
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        mt: '1rem',
        gap: { xs: 0, md: '20px' },
      }}
    >
      {items?.length > 0 &&
        items?.map((item: any, index: number) => (
          <MenuItem
            key={index}
            // onClick={() => {
            //   handleMenu(item.route)
            // }}
            role="link"
            aria-labelledby={item?.label}
            component={Link}
            href={item?.link}
            sx={{
              pt: 1,
              px: '3px',
              // pb: '3px',
              textTransform: 'capitalize',
              position: 'relative',
              fontSize: { xs: '1.4rem', md: '1.2rem' },
              fontWeight: { xs: '600', md: 'regular' },
              '&:after': {
                content: "''",
                position: 'absolute',
                width: '100%',
                transform: 'scaleX(0)',
                borderRadius: '5px',
                height: '1px',
                bottom: 0,
                left: 0,
                background: { xs: '#fff', md: '#666' },
                transformOrigin: 'bottom right',
                transition: 'transform 0.25s ease-out',
              },
              '&:hover': {
                background: 'transparent',
                '&:after': {
                  transform: 'scaleX(1)',
                  transformOrigin: 'bottom left',
                },
              },
            }}
          >
            {item?.menu}
          </MenuItem>
        ))}
    </Box>
  )
}

export default NavItems
