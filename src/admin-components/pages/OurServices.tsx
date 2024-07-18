/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable no-alert */

'use client'

import React, { useEffect, useState, useTransition } from 'react'
import { Button, Typography, Stack, Box, Alert } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import {
  getOurServicesRequest,
  ourServicesRequest,
} from '@/utils/api-requests/services.request'
import useHomeBgId from '@/utils/useHomeBgId'
import AddServiceModal from './modals/AddServiceModal'
import { CustomCard } from '../styled/CustomCard'
import CardsSlider from '../sliders/CardsSlider'
import CustomLoader from '../common/CustomLoader'
import TextFieldWraper from '../items/TextfieldWraper'
import { CustomLabel } from '../styled/CustomLabels'
import HeaderBgHandler from '../general-settings/HeaderBgHandler'
import HeadingWraper from '../common/HeadingWraper'

const OurServices = () => {
  const [isPending, startTransition] = useTransition()
  const [showModal, setShowModal] = useState(false)
  const [services, setServices] = useState([] as any)
  const [alertMsg, setAlertMsg] = React.useState({ type: '', message: '' })
  const [detectChange, setDetectChange] = useState(true)
  const [edit, setEdit] = useState('' as any)
  const [values, setValues] = useState({
    title: '',
    subTitle: '',
    subTitleColor: '',
    cardBgcolor: '',
  })
  const homeBgId = useHomeBgId()

  const handleShowModal = () => setShowModal(!showModal)

  const handleDeleteService = (index: number) => {
    const sure = window.confirm('Are you sure you want to delete this service?')
    if (!sure) return
    setServices(services.filter((_: any, i: number) => i !== index))
  }

  const editModelShow = (index: number) => {
    setEdit(services?.[index])
    handleShowModal()
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const addNewService = (newService: any, type: string) => {
    if (type === 'edit') {
      const newServices = services.map((service: any) =>
        service.title === edit.title ? newService : service
      )
      setServices(newServices)
    } else {
      setServices([...services, newService])
    }
    setDetectChange(true)
  }

  const getOurServices = async () => {
    try {
      startTransition(async () => {
        const res = await getOurServicesRequest()
        const data = res?.data
        if (data?.status === 200) {
          setServices(data?.data?.services)
          setValues(data?.data)
        } else {
          setAlertMsg({ type: 'error', message: data?.message })
          setTimeout(() => {
            setAlertMsg({ type: '', message: '' })
          }, 3000)
          console.log('response about maldives', res)
        }
      })
    } catch (error: any) {
      console.log('error ', error)
      throw new Error(error)
    }
  }

  const handleAddServices = async () => {
    try {
      startTransition(async () => {
        const res = await ourServicesRequest({
          ...values,
          services,
          homeBgId,
        })
        if (res?.status === 201) {
          getOurServices()
          // setDetectChange(false)
          setAlertMsg({ type: 'success', message: 'Data saved successfully.' })
          setTimeout(() => {
            setAlertMsg({ type: '', message: '' })
          }, 3000)
        }
      })
      // setDetectChange(false)
    } catch (error: any) {
      setAlertMsg({
        type: 'error',
        message: 'Error occured while saving data, please try again.',
      })
      setTimeout(() => {
        setAlertMsg({ type: '', message: '' })
      }, 3000)
      console.log('error ', error)
      throw new Error(error)
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
        handleAddService={addNewService}
        edit={edit}
      />
      <CustomCard sx={{ padding: '40px !important', mt: 2 }}>
        {isPending && <CustomLoader />}
        {alertMsg.message && (
          <Alert sx={{ mb: 2 }} severity={alertMsg.type as any}>
            {alertMsg.message}
          </Alert>
        )}
        <HeadingWraper
          title="Our Services"
          handleSave={handleAddServices}
          detectChange={detectChange}
        />

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems="center"
          gap="20px"
          sx={{ mb: 2 }}
        >
          <TextFieldWraper
            label="Title"
            placeholder="Enter our services title."
            value={values?.title}
            name="title"
            onChange={handleChange}
          />
          <TextFieldWraper
            label="Sub-Title"
            placeholder="Enter our services sub-title."
            value={values?.subTitle}
            name="subTitle"
            onChange={handleChange}
          />
        </Stack>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems="center"
          gap="20px"
          sx={{ mb: 4 }}
        >
          <Box sx={{ width: '100%' }}>
            <CustomLabel id="demo-simple-select-label" sx={{ mb: 2 }}>
              Sub-Title Color
            </CustomLabel>
            <HeaderBgHandler
              handleValuesChange={handleChange}
              value={values?.subTitleColor}
              name="subTitleColor"
            />
          </Box>
          <Box sx={{ width: '100%' }}>
            <CustomLabel id="demo-simple-select-label" sx={{ mb: 2 }}>
              Card Background Color
            </CustomLabel>
            <HeaderBgHandler
              handleValuesChange={handleChange}
              value={values?.cardBgcolor}
              name="cardBgcolor"
            />
          </Box>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap="1rem"
        >
          <Button
            sx={{
              bgcolor: 'var(--blue)',
              my: 3,
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
          <CardsSlider
            services={services}
            handleDeleteService={handleDeleteService}
            editModelShow={editModelShow}
          />
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
