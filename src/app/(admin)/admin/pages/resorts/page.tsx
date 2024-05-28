import React from 'react'
import dynamic from 'next/dynamic'
import { Box } from '@mui/material'
import { CustomCard } from '@/admin-components/styled/CustomCard'
import HeadingWraper from '@/admin-components/common/HeadingWraper'
import ResortSections from '@/admin-components/pages/ResortSections'

const Resorts = () => {
  return (
    <CustomCard sx={{ padding: '40px !important', mt: 2 }}>
      <HeadingWraper title="Resorts" />
      {/* <Box sx={{ mt: 3, pb: 5 }}>
        <ReactQuillEditor height={400} />
      </Box> */}
      <ResortSections />
    </CustomCard>
  )
}

export default Resorts
