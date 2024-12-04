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
import HeadingWraper from '../common/HeadingWraper'
import TextFieldWraper from '../items/TextfieldWraper'
import { CustomLabel } from '../styled/CustomLabels'
import HeaderBgHandler from '../general-settings/HeaderBgHandler'

const TopBrands = () => {
  const [isPending, startTransition] = useTransition()
  const [showModal, setShowModal] = useState(false)
  const [brands, setBrands] = useState([] as any)
  const [alertMsg, setAlertMsg] = React.useState({ type: '', message: '' })
  const [detectChange, setDetectChange] = useState(false)
  const [values, setValues] = useState({ title: '', bgColor: '' })
  const [edit, setEdit] = useState('' as any)
  const homeBgId = useHomeBgId()

  const handleShowModal = () => setShowModal(!showModal)

  const editModelShow = (index: number) => {
    setEdit(brands?.[index])
    handleShowModal()
    setDetectChange(true)
  }

  const addNewBrand = (newBrand: any, type: string) => {
    if (type === 'edit') {
      const newBrands = brands.map((brand: any) =>
        brand.logo === edit.logo ? newBrand : brand
      )
      setBrands(newBrands)
    } else {
      setBrands([...brands, newBrand])
    }
    setDetectChange(true)
  }

  const handleDeleteBrand = (index: number) => {
    const sure = window.confirm('Are you sure you want to delete?')
    if (!sure) return
    setDetectChange(true)
    setBrands(brands.filter((_: any, i: number) => i !== index))
  }

  const getTopBrands = async () => {
    try {
      startTransition(async () => {
        const res = await getTopBrandsRequest()
        const data = res?.data
        if (data?.status === 200) {
          setBrands(data?.data?.brands || [])
          setValues(data?.data)
        }
      })
    } catch (error: any) {
      console.log('error ', error)
    }
  }

  const handleAddBrand = async () => {
    try {
      startTransition(async () => {
        const res = await topBrandsRequest({
          title: values?.title,
          brands,
          bgColor: values?.bgColor,
          homeBgId,
        })
        const data = res?.data
        if (data?.status === 201) {
          getTopBrands()
          setDetectChange(false)
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
        handleAddBrand={addNewBrand}
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
          title="Top Brands"
          handleSave={handleAddBrand}
          detectChange={detectChange}
        />

        <Stack
          direction="column"
          alignItems="center"
          justifyContent="space-between"
          gap="1rem"
        >
          <TextFieldWraper
            label="Title"
            placeholder="Enter title."
            value={values?.title}
            name="title"
            onChange={(e: any) => {
              setDetectChange(true)
              setValues({ ...values, title: e.target.value })
            }}
          />

          <Box sx={{ width: '100%', mb: 3 }}>
            <CustomLabel id="demo-simple-select-label" sx={{ mb: 2 }}>
              Card Background Color
            </CustomLabel>
            <HeaderBgHandler
              handleValuesChange={(e: any) =>
                setValues({ ...values, bgColor: e.target.value })
              }
              value={values?.bgColor}
              name="bgColor"
            />
          </Box>
        </Stack>

        <Button
          sx={{
            bgcolor: 'var(--blue)',
            color: 'white',
            width: '160px',
            mt: 1,
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

        {brands?.length > 0 ? (
          <TopBrandsSlider
            brands={brands}
            editModelShow={editModelShow}
            handleDeleteBrand={handleDeleteBrand}
          />
        ) : (
          <Typography variant="body1" color="var(--black)" sx={{ mt: 3 }}>
            No Brand Added...
          </Typography>
        )}
      </CustomCard>
    </>
  )
}

export default TopBrands
