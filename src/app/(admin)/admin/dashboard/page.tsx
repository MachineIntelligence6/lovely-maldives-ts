'use client'

import { Box, Grid } from '@mui/material'
import { useEffect } from 'react'

import LocalHotelIcon from '@mui/icons-material/LocalHotel'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import MovingIcon from '@mui/icons-material/Moving'
import LocalAirportIcon from '@mui/icons-material/LocalAirport'
import { getServerSession } from 'next-auth'

import TotalCardItem from '@/admin-components/dashboard/TotalCardItem'
import EarningReportCard from '@/admin-components/dashboard/EarningReportCard'
import LatestHotlBooking from '@/admin-components/dashboard/LatestHotlBooking'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getHomeBgRequest } from '@/utils/api-requests/home.request'

export const getHomeBgData = async () => {
  let bgId
  try {
    const res = await getHomeBgRequest()
    const data = res?.data?.data
    if (res?.status === 200) {
      localStorage.setItem('homeBgId', JSON.stringify(data?.id))
      bgId = data?.id
    }
  } catch (error: any) {
    console.log('error ', error)
  }
  return bgId
}

export default async function Dashboard() {
  useEffect(() => {
    getHomeBgData()
  }, [])
  return (
    <Box sx={{ pb: 4 }}>
      <Grid
        container
        columnSpacing={{ xs: 2, sm: 3 }}
        rowSpacing={{ xs: 2, sm: 3 }}
      >
        <Grid item xs={12} sm={6} lg={3}>
          <TotalCardItem
            title="Hotel Bookings"
            total="4.5K"
            icon={
              <LocalHotelIcon sx={{ color: '#00CFE8', fontSize: '25px' }} />
            }
            bgcolor="rgba(0, 207, 232, 0.08)"
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <TotalCardItem
            title="VIP Cities"
            total="125"
            icon={
              <LocationCityIcon sx={{ color: '#EA5455', fontSize: '25px' }} />
            }
            bgcolor="rgba(234, 84, 85, 0.08)"
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <TotalCardItem
            title="Travel Counsellings"
            total="4.5K"
            icon={<MovingIcon sx={{ color: '#7367F0', fontSize: '25px' }} />}
            bgcolor="rgba(115, 103, 240, 0.08)"
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <TotalCardItem
            title="Aitport Concierge"
            total="401"
            icon={
              <LocalAirportIcon sx={{ color: '#00CFE8', fontSize: '25px' }} />
            }
            bgcolor="rgba(0, 207, 232, 0.08)"
          />
        </Grid>
        <Grid item xs={12}>
          <EarningReportCard />
        </Grid>

        <Grid item xs={12} lg={4}>
          <LatestHotlBooking title="Latest Hotel Bookings" />
        </Grid>
        <Grid item xs={12} lg={4}>
          <LatestHotlBooking title="Latest Travel Cousellings" />
        </Grid>
        <Grid item xs={12} lg={4}>
          <LatestHotlBooking title="Latest Airport Concierges" />
        </Grid>
      </Grid>
    </Box>
  )
}
