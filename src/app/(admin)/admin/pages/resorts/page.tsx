import React, { startTransition } from 'react'
import { CustomCard } from '@/admin-components/styled/CustomCard'
import ResortSections from '@/admin-components/pages/ResortSections'
import { deleteResortHotelRequest } from '@/utils/api-requests/resorts.request'

const Resorts = () => {
  return (
    <CustomCard sx={{ padding: '40px !important', mt: 2 }}>
      <ResortSections />
    </CustomCard>
  )
}

export default Resorts
