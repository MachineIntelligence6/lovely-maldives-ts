/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-alert */

'use client'

import { Alert, Box, Button, Stack, Typography } from '@mui/material'
import dynamic from 'next/dynamic'
import AddIcon from '@mui/icons-material/Add'
import React, { useEffect, useState, useTransition } from 'react'
import TopFiveLuxuryResorts from '@/components/TopFiveLuxuryResorts'
import {
  AddResortSectionRequest,
  getHotelsRequest,
  getResortSectionRequest,
} from '@/utils/api-requests/addHotels.request'
import SelectHotel from './modals/SelectHotel'
import AddSectionType from './modals/AddSectionType'
import ResortsGallery from './ResortsGallery'
import CustomLoader from '../common/CustomLoader'
import HeadingWraper from '../common/HeadingWraper'
// import JoditTextEditor from '../common/JoditTextEditor'

const ReactQuillEditor = dynamic(
  () => import('@/admin-components/common/ReactQuillEditor'),
  { ssr: false }
)

const JoditTextEditor = dynamic(() => import('../common/JoditTextEditor'), {
  ssr: false,
})

const typeOptions = [
  { label: 'Text Editor', value: 'text' },
  { label: 'Images Gallery', value: 'images_gallery' },
  { label: 'Images Slider', value: 'images_slider' },
]

const ResortSections = () => {
  const [showModal, setShowModal] = useState(false)
  const [pages, setPages] = useState({ page: 1, limit: 6 })
  const [showHotelModal, setShowHotelModal] = useState({
    show: false,
    index: null as any,
  })
  const [sections, setSections] = useState([] as any)
  const [options, setOptions] = useState([])
  const [editorText, setEditorText] = useState('')
  const [isPending, startTransition] = useTransition()
  const [alertMsg, setAlertMsg] = React.useState({ type: '', message: '' })
  const [detectChange, setDetectChange] = useState(true)

  const handleEditorValue = (val: any, index: number) => {
    setEditorText(val)
    const updatedSections = sections.map((sec: any, ind: number) => {
      if (ind === index) {
        return { ...sec, description: val }
      }
      return sec
    })
    setSections(updatedSections)
  }

  const handleShowModal = () => setShowModal(!showModal)
  const handleShowHotelModal = (index: number) =>
    setShowHotelModal({ show: !showHotelModal?.show, index })

  console.log('Sections ', sections)
  const handleAddType = (type: string) => {
    setSections([...sections, { type }])
  }

  const handleAddHotel = async (index: number, hotel: any) => {
    console.log('index: ', index)
    const updatedSections = sections.map((sec: any, ind: number) => {
      if (ind === index) {
        const hotels = sec.hotels ? [...sec.hotels, hotel] : [hotel]
        console.log('ids ', hotels)
        return { ...sec, hotels }
      }
      return sec
    })
    setSections(updatedSections)
  }

  const handleRemoveSection = (index: number) => {
    const sure = window.confirm('Are you sure you want to remove?')
    if (!sure) return
    setSections(sections.filter((_: any, i: number) => i !== index))
  }

  const handleChange = (e: any, index: number) => {
    const { value } = e.target
    const updatedSections = sections.map((sec: any, ind: number) => {
      if (ind === index) {
        return { ...sec, title: value }
      }
      return sec
    })
    setSections(updatedSections)
  }

  const getResortSection = () => {
    try {
      startTransition(async () => {
        const res = await getResortSectionRequest(pages)
        const data = res?.data
        console.log('get resort section data is =>>> ', data)
        if (data?.status === 200) {
          setSections(data?.data?.resortSections)
          data?.data?.resortSections?.map((sec: any) => {
            if (sec?.type === 'text') {
              setEditorText(sec?.description)
            }
          })
        } else {
          setAlertMsg({ type: 'error', message: data?.message })
          setTimeout(() => {
            setAlertMsg({ type: '', message: '' })
          }, 3000)
        }
      })
    } catch (error: any) {
      console.log('error ', error)
    }
  }

  const handleAddSections = async () => {
    try {
      startTransition(async () => {
        const res = await AddResortSectionRequest(sections)
        const data = res?.data
        console.log('data ===>>> ', data)
        if (data?.status === 201) {
          getResortSection()
          setAlertMsg({ type: 'success', message: 'Data saved successfully.' })
          setTimeout(() => {
            setAlertMsg({ type: '', message: '' })
          }, 3000)
        } else {
          setAlertMsg({ type: 'error', message: data?.message })
          setTimeout(() => {
            setAlertMsg({ type: '', message: '' })
          }, 3000)
          console.log('response about maldives', res)
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
      throw new Error(error)
    }
  }

  useEffect(() => {
    getResortSection()
  }, [])

  return (
    <Box>
      <AddSectionType
        open={showModal}
        handleShowModal={handleShowModal}
        handleAddType={handleAddType}
        options={typeOptions}
      />

      <SelectHotel
        open={showHotelModal.show}
        handleShowModal={handleShowHotelModal}
        handleAddHotel={(hotel: any, ind: number) => handleAddHotel(ind, hotel)}
        options={options}
        index={showHotelModal.index}
      />
      <Box sx={{ my: 2 }}>
        {isPending && <CustomLoader />}
        {alertMsg.message && (
          <Alert sx={{ mb: 2 }} severity={alertMsg.type as any}>
            {alertMsg.message}
          </Alert>
        )}

        <HeadingWraper
          title="Our Services"
          handleSave={handleAddSections}
          detectChange={detectChange}
        />
        {sections.map((section: any, index: number) => {
          if (section?.type === 'text') {
            return (
              <Box
                key={index}
                sx={{ mt: 3, pb: 8, borderBottom: '1px solid var(--black)' }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ mb: 1 }}
                >
                  <Typography
                    variant="h3"
                    color="var(--black)"
                    sx={{ fontSize: '22px', mb: 2, fontWeight: 'bold' }}
                  >
                    Add Text
                  </Typography>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleRemoveSection(index)}
                  >
                    Remove
                  </Button>
                </Stack>
                {/* <ReactQuillEditor
                  height={400}
                  handleEditorValue={(val: any) =>
                    handleEditorValue(val, index)
                  }
                  value={editorText}
                /> */}
                <JoditTextEditor
                  handleEditorValue={(val: any) =>
                    handleEditorValue(val, index)
                  }
                  value={editorText}
                />
              </Box>
            )
          }
          if (section?.type === 'images_gallery') {
            return (
              <Box
                key={index}
                sx={{ mt: 3, pb: 5, borderBottom: '1px solid var(--black)' }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ mb: 1 }}
                >
                  <Typography
                    variant="h3"
                    color="var(--black)"
                    sx={{ fontSize: '22px', mb: 2, fontWeight: 'bold' }}
                  >
                    Images Gallery
                  </Typography>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleRemoveSection(index)}
                  >
                    Remove
                  </Button>
                </Stack>
                <Box>
                  <ResortsGallery
                    hotels={section?.hotels}
                    handleChange={(e: any) => handleChange(e, index)}
                    title={section?.title}
                    handleShowModal={() => handleShowHotelModal(index)}
                  />
                </Box>
              </Box>
            )
          }
          return (
            <Box
              key={index}
              sx={{ mt: 3, pb: 5, borderBottom: '1px solid var(--black)' }}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ mb: 1 }}
              >
                <Typography
                  variant="h3"
                  color="var(--black)"
                  sx={{ fontSize: '22px', mb: 2, fontWeight: 'bold' }}
                >
                  Images Slider
                </Typography>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleRemoveSection(index)}
                >
                  Remove
                </Button>
              </Stack>
              <Box>
                <TopFiveLuxuryResorts
                  heading={section?.title}
                  button="none"
                  iconShow="flex"
                  radius="20px"
                  bottomradius="0 0 20px  20px"
                  resorts={section?.hotels}
                  isAdminSide={true}
                  handleChange={(e: any) => handleChange(e, index)}
                  title={section?.title}
                  handleShowModal={() => handleShowHotelModal(index)}
                />
              </Box>
            </Box>
          )
        })}
      </Box>
      <Button
        variant="outlined"
        sx={{
          border: '1px solid var(--brown)',
          mt: 1,
          textTransform: 'capitalize',
        }}
        onClick={handleShowModal}
      >
        <Stack direction="row" alignItems="center" gap="10px">
          <AddIcon sx={{ color: 'var(--brown)', fontSize: '22px' }} />
          <Typography variant="body1" color="var(--brown)">
            Add Section
          </Typography>
        </Stack>
      </Button>
    </Box>
  )
}

export default ResortSections
