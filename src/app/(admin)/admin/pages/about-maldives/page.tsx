import React from 'react'
import dynamic from 'next/dynamic'
import { Box } from '@mui/material'
import { CustomCard } from '@/admin-components/styled/CustomCard'
import HeadingWraper from '@/admin-components/common/HeadingWraper'

const ReactQuillEditor = dynamic(
  () => import('@/admin-components/common/ReactQuillEditor'),
  { ssr: false }
)

const AboutMaldives = () => {
  return (
    <CustomCard sx={{ padding: '40px !important', mt: 2 }}>
      <HeadingWraper title="About Maldives" />
      <Box sx={{ mt: 3, pb: 5 }}>
        <ReactQuillEditor height={400} />
      </Box>
    </CustomCard>
  )
}

export default AboutMaldives
