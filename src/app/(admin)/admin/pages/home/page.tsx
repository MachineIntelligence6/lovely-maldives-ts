import React from 'react'
import { Box } from '@mui/material'
import HomeBgUploader from '@/admin-components/pages/HomeBgUploader'
import HomeAboutMaldives from '@/admin-components/pages/HomeAboutMaldives'
import OurServices from '@/admin-components/pages/OurServices'
import HomeAboutus from '@/admin-components/pages/HomeAboutus'

const HomePage = () => {
  return (
    <Box sx={{pb:3}}>
      <HomeBgUploader />
      <HomeAboutMaldives />
      <OurServices />
      <HomeAboutus />
    </Box>
  )
}

export default HomePage
