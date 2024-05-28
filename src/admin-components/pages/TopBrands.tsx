'use client'

import React, { useState } from 'react'
import { Button, Typography, Stack, Box } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import AddBrand from './modals/AddBrand'
import { CustomCard } from '../styled/CustomCard'
import TopBrandsSlider from '../sliders/TopBrandsSlider'

const TopBrands = () => {
  const [showModal, setShowModal] = useState(false)
  const [brands, setBrands] = useState([] as any)

  const handleShowModal = () => setShowModal(!showModal)

  const handleAddBrand = (newService: any) => {
    setBrands([...brands, newService])
    handleShowModal()
  }

  const handleDeleteFile = (index: number) => {
    setBrands(brands.filter((_: any, i: number) => i !== index))
  }

  return (
    <>
      <AddBrand
        open={showModal}
        handleShowModal={handleShowModal}
        handleAddBrand={handleAddBrand}
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
            Top Brands
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
                sx={{
                  textTransform: 'capitalize',
                  fonsSize: '14px',
                }}
              >
                Add Brand
              </Typography>
            </Stack>
          </Button>
        </Stack>

        {brands?.length > 0 ? (
          <TopBrandsSlider brands={brands} />
        ) : (
          <Typography variant="body1" color="var(--black)">
            No Brand Added...
          </Typography>
        )}
      </CustomCard>
    </>
  )
}

export default TopBrands
