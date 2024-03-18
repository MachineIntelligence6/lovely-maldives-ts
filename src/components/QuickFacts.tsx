/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */

'use client'

import { Typography } from '@mui/material'
import { Box } from '@mui/system'

import DirectionsSubwayFilledOutlinedIcon from '@mui/icons-material/DirectionsSubwayFilledOutlined'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EventNoteIcon from '@mui/icons-material/EventNote'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import TranslateIcon from '@mui/icons-material/Translate'

export const data = [
  {
    title: '30km from airport (20 minutes to reach the hotel)',
    icon: <DirectionsSubwayFilledOutlinedIcon />,
  },
  {
    title: 'Seaplane transfer and Speedboat transfer available',
    icon: <LocationOnIcon />,
  },
  {
    title:
      'Check-in time is 12:00pm and Check-out time is 14:00hours. (Early check-in Available)',
    icon: <EventNoteIcon />,
  },
  {
    title: 'Resort has English speaking and French Speaking staff.',
    icon: <TranslateIcon />,
  },
  {
    title:
      'Won best resort awards in South-East Asia 6 times, best Customer Care awards 3 times.',
    icon: <WorkspacePremiumIcon />,
  },
]

export default function QuickFacts() {
  return (
    <Box sx={{ width: { xs: '100%', md: '500px' }, mx: 'auto' }}>
      <Typography
        sx={{ fontSize: '20px', fontWeight: 600, my: '40px', mx: '40px' }}
      >
        QUICK FACTS:
      </Typography>

      {data.map((iconDetail: any, index: number) => (
        <Box
          key={index}
          sx={{ display: 'flex', alignItems: 'center', mt: '15px' }}
        >
          {iconDetail.icon}
          <Typography sx={{ width: '200px', mx: 2 }}>
            {iconDetail.title}
          </Typography>
        </Box>
      ))}
      <hr style={{ marginTop: '20px' }} />
    </Box>
  )
}
