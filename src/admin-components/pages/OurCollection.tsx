'use client'

import React, { useState } from 'react'
import { Button, Typography, Stack, Box } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import AddCollection from './modals/AddCollection'
import { CustomCard } from '../styled/CustomCard'
import CollectionSlider from '../sliders/CollectionSlider'

const OurCollection = () => {
  const [showModal, setShowModal] = useState(false)
  const [collections, setCollections] = useState([] as any)

  const handleShowModal = () => setShowModal(!showModal)

  const handleAddCollection = (newCollection: any) => {
    setCollections([...collections, newCollection])
    handleShowModal()
  }

  const handleDeleteCard = (index: number) => {
    setCollections(collections.filter((_: any, i: number) => i !== index))
  }

  return (
    <>
      <AddCollection
        open={showModal}
        handleShowModal={handleShowModal}
        handleAddCollection={handleAddCollection}
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
            Our Collection
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
              <AddIcon sx={{ color: 'white', fontSize: '18px' }} />
              <Typography
                variant="body1"
                color="white"
                sx={{ fontSize: '14px', textTransform: 'capitalize' }}
              >
                Add Collection
              </Typography>
            </Stack>
          </Button>
        </Stack>

        {collections?.length > 0 ? (
          <CollectionSlider
            collections={collections}
            handleDeleteCard={handleDeleteCard}
          />
        ) : (
          <Typography variant="body1" color="var(--black)">
            No Collection Added...
          </Typography>
        )}
      </CustomCard>
    </>
  )
}

export default OurCollection
