/* eslint-disable no-nested-ternary */
/* eslint-disable no-alert */

'use client'

import React, { useEffect, useState, useTransition } from 'react'
import dynamic from 'next/dynamic'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { Alert, Box, Button, Stack, Typography } from '@mui/material'
import { CustomCard } from '@/admin-components/styled/CustomCard'
import HeadingWraper from '@/admin-components/common/HeadingWraper'
import {
  aboutusShortRequest,
  getaboutusShortRequest,
} from '@/utils/api-requests/aboutus-short.request'
import { uploadImgToCloudinary } from '@/utils/cloudinaryImgUpload'
import useHomeBgId from '@/utils/useHomeBgId'
import AddOptionModal from './modals/AddOptionModal'
import CustomLoader from '../common/CustomLoader'
import TextFieldWraper from '../items/TextfieldWraper'
import { CustomLabel } from '../styled/CustomLabels'
import HeaderBgHandler from '../general-settings/HeaderBgHandler'

const ReactQuillEditor = dynamic(
  () => import('@/admin-components/common/ReactQuillEditor'),
  { ssr: false }
)

const HomeAboutus = () => {
  const [showModal, setShowModal] = useState(false)
  const [options, setOptions] = useState([] as any)
  const [edit, setEdit] = useState(null)
  const [isPending, startTransition] = useTransition()
  const [editorText, setEditorText] = useState('')
  const [alertMsg, setAlertMsg] = React.useState({ type: '', message: '' })
  const [detectChange, setDetectChange] = useState(false)
  const [values, setValues] = useState({
    title: '',
    logo: '',
    promisTitle: '',
    promiseColor: '',
    cardBgcolor: '',
  })
  const [image, setImage] = useState('' as any)
  const homeBgId = useHomeBgId()

  const handleEditorValue = (value: any) => {
    setEditorText(value)
    setDetectChange(true)
  }

  const handleShowModal = () => setShowModal(!showModal)

  const handleAddOption = (newOption: any, status: string) => {
    console.log('newoption ', newOption, status)
    if (status === 'add') {
      setOptions(options?.length > 0 ? [...options, newOption] : [newOption])
      handleShowModal()
    } else {
      const vals = [...options]
      const index = vals.indexOf(edit)
      vals[index] = newOption
      setOptions(vals)
    }
    handleShowModal()
    setDetectChange(true)
  }

  const handleImageChange = async (e: any) => {
    setDetectChange(true)
    const file = e.target.files?.[0]
    setImage(file)

    const formData = new FormData()
    formData.append('file', file as any)
    formData.append('upload_preset', 'j8epfynh')
    const res = await uploadImgToCloudinary(formData)
    setValues({ ...values, logo: res?.secure_url })
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleEdit = (value: any) => setEdit(value as any)

  const getAboutusShort = async () => {
    try {
      startTransition(async () => {
        const res = await getaboutusShortRequest()
        const data = res?.data
        if (data?.status === 200) {
          setEditorText(data?.data?.description)
          setValues(data?.data)
          setOptions(data?.data?.promises || [])
        } else {
          alert('Error occured while fetching about maldives data.')
          console.log('response about maldives', res)
        }
      })
    } catch (error: any) {
      console.log('error ', error)
    }
  }

  console.log('values ', values)

  const handleSave = async () => {
    if (!values.title) {
      setAlertMsg({
        type: 'error',
        message: 'Please enter title.',
      })
      setTimeout(() => {
        setAlertMsg({ type: '', message: '' })
      }, 3000)
      return
    }
    try {
      startTransition(async () => {
        const res = await aboutusShortRequest({
          ...values,
          description: editorText,
          promises: options,
          homeBgId,
        })
        if (res?.status === 201) {
          getAboutusShort()
          setDetectChange(false)
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
    getAboutusShort()
  }, [])

  return (
    <>
      <AddOptionModal
        handleAddOption={handleAddOption}
        open={showModal}
        handleShowModal={handleShowModal}
        edit={edit}
        handleEdit={handleEdit}
      />
      <CustomCard sx={{ padding: '40px !important', mt: 2 }}>
        {isPending && <CustomLoader />}
        {alertMsg.message && (
          <Alert sx={{ mb: 2 }} severity={alertMsg.type as any}>
            {alertMsg.message}
          </Alert>
        )}
        <HeadingWraper
          title="About Us"
          handleSave={handleSave}
          isPending={isPending}
          detectChange={detectChange}
        />
        <Box sx={{ mt: 3, pb: 5 }}>
          <Stack direction="row" alignItems="center" gap="20px" sx={{ mb: 2 }}>
            <TextFieldWraper
              label="Title"
              placeholder="Enter about us title."
              value={values?.title}
              name="title"
              onChange={(e: any) => {
                setDetectChange(true)
                setValues({ ...values, title: e.target.value })
              }}
            />
            <label htmlFor="image_" style={{ width: '100%', marginTop: '7px' }}>
              About Us Logo
              <input
                type="file"
                id="image_"
                name="image"
                hidden
                onChange={handleImageChange}
              />
              <Box
                sx={{
                  width: '100%',
                  height: '38px',
                  border: '1px solid darkgray',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  pl: '10px',
                  color: 'var(--black)',
                  fontSize: '14px',
                  fontWeight: 300,
                  mb: 3,
                  mt: 1,
                  overflow: 'hidden',
                }}
              >
                {image?.name
                  ? image?.name
                  : values?.logo
                    ? 'aboutus-logo.jpg'
                    : 'Upload about us logo.'}
              </Box>
            </label>
          </Stack>
          <ReactQuillEditor
            handleEditorValue={handleEditorValue}
            value={editorText}
            height={200}
          />
        </Box>

        <Typography
          variant="body1"
          color="var(--black)"
          sx={{ fontSize: '18px', fontWeight: 'bold', mt: 3, mb: 1 }}
        >
          Our Promises
        </Typography>

        <TextFieldWraper
          label="Promise Title"
          placeholder="Enter Promies title."
          value={values?.promisTitle}
          name="promisTitle"
          onChange={(e: any) => {
            setDetectChange(true)
            setValues({ ...values, promisTitle: e.target.value })
          }}
        />
        <Stack direction="row" alignItems="center" gap="20px" sx={{ mb: 4 }}>
          <Box sx={{ width: '100%' }}>
            <CustomLabel id="demo-simple-select-label" sx={{ mb: 2 }}>
              Promise Title Color
            </CustomLabel>
            <HeaderBgHandler
              handleValuesChange={handleChange}
              value={values?.promiseColor}
              name="promiseColor"
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

        <Button
          sx={{
            bgcolor: 'var(--blue)',
            color: 'white',
            width: '160px',
            height: '36px',
            mb: 3,
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
                fontSize: '14px',
              }}
            >
              Add Option
            </Typography>
          </Stack>
        </Button>

        <Box
          sx={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem',
          }}
        >
          {options?.map((option: any, index: number) => (
            <Box
              key={index}
              sx={{
                width: '100%',
                px: 2,
                py: 1,
                border: '1px solid var(--brown)',
                display: 'flex',
                borderRadius: '4px',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="body1" color="var(--black)">
                {option}
              </Typography>
              <Stack direction="row" alignItems="center" gap="8px">
                <EditIcon
                  sx={{ color: 'var(--blue)', cursor: 'pointer' }}
                  onClick={() => {
                    handleShowModal()
                    handleEdit(option)
                  }}
                />
                <DeleteIcon
                  sx={{ color: 'var(--red)', cursor: 'pointer' }}
                  onClick={() => {
                    // eslint-disable-next-line no-alert
                    const confirm = window.confirm('Are you sure ?')
                    if (!confirm) return
                    setOptions(options.filter((title: any) => title !== option))
                  }}
                />
              </Stack>
            </Box>
          ))}
        </Box>
      </CustomCard>
    </>
  )
}

export default HomeAboutus
