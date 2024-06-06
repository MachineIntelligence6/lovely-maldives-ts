/* eslint-disable no-alert */

'use client'

import React, { useEffect, useState, useTransition } from 'react'
import { Button, Typography, Stack, Box, Alert } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import {
  getOurServicesRequest,
  ourServicesRequest,
} from '@/utils/api-requests/services.request'
import AddServiceModal from './modals/AddServiceModal'
import { CustomCard } from '../styled/CustomCard'
import CardsSlider from '../sliders/CardsSlider'
import CustomLoader from '../common/CustomLoader'

const OurServices = () => {
  const [isPending, startTransition] = useTransition()
  const [showModal, setShowModal] = useState(false)
  const [services, setServices] = useState([] as any)
  const [alertMsg, setAlertMsg] = React.useState({ type: '', message: '' })
  const [detectChange, setDetectChange] = useState(false)

  const handleShowModal = () => setShowModal(!showModal)

  const handleDeleteFile = (index: number) => {
    setServices(services.filter((_: any, i: number) => i !== index))
  }

  const getOurServices = async () => {
    try {
      startTransition(async () => {
        const res = await getOurServicesRequest()
        const data = res?.data?.data
        if (res?.status === 200) {
          setServices(data)
        } else {
          alert('Error occured while fetching about maldives data.')
          console.log('response about maldives', res)
        }
        console.log('response ', res)
      })
    } catch (error: any) {
      console.log('error ', error)
    }
  }

  const handleAddService = async (newService: any) => {
    const homeBgId = JSON.parse(localStorage.getItem('homeBgId') as any)
    try {
      startTransition(async () => {
        const res = await ourServicesRequest({
          title: newService?.title,
          icon: newService?.icon,
          bgColor: '#5d7496',
          homeBgId,
        })
        if (res?.status === 201) {
          getOurServices()
          setDetectChange(false)
          handleShowModal()
          setAlertMsg({ type: 'success', message: 'Data saved successfully.' })
          setTimeout(() => {
            setAlertMsg({ type: '', message: '' })
          }, 3000)
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
    getOurServices()
  }, [])

  return (
    <>
      <AddServiceModal
        open={showModal}
        handleShowModal={handleShowModal}
        handleAddService={handleAddService}
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
              <AddIcon sx={{ color: 'white', fontSize: '18px' }} />
              <Typography
                variant="body1"
                color="white"
                sx={{
                  textTransform: 'capitalize',
                  fonsSize: '14px',
                }}
              >
                Add Service
              </Typography>
            </Stack>
          </Button>
        </Stack>

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
