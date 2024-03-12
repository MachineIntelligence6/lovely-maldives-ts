'use client'

import WifiIcon from '@mui/icons-material/Wifi'
import BedOutlinedIcon from '@mui/icons-material/BedOutlined'
import LightOutlinedIcon from '@mui/icons-material/LightOutlined'
import LightIcon from '@mui/icons-material/Light'
import NoteAltIcon from '@mui/icons-material/NoteAlt'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

export const services = [
  {
    title: 'Internet Access:',
    detail: 'Complementary Wifi ',
    icon: <WifiIcon />,
  },
  {
    title: 'Activities Available:',
    detail: 'Billiards room, TT hall, candle light dinner, shing trip',
    icon: <NoteAltIcon />,
  },
  {
    title: 'Services at Room:',
    detail: 'Room Service, Hair Dryer, Iron, Steamer, Hot water, Bathtub',
    icon: <BedOutlinedIcon />,
  },
  {
    title: 'Dining Options',
    detail: 'Room Service, Hair Dryer, Iron, Steamer, Hot water, Bathtub',
    icon: <LightOutlinedIcon />,
  },
  {
    title: 'Other Services',
    detail: 'Spa, Souvenir Shop, Honeymoon Celebration',
    icon: <LightIcon />,
  },
]

export default function ResortServices() {
  return (
    <Box sx={{ width: { xs: '100%', md: '500px' }, mx: 'auto' }}>
      <Typography
        sx={{ fontSize: '20px', fontWeight: 600, my: '40px', mx: '40px' }}
      >
        HOTEL AMINETIES:{' '}
      </Typography>

      {services.map((iconDetail, index) => (
        <Box
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          sx={{ display: 'flex', alignItems: 'center', mt: '15px' }}
        >
          {iconDetail.icon}
          <Box>
            <Typography
              sx={{
                width: '200px',
                mx: 2,
                fontSize: '18px',
                fontWeight: 600,
              }}
            >
              {iconDetail.title}
            </Typography>
            <Typography sx={{ width: '200px', mx: 2, mt: 1 }}>
              {iconDetail.detail}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  )
}
