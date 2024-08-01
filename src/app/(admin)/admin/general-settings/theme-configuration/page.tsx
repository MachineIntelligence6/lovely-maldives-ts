'use client'

import { Alert, Box, Typography } from '@mui/material'
import React, { useEffect, useState, useTransition } from 'react'
import ColorPicker from 'react-best-gradient-color-picker'
import { CustomCard } from '@/admin-components/styled/CustomCard'
import CustomLoader from '@/admin-components/common/CustomLoader'
import HeadingWraper from '@/admin-components/common/HeadingWraper'
import {
  createThemeConfigRequest,
  getThemeConfigRequest,
} from '@/utils/api-requests/theme.request'
import { CustomLabel } from '@/admin-components/styled/CustomLabels'
import HeaderBgHandler from '@/admin-components/general-settings/HeaderBgHandler'
import CustomSelect from '@/admin-components/items/CustomSelect'

const options = [
  { label: 'Century Gothic', value: 'Century Gothic' },
  { label: 'Public Sans', value: 'Public Sans' },
]

const ThemeConfiguration = () => {
  const [isPending, startTransition] = useTransition()
  const [detectChange, setDetectChange] = useState(true)
  const [alertMsg, setAlertMsg] = React.useState({ type: '', message: '' })

  const [values, setValues] = useState({
    fontFamily: '',
    gradient:
      'linear-gradient(180deg, rgba(131, 117, 96, 0.1) 0%, rgba(150, 127, 93, 0.2) 100%)',
    bgColor: '',
  })

  const handleSave = () => {
    try {
      startTransition(async () => {
        const res = await createThemeConfigRequest(values)
        const data = res?.data
        if (data?.status === 201) {
          getThemeData()
          setAlertMsg({
            type: 'success',
            message: 'Theme data saved successfully.',
          })
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
    } catch (error) {
      console.log('error ', error)
    }
  }

  const getThemeData = () => {
    try {
      startTransition(async () => {
        const res = await getThemeConfigRequest()
        const data = res?.data
        if (data?.status === 200) {
          setValues(data?.data)
        } else {
          setAlertMsg({ type: 'error', message: data?.message })
          setTimeout(() => {
            setAlertMsg({ type: '', message: '' })
          }, 3000)
        }
      })
    } catch (error) {
      console.log('error ', error)
    }
  }

  useEffect(() => {
    getThemeData()
  }, [])

  const handleGradientChange = (gradient: any) => {
    if (gradient.includes('NaN%')) {
      // Replace NaN% with a default value, e.g., 100%
      const result = gradient.replace('NaN%', '100%')
      setValues({ ...values, gradient: result })
    } else {
      setValues({ ...values, gradient })
    }
    console.log('gradient ', gradient)
  }

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
          title="Global Settings"
          handleSave={handleSave}
          isPending={isPending}
          detectChange={detectChange}
        />
        <Box sx={{ mt: 3 }}>
          <CustomSelect
            placeholder="Select font family."
            value={values.fontFamily}
            options={options}
            name="fontFamily"
            onChange={(e: any) =>
              setValues({ ...values, fontFamily: e.target.value })
            }
          />
        </Box>

        <Box
          sx={{
            mt: 4,
            pt: 4,
            borderTop: '1px solid var(--black)',
          }}
        >
          <Typography
            variant="body1"
            color="var(--black)"
            sx={{ fontSize: '18px', fontWeight: 'bold' }}
          >
            Background Color Theme
          </Typography>
          <Box sx={{ width: '100%' }}>
            <CustomLabel id="demo-simple-select-label" sx={{ mb: 2 }}>
              Background Color
            </CustomLabel>
            <HeaderBgHandler
              handleValuesChange={(e: any) =>
                setValues({ ...values, bgColor: e.target.value })
              }
              value={values?.bgColor}
              name="bgColor"
            />
          </Box>
        </Box>

        <Box
          sx={{
            mt: 4,
            pt: 4,
            borderTop: '1px solid var(--black)',
          }}
        >
          <Typography
            variant="body1"
            color="var(--black)"
            sx={{ fontSize: '18px', fontWeight: 'bold' }}
          >
            Gradient Layer
          </Typography>
          <Box sx={{ mt: 3 }}>
            <ColorPicker
              value={values.gradient}
              onChange={handleGradientChange}
            />

            <Typography
              variant="body1"
              color="var(--black)"
              sx={{ fontSize: '18px', fontWeight: 'bold', mt: 3, mb: 2 }}
            >
              Gradient Preview
            </Typography>
            <Box
              sx={{
                width: '100%',
                height: '300px',
                overflow: 'hidden',
                borderRadius: '6px',
                position: 'relative',
                backgroundImage: `${values?.gradient},url('/Images/banner.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: '100%',
              }}
            />
          </Box>
        </Box>
      </CustomCard>
    </Box>
  )
}

export default ThemeConfiguration
