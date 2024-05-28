import React from 'react'
import { Box } from '@mui/material'
import HomeBgUploader from '@/admin-components/pages/HomeBgUploader'
import HomeAboutMaldives from '@/admin-components/pages/HomeAboutMaldives'
import OurServices from '@/admin-components/pages/OurServices'
import HomeAboutus from '@/admin-components/pages/HomeAboutus'
import ExploreWorldCards from '@/admin-components/pages/ExploreWorldCards'
import OurCollection from '@/admin-components/pages/OurCollection'
import TopBrands from '@/admin-components/pages/TopBrands'
import SocialLinkSection from '@/admin-components/pages/SocialLinkSection'

const HomePage = () => {
  return (
    <Box sx={{ pb: 3 }}>
      <HomeBgUploader />
      <HomeAboutMaldives />
      <OurServices />
      <HomeAboutus />
      <ExploreWorldCards />
      <OurCollection />
      <TopBrands />
      <SocialLinkSection />
    </Box>
  )
}

export default HomePage
