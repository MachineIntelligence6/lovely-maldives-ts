/* eslint-disable react/self-closing-comp */

'use client'

import React, { useEffect, useState, useTransition } from 'react'
import { Alert, Box, Button, Stack, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import HeadingWraper from '@/admin-components/common/HeadingWraper'
import HeaderBgHandler from '@/admin-components/general-settings/HeaderBgHandler'
import MenuAddItem from '@/admin-components/general-settings/MenuAddItem'
import LogoInputFile from '@/admin-components/items/CustomInputFile'
import { CustomCard } from '@/admin-components/styled/CustomCard'
import { CustomLabel } from '@/admin-components/styled/CustomLabels'
import { uploadImgToCloudinary } from '@/utils/cloudinaryImgUpload'
import CustomLoader from '@/admin-components/common/CustomLoader'
import {
  getHeaderRequest,
  headerRequest,
} from '@/utils/api-requests/header.request'
import useHomeBgId from '@/utils/useHomeBgId'

function HeaderSettings() {
  const [isPending, startTransition] = useTransition()
  const [alertMsg, setAlertMsg] = React.useState({ type: '', message: '' })
  const [detectChange, setDetectChange] = useState(true)
  const [menus, setMenus] = useState([] as any)
  const homeBgId = useHomeBgId()
  const [logos, setLogos] = useState({
    hero: null as any,
    other: null as any,
  })
  const [values, setValues] = useState({
    heroWidth: 95,
    heroHeight: 95,
    otherWidth: 95,
    otherHeight: 95,
    heroBgcolor: '',
    otherBgcolor: '',
    heroUrl: '',
    otherUrl: '',
    menusBgcolor: '',
  })

  const hanldeFileChange = async (e: any, logoOf: string) => {
    const file = e.target.files?.[0]
    if (logoOf === 'hero') {
      setLogos({ ...logos, hero: file })
      setValues({ ...values, heroUrl: URL.createObjectURL(file) })

      const formData = new FormData()
      formData.append('file', file as any)
      formData.append('upload_preset', 'j8epfynh')
      const res = await uploadImgToCloudinary(formData)
      setValues({ ...values, heroUrl: res?.secure_url })
    } else {
      setLogos({ ...logos, other: file })
      setValues({ ...values, otherUrl: URL.createObjectURL(file) })

      const formData = new FormData()
      formData.append('file', file as any)
      formData.append('upload_preset', 'j8epfynh')
      const res = await uploadImgToCloudinary(formData)
      setValues({ ...values, otherUrl: res?.secure_url })
    }
  }

  const handleAddMenu = () => {
    setMenus([
      ...menus,
      {
        menu: 'Menu Name',
        link: 'Menu Link',
      },
    ])
  }

  const handleChange = (
    index: number,
    subIndex: number,
    field: string,
    e: any
  ) => {
    const updatedMenus = [...menus] as any
    updatedMenus[index][field] = e.target.value
    setMenus(updatedMenus)
  }

  const handleDelete = (ind: any) => {
    setMenus(menus.filter((menu: any, index: number) => index !== ind))
  }

  const getHeader = async () => {
    try {
      startTransition(async () => {
        const res = await getHeaderRequest()
        const data = res?.data
        if (data?.status === 200) {
          setValues({
            ...data?.data,
            heroUrl: data?.data?.heroLogo,
            otherUrl: data?.data?.otherLogo,
          })
          setMenus(data?.data?.menus)
        } else {
          setAlertMsg({ type: 'error', message: data?.message })
          setTimeout(() => {
            setAlertMsg({ type: '', message: '' })
          }, 3000)
          console.log('response about maldives', res)
        }
        console.log('response ', res)
      })
    } catch (error: any) {
      console.log('error ', error)
    }
  }
  console.log('values ', values)
  const handleAddHeader = async () => {
    console.log('values ', values)
    try {
      startTransition(async () => {
        const res = await headerRequest({ ...values, homeBgId, menus })
        const data = res?.data
        if (data?.status === 201) {
          getHeader()
          setAlertMsg({ type: 'success', message: 'Data saved successfully.' })
          setTimeout(() => {
            setAlertMsg({ type: '', message: '' })
          }, 3000)
        } else {
          setAlertMsg({ type: 'error', message: data?.message })
          setTimeout(() => {
            setAlertMsg({ type: '', message: '' })
          }, 3000)
        }
      })
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
    getHeader()
  }, [])

  const handleValuesChange = (e: any) => {
    const { name, value } = e.target
    if (
      name === 'heroWidth' ||
      name === 'heroHeight' ||
      name === 'otherWidth' ||
      name === 'otherHeight'
    ) {
      if (value > 1000) return
      setValues({ ...values, [name]: value })
    } else {
      setValues({ ...values, [name]: value })
    }
  }
  console.log('values ', values)
  return (
    <Box sx={{ pb: 4 }}>
      <CustomCard sx={{ padding: '40px !important' }}>
        {isPending && <CustomLoader />}
        {alertMsg.message && (
          <Alert sx={{ mb: 2 }} severity={alertMsg.type as any}>
            {alertMsg.message}
          </Alert>
        )}
        <HeadingWraper
          title="Header Main"
          handleSave={handleAddHeader}
          detectChange={detectChange}
        />
        <Typography
          variant="body1"
          color="var(--black)"
          sx={{ fontWeight: 'bold', fontSize: '18px', my: 2 }}
        >
          Hero Section Header
        </Typography>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems="start"
          gap={{ xs: '1rem', md: '3rem', lg: '4rem' }}
        >
          <LogoInputFile
            handleValuesChange={handleValuesChange}
            value={values?.heroWidth}
            logoFor="hero_"
            nameWidth="heroWidth"
            nameHeight="heroHeight"
            hanldeFileChange={(e: any) => hanldeFileChange(e, 'hero')}
            logoUrl={values?.heroUrl}
            width={values?.heroWidth}
            height={values?.heroHeight}
          />
          <Box>
            <CustomLabel id="demo-simple-select-label" sx={{ mb: 2 }}>
              Header Background Color
            </CustomLabel>
            <HeaderBgHandler
              handleValuesChange={handleValuesChange}
              value={values?.heroBgcolor}
              name="heroBgcolor"
            />
          </Box>
        </Stack>

        <Typography
          variant="body1"
          color="var(--black)"
          sx={{
            fontWeight: 'bold',
            fontSize: '20px',
            my: 2,
            pt: 2,
            borderTop: '1px solid silver',
          }}
        >
          Second Header
        </Typography>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems="start"
          gap={{ xs: '1rem', md: '3rem', lg: '4rem' }}
        >
          <LogoInputFile
            handleValuesChange={handleValuesChange}
            logoFor="other_"
            value={values?.otherHeight}
            nameWidth="otherWidth"
            nameHeight="otherHeight"
            hanldeFileChange={(e: any) => hanldeFileChange(e, 'other')}
            logoUrl={values?.otherUrl}
            width={values?.otherWidth}
            height={values?.otherHeight}
          />
          <Box>
            <CustomLabel id="demo-simple-select-label" sx={{ mb: 2 }}>
              Header Background Color
            </CustomLabel>
            <HeaderBgHandler
              handleValuesChange={handleValuesChange}
              value={values?.otherBgcolor}
              name="otherBgcolor"
            />
          </Box>
        </Stack>
        <Box
          sx={{
            mt: 4,
            mb: 2,
            borderTop: '1px solid silver',
          }}
        ></Box>
        <Typography
          variant="body1"
          color="var(--black)"
          sx={{ fontSize: '18px', fontWeight: 'bold' }}
        >
          Header Menus
        </Typography>

        <Box sx={{ my: 3 }}>
          <CustomLabel id="demo-simple-select-label" sx={{ mb: 2 }}>
            Menus Background Color
          </CustomLabel>
          <HeaderBgHandler
            handleValuesChange={handleValuesChange}
            value={values?.menusBgcolor}
            name="menusBgcolor"
          />
        </Box>

        <Typography
          variant="body1"
          color="var(--black)"
          sx={{ fontSize: '18px', fontWeight: 'bold' }}
        >
          Menus
        </Typography>
        <Box sx={{ border: '1px solid #e1e1e1', borderRadius: '6px', mt: 2 }}>
          {menus?.map((menu: any, index: number) => (
            <MenuAddItem
              key={index}
              index={index}
              menu={menu}
              handleChange={handleChange}
              handleDelete={handleDelete}
            />
          ))}
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            variant="outlined"
            sx={{
              border: '1px solid var(--brown)',
              mt: 3,
              textTransform: 'capitalize',
            }}
            onClick={handleAddMenu}
          >
            <Stack direction="row" alignItems="center" gap="10px">
              <AddIcon sx={{ color: 'var(--brown)', fontSize: '22px' }} />
              <Typography variant="body1" color="var(--brown)">
                Add Menu
              </Typography>
            </Stack>
          </Button>
        </Box>
      </CustomCard>
    </Box>
  )
}

export default HeaderSettings
