import React from 'react'
import { Box, Typography } from '@mui/material'
import BackupIcon from '@mui/icons-material/Backup'
import Image from 'next/image'
import CloseIcon from '@mui/icons-material/Close'
import ImagesUploader from '../common/ImagesUploader'

const DesktopBgImages = (props: any) => {
  const {
    files,
    urls,
    handleChange,
    label,
    handleDeleteFile,
    name = 'Background Images',
  } = props
  return (
    <>
      <Typography
        variant="body1"
        color="var(--black)"
        sx={{ mt: 2, fontWeight: 'bold', mb: 1 }}
      >
        {name}
      </Typography>

      <ImagesUploader
        files={files}
        urls={urls}
        label={label}
        handleChange={handleChange}
        handleDeleteFile={handleDeleteFile}
      />
    </>
  )
}

export default DesktopBgImages
