'use client'

import React, { useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import BackupIcon from '@mui/icons-material/Backup'
import Image from 'next/image'
import { CustomCard } from '../styled/CustomCard'
import HeadingWraper from '../common/HeadingWraper'
import TextFieldWraper from '../items/TextfieldWraper'

const SocialLinkSection = () => {
  const [file, setFile] = useState(null as any)

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0])
  }
  console.log('file ', file)
  return (
    <CustomCard sx={{ padding: '40px !important', mt: 2 }}>
      <HeadingWraper title="Social Link Section" />
      <TextFieldWraper label="Title" placeholder="Enter Title." name="title" />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap="1rem"
      >
        <TextFieldWraper
          label="Social Media"
          placeholder="e.g. Whatsapp."
          name="social_media"
        />
        <TextFieldWraper
          label="Social Media Link"
          placeholder="Enter social media link."
          name="social_link"
        />
      </Stack>

      <Box>
        <label htmlFor="bgFileInput">
          <input
            type="file"
            id="bgFileInput"
            hidden
            onChange={handleFileChange}
          />
          <Box
            sx={{
              width: '100%',
              minHeight: '250px',
              maxHeight: '450px',
              border: '1px dashed gray',
              borderRadius: '6px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              overflow: 'hidden',
            }}
          >
            {file ? (
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    right: '1rem',
                    top: '1rem',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '1px solid white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 999,
                    bgcolor: 'rgba(0,0,0,0.6)'
                  }}
                >
                  <EditIcon
                    sx={{
                      fontSize: '25px',
                      color: 'white',
                      cursor: 'pointer',
                    }}
                  />
                </Box>
                <Image
                  width={1000}
                  height={350}
                  src={URL.createObjectURL(file)}
                  style={{ objectFit: 'cover' }}
                  alt="bg-img"
                />
              </Box>
            ) : (
              <>
                <BackupIcon
                  sx={{
                    fontSize: '55px',
                    color: 'var(--brown)',
                  }}
                />
                <Typography
                  variant="body1"
                  color="var(--brown)"
                  sx={{ mt: 2, fontSize: '18px' }}
                >
                  Upload Background Image
                </Typography>
              </>
            )}
          </Box>
        </label>
      </Box>
    </CustomCard>
  )
}

export default SocialLinkSection
