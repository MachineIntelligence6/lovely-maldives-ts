import Box from '@mui/system/Box'

import { useMenuStore } from '@/providers/menu-store-provider'
import NavItems from './NavItems'

export default function SubNav({ menuItems }: any) {
  const isOpen = useMenuStore((state) => state.isOpen)

  return (
    <Box
      component="nav"
      sx={{
        background: menuItems?.menusBgcolor || 'white',
        position: 'fixed',
        top: { xs: '0', md: '90px' },
        boxShadow: '0 0 25px rgb(0 0 0 / 10%)',
        py: '10px',
        width: '100%',
        px: '100px',
        zIndex: 997,
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'opacity 0.4s, transform 0.4s',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        mt: { md: '0', xs: '85px' },
        gap: { md: '18px', xs: '0' },
        borderTop: '1.5px solid lightgray',
        '@media only screen and (min-width: 1600px)': {
          borderTop: '1.5px solid lightgray',
          top: '91px',
        },
      }}
    >
      <NavItems items={menuItems?.menus} />
    </Box>
  )
}
