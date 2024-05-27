'use client'

import React, { useState } from 'react'
import { Stack } from '@mui/material'

import TextFieldWraper from '@/admin-components/items/TextfieldWraper'
import DesktopBgImages from './DesktopBgImages'
import { CustomCard } from '../styled/CustomCard'
import HeadingWraper from '../common/HeadingWraper'

const HomeBgUploader = () => {
  const [files, setFiles] = useState([] as any)
  const [mobileFiles, setMobileFiles] = useState([] as any)

  const handleChange = (e: any, label: string) => {
    const file = e.target.files[0]
    if (label === 'Desktop') {
      console.log('Desktpops')
      setFiles([...files, file])
    } else {
      console.log('mobile ')
      setMobileFiles([...mobileFiles, file])
    }
  }

  const handleDeleteFile = (index: number) => {
    setFiles(files.filter((_: any, i: number) => i !== index))
  }

  return (
    <CustomCard sx={{ padding: '40px !important' }}>
      <HeadingWraper title="Home Background" />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap="1rem"
      >
        <TextFieldWraper
          label="Title"
          placeholder="Enter Title."
          name="title"
        />
        <TextFieldWraper
          label="Subtitle"
          placeholder="Enter subtitle."
          name="link"
        />
      </Stack>

      <DesktopBgImages
        label="Desktop"
        handleDeleteFile={handleDeleteFile}
        handleChange={handleChange}
        files={files}
      />
      {/* 
      <DesktopBgImages
        label="Mobile"
        handleDeleteFile={handleDeleteFile}
        handleChange={handleChange}
        files={mobileFiles}
      /> */}
    </CustomCard>
  )
}

export default HomeBgUploader
