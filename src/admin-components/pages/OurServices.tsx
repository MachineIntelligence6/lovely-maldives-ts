'use client'

import React, { useState } from 'react'
import { Button, Typography, Stack, Box } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import AddServiceModal from './modals/AddServiceModal'
import { CustomCard } from '../styled/CustomCard'
import CardsSlider from '../sliders/CardsSlider'

const OurServices = () => {
  const [showModal, setShowModal] = useState(false)
  const [services, setServices] = useState([] as any)

  const handleShowModal = () => setShowModal(!showModal)

  const handleAddService = (newService: any) => {
    setServices([...services, newService])
    handleShowModal()
  }

  const handleDeleteFile = (index: number) => {
    setServices(services.filter((_: any, i: number) => i !== index))
  }

  return (
    <>
      <AddServiceModal
        open={showModal}
        handleShowModal={handleShowModal}
        handleAddService={handleAddService}
      />
      <CustomCard sx={{ padding: '40px !important', mt: 2 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap="1rem"
        >
          <Typography
            variant="body1"
            color="var(--black)"
            sx={{ fontSize: '18px', fontWeight: 'bold', mb: 3 }}
          >
            Our Services
          </Typography>
          <Button
            sx={{
              bgcolor: 'var(--blue)',
              color: 'white',
              width: '160px',
              height: '36px',
              '&:hover': {
                bgcolor: 'var(--blue)',
              },
            }}
            onClick={handleShowModal}
          >
            <Stack direction="row" alignItems="center" gap="10px">
              <AddIcon sx={{ color: 'white', fontSize: '20px' }} />
              <Typography variant="body1" color="white">
                Add Service
              </Typography>
            </Stack>
          </Button>
        </Stack>

        {/* <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
            justifyContent: 'space-between',
            mt: 2,
          }}
        >
          {services?.map((service: any, index: number) => (
            <Box
              key={index}
              sx={{
                width: '150px',
                height: '180px',
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                position: 'relative',
                backgroundColor: 'var(--blue)',
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
              <Typography variant="body1" color="white">
                {service?.title}
              </Typography>
            </Box>
          ))}
        </Box> */}

        {services?.length > 0 ? (
          <CardsSlider services={services} />
        ) : (
          <Typography variant="body1" color="var(--black)">
            No Services Added...
          </Typography>
        )}
      </CustomCard>
    </>
  )
}

export default OurServices
