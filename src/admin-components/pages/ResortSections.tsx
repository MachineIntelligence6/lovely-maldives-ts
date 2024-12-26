/* eslint-disable no-else-return */
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
  getResortSectionRequest,
} from '@/utils/api-requests/addHotels.request'
import { deleteResortHotelRequest } from '@/utils/api-requests/resorts.request'
import SelectHotel from './modals/SelectHotel'
import AddSectionType from './modals/AddSectionType'
import ResortsGallery from './ResortsGallery'
import CustomLoader from '../common/CustomLoader'
import HeadingWraper from '../common/HeadingWraper'

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
  const [pages, setPages] = useState({
    page: 1,
    limit: 6,
    totalGalleryImages: null as any,
  })
  const [showHotelModal, setShowHotelModal] = useState({
    show: false,
    index: null as any,
  })
  const [isFullyLoaded, setIsFullyLoaded] = useState(false)
  const [sections, setSections] = useState([] as any)
  const [hotelsData, setHotelsData] = useState([] as any)
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

  const loadMore = () => {
    setPages({ ...pages, page: (pages.page + 1) as any })
  }

  const handleShowModal = () => setShowModal(!showModal)
  const handleShowHotelModal = (index: number) =>
    setShowHotelModal({ show: !showHotelModal?.show, index })

  const handleAddType = (type: string) => {
    setSections([...sections, { type }])
  }
  const handleAddHotel = async (index: number, hotel: any) => {
    const updatedSections = sections.map((sec: any, ind: number) => {
      if (ind === index) {
        const hotels = sec.hotels ? [...sec.hotels, hotel] : [hotel]
        return { ...sec, hotels }
      }
      return sec
    })

    if (sections?.[index]?.type === 'images_gallery') {
      setHotelsData([...hotelsData, hotel])
    }
    setSections(updatedSections)
  }

  const handleRemoveSection = (index: number) => {
    const sure = window.confirm('Are you sure you want to remove?')
    if (!sure) return
    setSections(sections.filter((_: any, i: number) => i !== index))
    if (sections?.[index]?.type === 'images_gallery') {
      setHotelsData([])
    }
    setPages({ ...pages, totalGalleryImages: 0 })
  }

  const getResortSection = async () => {
    try {
      const res = await getResortSectionRequest(pages)
      const data = res?.data

      if (data?.status === 200) {
        setPages({
          ...pages,
          totalGalleryImages: data?.totalGalleryImages,
        })

        const allHotels = []

        const updatedSections = data?.data?.map((sec: any) => {
          if (sec?.type === 'text') {
            setEditorText(sec?.description)
          }

          if (sec?.type === 'images_gallery') {
            allHotels.push(...sec.hotels) // Collect all hotels for this section
          }

          return sec
        })

        // Update state with fetched sections and hotels
        setHotelsData([...allHotels]) // Create a new array reference
        setSections([...updatedSections]) // Create a new array reference
      } else {
        setAlertMsg({ type: 'error', message: data?.message })
        setTimeout(() => setAlertMsg({ type: '', message: '' }), 3000)
      }
    } catch (error) {
      console.error('Error fetching resort sections:', error)
    }
  }

  // delete Hotel
  const deleteResortHotel = (hotelId: string) => {
    const sure = window.confirm('Are you sure to delete the hotel?')
    if (!sure) return

    // Optimistic UI update
    setHotelsData((prevHotels) =>
      prevHotels.filter((hotel) => hotel.id !== hotelId)
    )
    setSections((prevSections) =>
      prevSections.map((section) => ({
        ...section,
        hotels: section.hotels.filter((hotel) => hotel.id !== hotelId),
      }))
    )

    startTransition(async () => {
      try {
        const res = await deleteResortHotelRequest(hotelId)
        const data = res?.data

        if (
          data?.status === 200 ||
          data?.message === 'Hotel removed successfully'
        ) {
          await getResortSection() // Sync with backend
          setAlertMsg({
            type: 'success',
            message: 'Hotel deleted successfully.',
          })
        } else {
          throw new Error(data?.message || 'Failed to delete hotel.')
        }
      } catch (err: any) {
        console.error('Error deleting hotel:', err)

        // Rollback optimistic update on error
        await getResortSection()
        setAlertMsg({
          type: 'error',
          message: 'Error occurred while deleting the hotel, please try again.',
        })
      } finally {
        setTimeout(() => {
          setAlertMsg({ type: '', message: '' })
        }, 3000)
      }
    })
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

  const handleAddSections = async () => {
    try {
      startTransition(async () => {
        const res = await AddResortSectionRequest(sections)
        const data = res?.data
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
  }, [pages?.page])

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
        {sections?.map((section: any, index: number) => {
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
                    hotels={hotelsData}
                    handleChange={(e: any) => handleChange(e, index)}
                    title={section?.title}
                    pages={pages}
                    handleShowModal={() => handleShowHotelModal(index)}
                    isFullyLoaded={isFullyLoaded}
                    loadMore={loadMore}
                    sections={sections}
                    deleteResortHotel={deleteResortHotel}
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
