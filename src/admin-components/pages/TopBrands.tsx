/* eslint-disable no-alert */

'use client'

import React, { useEffect, useState, useTransition } from 'react'
import { Button, Typography, Stack, Box, Alert } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import {
  getTopBrandsRequest,
  topBrandsRequest,
} from '@/utils/api-requests/brands.request'
import useHomeBgId from '@/utils/useHomeBgId'
import AddBrand from './modals/AddBrand'
import { CustomCard } from '../styled/CustomCard'
import TopBrandsSlider from '../sliders/TopBrandsSlider'
import CustomLoader from '../common/CustomLoader'

const TopBrands = () => {
  const [isPending, startTransition] = useTransition()
  const [showModal, setShowModal] = useState(false)
  const [brands, setBrands] = useState([] as any)
  const [alertMsg, setAlertMsg] = React.useState({ type: '', message: '' })
  const [detectChange, setDetectChange] = useState(false)
  const homeBgId = useHomeBgId()

  const handleShowModal = () => setShowModal(!showModal)

  // const handleAddBrand = (newService: any) => {
  //   setBrands([...brands, newService])
  //   handleShowModal()
  // }

  const handleDeleteFile = (index: number) => {
    setBrands(brands.filter((_: any, i: number) => i !== index))
  }

  const getTopBrands = async () => {
    try {
      startTransition(async () => {
        const res = await getTopBrandsRequest()
        const data = res?.data
        console.log('response data  ', data)
        if (data?.status === 200) {
          setBrands(data?.data)
        } else {
          // alert('Error occured while fetching about maldives data.')
          console.log('response top brands', res)
        }
      })
    } catch (error: any) {
      console.log('error ', error)
    }
  }

  const handleAddBrand = async (newBrand: any) => {
    // const homeBgId = JSON.parse(localStorage.getItem('homeBgId') as any)
    console.log('newBrand', newBrand)
    try {
      startTransition(async () => {
        const res = await topBrandsRequest({
          title: newBrand?.title,
          ratings: newBrand?.stars,
          description: newBrand?.description,
          bgColor: '#5d7496',
          homeBgId,
        })
        console.log('data =>>> ', res?.data)
        const data = res?.data
        if (data?.status === 201) {
          getTopBrands()
          setDetectChange(false)
          handleShowModal()
          setAlertMsg({ type: 'success', message: 'Data saved successfully.' })
          setTimeout(() => {
            setAlertMsg({ type: '', message: '' })
          }, 3000)
        } else {
          alert(data?.message)
        }
      })
      setDetectChange(false)
    } catch (error: any) {
      setAlertMsg({
        type: 'error',
        message: 'Error occured while saving data, please try again.',
      })
      setTimeout(() => {
        setAlertMsg({ type: '', message: '' })
      }, 3000)
      console.log('error ', error)
    }
  }

  useEffect(() => {
    getTopBrands()
  }, [])

  return (
    <>
      <AddBrand
        open={showModal}
        handleShowModal={handleShowModal}
        handleAddBrand={handleAddBrand}
      />
      <CustomCard sx={{ padding: '40px !important', mt: 2 }}>
        {isPending && <CustomLoader />}
        {alertMsg.message && (
          <Alert sx={{ mb: 2 }} severity={alertMsg.type as any}>
            {alertMsg.message}
          </Alert>
        )}
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
