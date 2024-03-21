import Box from '@mui/system/Box'
import Button from '@mui/material/Button'

import Typography from '@mui/material/Typography'

import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'

import { useMenuStore } from '@/providers/menu-store-provider'
import NavItems from './NavItems'

export default function MobileNav({ menuItems }: any) {
  const isOpen = useMenuStore((state) => state.isOpen)
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        position: 'fixed',
        top: '0',
        zIndex: 999,
        transform: isOpen ? 'translateY(0%)' : 'translateY(-100%)',
        background: 'var(--brown)',
        boxShadow: '0 0 25px rgb(0 0 0 / 10%)',
        pb: '20px',
        opacity: isOpen ? 1 : 0,
        transition: 'opacity 0.4s, transform 0.4s',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'space-around',
        overflow: 'hidden',
        mt: { md: '0', xs: '90px' },
        gap: { md: '18px', xs: '0' },
        // borderTop: '1px solid lightgray',
        textAlign: 'center',
        color: 'white',
      }}
    >
      <NavItems items={menuItems} />
      <Box
        sx={{
          mt: '5rem',
          borderTop: '1px solid #fff',
          borderBottom: '1px solid #fff',
        }}
      >
        <Typography
          sx={{
            mt: '20px',
            fontSize: '1.2rem',
          }}
        >
          Get in touch
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            py: '20px',
          }}
        >
          <Button
            sx={{
              color: '#fff',
              fontSize: '1.2rem',
            }}
          >
            Email
          </Button>
          <Button
            role="link"
            href="tel:+960-769-4545"
            sx={{
              color: '#fff',
              fontSize: '1.2rem',
            }}
          >
            +960-769-4545
          </Button>
        </Box>
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            justifyContent: 'center',
            mb: '20px',
            gap: '20px',
          }}
        >
          <FacebookRoundedIcon />
          <XIcon />
          <InstagramIcon />
          <WhatsAppIcon sx={{ color: 'lightgreen' }} />
        </Box>
      </Box>
    </Box>
  )
}
