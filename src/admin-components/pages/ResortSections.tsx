/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-alert */

'use client'

import { Box, Button, Stack, Typography } from '@mui/material'
import dynamic from 'next/dynamic'
import AddIcon from '@mui/icons-material/Add'
import React, { useEffect, useState, useTransition } from 'react'
import TopFiveLuxuryResorts from '@/components/TopFiveLuxuryResorts'
import { getHotelsRequest } from '@/utils/api-requests/addHotels.request'
import AddSectionType from './modals/AddSectionType'
import SelectHotel from './modals/SelectHotel'
import ResortsGallery from './ResortsGallery'

const ReactQuillEditor = dynamic(
  () => import('@/admin-components/common/ReactQuillEditor'),
  { ssr: false }
)

const typeOptions = [
  { label: 'Text Editor', value: 'text' },
  { label: 'Images Gallery', value: 'images_gallery' },
  { label: 'Images Slider', value: 'slider' },
]

const ResortSections = () => {
  const [showModal, setShowModal] = useState(false)
  const [showHotelModal, setShowHotelModal] = useState(false)
  const [sections, setSections] = useState([] as any)
  const [options, setOptions] = useState([])
  const [editorText, setEditorText] = useState('')
  const [isPending, startTransition] = useTransition()
  const [galleryHotels, setGalleryHotels] = useState([] as any)
  const [sliderHotels, setSliderHotels] = useState([] as any)

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
  const handleShowHotelModal = () => setShowHotelModal(!showHotelModal)

  console.log('Sections ', sections)
  const handleAddType = (type: string) => {
    setSections([...sections, { type }])
  }

  const handleAddHotel = (index: number, id: string, type: string) => {
    if (type === 'images_gallery') {
      const updatedSections = sections.map((sec: any, ind: number) => {
        if (ind === index) {
          const ids = sec.ids ? [...sec.ids, id] : [id]
          const filteredData = galleryHotels.filter((item: any) =>
            ids.includes(item.id)
          )
          getHotels(ids, 'images_gallery')
          return { ...sec, hotels: filteredData, ids }
        }
        return sec
      })
      setSections(updatedSections)
    } else {
      const updatedSections = sections.map((sec: any, ind: number) => {
        if (ind === index) {
          const ids = sec.ids ? [...sec.ids, id] : [id]
          const filteredData = sliderHotels.filter((item: any) =>
            ids.includes(item.id)
          )
          getHotels(ids, 'images_slider')
          return { ...sec, hotels: filteredData, ids }
        }
        return sec
      })
      setSections(updatedSections)
    }
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

  const getHotels = async (ids: any, type: string) => {
    if (ids?.length === 0) return
    try {
      if (ids?.[0].length > 0) {
        startTransition(async () => {
          const res = await getHotelsRequest(1, 500, ids)
          const data = res?.data
          const hotelsData = [] as any
          if (data?.status === 200) {
            if (type === 'images_gallery') {
              setGalleryHotels(data?.data)
            } else {
              setSliderHotels(data?.data)
            }
          } else {
            console.log('response about maldives', res)
          }
        })
      }
    } catch (error: any) {
      console.log('error ', error)
    }
  }

  console.log('sliderHotels are =>>> ', sliderHotels)
  console.log('galleryHotels are =>>> ', galleryHotels)

  // useEffect(() => {
  //   getHotels()
  // }, [showHotelModal])

  // useEffect(() => {
  //   const ops = [] as any
  //   hotels?.map((hotel: any) =>
  //     ops.push({ label: hotel.title, value: hotel.id })
  //   )
  //   setOptions(ops)
  // }, [])

  return (
    <Box>
      <AddSectionType
        open={showModal}
        handleShowModal={handleShowModal}
        handleAddType={handleAddType}
        options={typeOptions}
      />
      <Box sx={{ my: 2 }}>
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
                <ReactQuillEditor
                  height={400}
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
                <SelectHotel
                  open={showHotelModal}
                  handleShowModal={handleShowHotelModal}
                  handleAddHotel={(id: any) =>
                    handleAddHotel(index, id, 'images_gallery')
                  }
                  options={options}
                  type="images_gallery"
                />
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
                    hotels={galleryHotels}
                    handleChange={(e: any) => handleChange(e, index)}
                    title={section?.title}
                    handleShowModal={handleShowHotelModal}
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
              <SelectHotel
                open={showHotelModal}
                handleShowModal={handleShowHotelModal}
                handleAddHotel={(id: any) =>
                  handleAddHotel(index, id, 'slider_images')
                }
                options={options}
              />
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
                  resorts={sliderHotels}
                  isAdminSide={true}
                  handleChange={(e: any) => handleChange(e, index)}
                  title={section?.title}
                  handleShowModal={handleShowHotelModal}
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
