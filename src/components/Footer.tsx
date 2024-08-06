/* eslint-disable no-undef */
/* eslint-disable array-callback-return */

'use client'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import Image from 'next/image'
import styled from '@mui/system/styled'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const StyledImage = styled(Image)({
  padding: 1,
})

export default function Footer(props: any) {
  const [footerData, setFooterData] = useState<any>({})

  const getFooterData = async () => {
    try {
      const res = await fetch(`/api/footer`)
      const data = await res?.json()
      if (data?.status === 200) {
        setFooterData(data?.data)
      }
    } catch (err: any) {
      console.log('home data fetching err : ', err)
    }
  }

  useEffect(() => {
    getFooterData()
  }, [])

  const FooterBoxes = footerData?.columns?.map((col: any, inde: number) => {
    return (
      <Box
        key={inde}
        sx={{
          mt: { xs: '30px', md: '0px' },
          borderBottom: { xs: '1px solid white', md: 'none' },
          pb: 5,
        }}
      >
        <Typography sx={{ fontSize: '20px', fontWeight: '600', mb: '28px' }}>
          {col?.title}
        </Typography>
        {col?.menus?.map((menu: any, ind: number) => (
          <Box
            key={ind}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'flex-start' },
              mt: '10px',
            }}
          >
            <Box
              sx={{
                display: { xs: 'none', md: 'block' },
                overflow: 'hidden',
              }}
            >
              {menu?.icon && (
                <Image
                  src={menu?.icon}
                  alt="icon"
                  width={19}
                  height={19}
                  style={{ marginRight: '10px', marginBottom: '-5px' }}
                />
              )}
            </Box>
            {/* {iconMapping[menu?.menu]} */}
            <Box
              component={Link}
              href={menu?.link || '/'}
              sx={{
                color: 'white',
                textDecoration: 'none',
                display: 'block',
                // px: '10px',
                fontSize: '16px',
              }}
            >
              {menu?.menu}
            </Box>
          </Box>
        ))}
      </Box>
    )
  })

  return (
    <Container
      sx={{
        maxWidth: '100% !important',
        px: { xs: '24px', md: '120px' },
        bgcolor: 'var(--brown)',
        color: 'white',
        mt: { xs: '40px', md: '60px' },
      }}
    >
      <Box
        sx={{
          display: { xs: 'block', md: 'flex' },
          justifyContent: 'space-around',
          textAlign: { xs: 'center', md: 'left' },
          pt: '60px',
        }}
      >
        <StyledImage
          src="/Images/lovely-maldives-logo-white.png"
          height={31}
          width={40}
          alt="Logo Footer"
          sx={{
            display: { xs: 'block', md: 'none' },
            mx: 'auto',
          }}
        />
        {FooterBoxes}
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            justifyContent: 'center',
            mt: '60px',
            gap: '20px',
          }}
        >
          <FacebookRoundedIcon />
          <XIcon />
          <InstagramIcon />
          <WhatsAppIcon />
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: 'block', md: 'flex' },
          justifyContent: 'space-around',
          alignItems: 'center',
          mt: { xs: '30px', md: '60px' },
          pb: 2,
        }}
      >
        <Box
          sx={{
            display: { xs: 'block', md: 'flex' },
            alignItems: 'center',
            borderBottom: { xs: '1px solid white', md: 'none' },
            pb: { xs: 2.5, md: 0 },
          }}
        >
          <StyledImage
            src="/Images/lovely-maldives-logo-white.png"
            height={25}
            width={35}
            alt="Logo Footer"
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          />
          <Typography sx={{ px: { md: '50px' }, textAlign: 'center' }}>
            {' '}
            &copy; 2024 Lovely Maldives. All rights reserved.
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            component={Link}
            href="/terms-of-use"
            sx={{
              textAlign: 'center',
              textDecoration: 'none',
              mt: { xs: '16px', md: '0', color: 'white' },
            }}
          >
            Terms of use{' '}
          </Box>
          <Typography sx={{ mt: { xs: '16px', md: '0' }, fontSize: '20px' }}>
            |
          </Typography>
          <Box
            component={Link}
            href="/privacy-policy"
            sx={{
              textAlign: 'center',
              textDecoration: 'none',
              mt: { xs: '16px', md: '0', color: 'white' },
            }}
          >
            {' '}
            Privacy Policy
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
