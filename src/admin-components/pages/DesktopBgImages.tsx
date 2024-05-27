import React from 'react'
import { Box, Typography } from '@mui/material'
import BackupIcon from '@mui/icons-material/Backup'
import Image from 'next/image'
import CloseIcon from '@mui/icons-material/Close'

const DesktopBgImages = (props: any) => {
  const { files, handleChange, label, handleDeleteFile } = props
  return (
    <>
      <Typography
        variant="body1"
        color="var(--black)"
        sx={{ mt: 2, fontWeight: 'bold', mb: 1 }}
      >
        Background Images
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
          mt: 2,
        }}
      >
        {files?.map((file: any, index: number) => (
          <Box
            key={index}
            sx={{
              width: '100%',
              minWidth: '180px',
              aspectRatio: '1.3',
              minHeight: '150px',
              borderRadius: '6px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              position: 'relative',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                width: '25px',
                height: '25px',
                borderRadius: '50%',
                border: '1px solid var(--red)',
                background: 'rgba(0,0,0,0.7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CloseIcon
                sx={{
                  fontSize: '20px',
                  color: 'var(--red)',
                  cursor: 'pointer',
                }}
                onClick={() => handleDeleteFile(index)}
              />
            </Box>
            <Image
              width={180}
              height={150}
              alt="bg-image"
              src={URL.createObjectURL(file)}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
        ))}

        <label htmlFor="fileInput">
          <input
            type="file"
            id="fileInput"
            hidden
            onChange={(e) => handleChange(e, label)}
          />
          <Box
            sx={{
              width: '100%',
              minWidth: '180px',
              aspectRatio: '1.3',
              minHeight: '150px',
              border: '1px dashed gray',
              borderRadius: '6px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <BackupIcon
              sx={{
                fontSize: '55px',
                color: 'var(--brown)',
              }}
            />
            {/* <Typography
            variant="body1"
            color="var(--brown)"
            sx={{ mt: 2, fontSize: '18px' }}
          >
            Upload Background Image
          </Typography> */}
          </Box>
        </label>
      </Box>
    </>
  )
}

export default DesktopBgImages
