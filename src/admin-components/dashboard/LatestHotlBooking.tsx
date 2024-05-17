import { Box, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import { CustomCard } from '../styled/CustomCard'

const rows = [
  {
    title: 'Ansar Saeed',
    subtitle: '25 Jan 2024, 12:00 PM',
    price: '999.29',
    img: '/admin-images/avatar1.png',
  },
  {
    title: 'Ansar Saeed',
    subtitle: '25 Jan 2024, 12:00 PM',
    price: '999.29',
    img: '/admin-images/avatar1.png',
  },
  {
    title: 'Ansar Saeed',
    subtitle: '25 Jan 2024, 12:00 PM',
    price: '999.29',
    img: '/admin-images/avatar1.png',
  },
  {
    title: 'Ansar Saeed',
    subtitle: '25 Jan 2024, 12:00 PM',
    price: '999.29',
    img: '/admin-images/avatar1.png',
  },
  {
    title: 'Ansar Saeed',
    subtitle: '25 Jan 2024, 12:00 PM',
    price: '999.29',
    img: '/admin-images/avatar1.png',
  },
]

function LatestHotlBooking(props: any) {
  return (
    <CustomCard sx={{ p: '24px' }}>
      <CardContent sx={{ pb: 0, mb: '24px' }}>
        <Typography
          component="div"
          variant="h5"
          sx={{
            fontSize: '18px',
            fontWeight: '600',
            lineHeight: '24px',
            color: '#4B465C',
          }}
        >
          {props?.title}
        </Typography>
      </CardContent>
      {rows?.map((row, index) => (
        <Stack
          key={index}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: '18px' }}
        >
          <Stack direction="row" alignItems="center" gap="16px">
            <Image
              priority
              src={row.img}
              alt="image"
              width={46}
              height={46}
              style={{
                width: '46px',
                height: '46px',
                objectFit: 'cover',
                borderRadius: '50%',
              }}
            />
            <Box>
              <Typography
                component="div"
                variant="h6"
                sx={{
                  fontSize: '15px',
                  fontWeight: '600',
                  lineHeight: '21px',
                  color: '#4B465C',
                }}
              >
                {row.title}
              </Typography>
              <Typography
                component="div"
                variant="body2"
                sx={{
                  fontSize: '13px',
                  fontWeight: '400',
                  lineHeight: '20px',
                  color: '#4B465C',
                  opacity: '.7',
                }}
              >
                {row.subtitle}
              </Typography>
            </Box>
          </Stack>
          <Typography
            component="div"
            variant="h6"
            sx={{
              fontSize: '15px',
              fontWeight: '500',
              lineHeight: '22px',
              color: '#4B465C',
            }}
          >
            ${row.price}
          </Typography>
        </Stack>
      ))}
    </CustomCard>
  )
}

export default LatestHotlBooking
