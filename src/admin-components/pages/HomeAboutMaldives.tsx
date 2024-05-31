import React from 'react'
import dynamic from 'next/dynamic';
import { Box } from '@mui/material'
import { CustomCard } from '../styled/CustomCard'
import HeadingWraper from '../common/HeadingWraper'

const ReactQuillEditor = dynamic(
    () => import('../common/ReactQuillEditor'),
    { ssr: false }
  );

const HomeAboutMaldives = () => {
  return (
    <CustomCard sx={{ padding: '40px !important', mt: 2 }}>
      <HeadingWraper title="About Maldives" />
      <Box sx={{ mt: 3, pb:5 }}>
        <ReactQuillEditor />
      </Box>
    </CustomCard>
  )
}

export default HomeAboutMaldives
