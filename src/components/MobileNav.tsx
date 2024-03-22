import Box from '@mui/system/Box'
import Button from '@mui/material/Button'

import Typography from '@mui/material/Typography'

import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'

import Image from 'next/image'
import { IconButton } from '@mui/material'
import { Close } from '@mui/icons-material'
import { useMenuStore } from '@/providers/menu-store-provider'
import NavItems from './NavItems'
import logoMobile from '../../public/Images/lovely-maldives-logo-white.png'

export default function MobileNav({ menuItems }: any) {
  const isOpen = useMenuStore((state) => state.isOpen)
  const close = useMenuStore((state) => state.close)

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        position: 'fixed',
        top: '0',
        zIndex: 999,
        transform: isOpen ? 'translateY(0%)' : 'translateY(-110%)',
        background: 'var(--brown)',
        boxShadow: '0 0 25px rgb(0 0 0 / 10%)',
        pb: '20px',
        opacity: isOpen ? 1 : 0,
        transition: 'opacity 0.4s, transform 0.4s',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'space-around',
        overflow: 'hidden',
        // mt: { md: '0', xs: '86px' },
        gap: { md: '18px', xs: '0' },
        // borderTop: '1px solid lightgray',
        textAlign: 'center',
        color: 'white',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignSelf: 'center',
          mt: 2,
        }}
        component={Image}
        src={logoMobile}
        alt="Logo"
        width={66.9}
        height={50.1}
      />
      <IconButton
        onClick={close}
        sx={{
          color: 'white',
          position: 'absolute',
          top: '10px',
          right: '10px',
        }}
      >
        <Close
          sx={{
            fontSize: '46px',
          }}
        />
      </IconButton>

      <NavItems items={menuItems} />
      <Box
        sx={{
          width: '60%',
          pt: 6,
          borderBottom: '1.8px solid #fff',
          margin: '0 auto',
        }}
      />

      <Box
        sx={{
          mt: '1rem',
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
            aria-label="Email"
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
            aria-label="Phone number"
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
      <Box
        sx={{
          width: '60%',
          pt: 1,
          borderBottom: '1.8px solid #fff',
          margin: '0 auto',
        }}
      />
    </Box>
  )
}
