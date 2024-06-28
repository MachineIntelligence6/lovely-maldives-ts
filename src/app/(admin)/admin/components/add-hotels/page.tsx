/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-alert */

'use client'

import React, { useEffect, useState, useTransition } from 'react'
import dynamic from 'next/dynamic'
import AddIcon from '@mui/icons-material/Add'
import styled from '@emotion/styled'
import {
  Alert,
  Box,
  Button,
  InputLabel,
  Rating,
  Stack,
  Typography,
} from '@mui/material'
import HeadingWraper from '@/admin-components/common/HeadingWraper'
import { CustomCard } from '@/admin-components/styled/CustomCard'
import AddSectionType from '@/admin-components/pages/modals/AddSectionType'
import AddBtnsWraper from '@/admin-components/common/AddBtnsWraper'
import TextFieldWraper from '@/admin-components/items/TextfieldWraper'
import ImagesUploader from '@/admin-components/common/ImagesUploader'
import {
  AddHotelsRequest,
  getHotelsRequest,
} from '@/utils/api-requests/addHotels.request'
import AddFacts from '@/admin-components/pages/AddFacts'
import CustomLoader from '@/admin-components/common/CustomLoader'
import { uploadImgToCloudinary } from '@/utils/cloudinaryImgUpload'
import HotelsWraper from './HotelsWraper'

// const ReactQuillEditor = dynamic(
//   () => import('@/admin-components/common/ReactQuillEditor'),
//   { ssr: false }
// )

const JoditTextEditor = dynamic(
  () => import('@/admin-components/common/JoditTextEditor'),
  { ssr: false }
)

const CustomLabel = styled(InputLabel)(({ theme }) => ({
  fontSize: '16px',
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontWeight: 400,
  color: '#4B465C',
}))

const typeOptions = [
  { label: 'Title', value: 'title' },
  { label: 'Ratings', value: 'ratings' },
  { label: 'Description', value: 'description' },
  { label: 'Slider Images', value: 'gallery_slider' },
  { label: 'Facts', value: 'facts' },
]

const AddHotels = () => {
  const [isPending, startTransition] = useTransition()
  const [detectChange, setDetectChange] = useState(true)
  const [alertMsg, setAlertMsg] = React.useState({ type: '', message: '' })
  const [showModal, setShowModal] = useState(false)
  const [title, setTitle] = useState('')
  const [ratings, setRatings] = useState(1)
  const [sections, setSections] = useState([] as any)
  const [value, setValue] = useState('')
  const [hotels, setHotels] = useState([] as any)
  const [page, setPage] = useState(1)
  const [files, setFiles] = useState([] as any)

  const handleEditorValue = (val: any, index: number) => {
    setValue(val)
    const updatedSections = sections.map((sec: any, ind: number) => {
      if (ind === index) {
        return { ...sec, description: val }
      }
      return sec
    })
    setSections(updatedSections)
  }

  const handleShowModal = () => setShowModal(!showModal)

  // ADD SECTION TYPE (e.g. TEXT, TITLE, etc)
  const handleAddType = (type: string) => {
    if (type === 'ratings') {
      setSections([...sections, { type, ratings: '1' }])
    } else {
      setSections([...sections, { type }])
    }
  }

  // REMOVE SECTION
  const handleRemoveSection = (index: number) => {
    const sure = window.confirm('Are you sure you want to remove?')
    if (!sure) return
    setSections(sections.filter((_: any, i: number) => i !== index))
  }

  // ADD RATINGS IN HOTEL
  const handleRatingChange = (e: any, index: number) => {
    const updatedSections = sections.map((sec: any, ind: number) => {
      if (ind === index) {
        return { ...sec, ratings: e.target.value }
      }
      return sec
    })
    setSections(updatedSections)
  }

  // ADD TITLE TO HOTEL
  const handleChangeTitle = (e: any, index: number) => {
    const updatedSections = sections.map((sec: any, ind: number) => {
      if (ind === index) {
        return { ...sec, title: e.target.value }
      }
      return sec
    })
    setSections(updatedSections)
  }

  const handleChangeFiles = async (e: any, label: number) => {
    const file = e.target.files?.[0]
    setDetectChange(true)
    setFiles([...files, file])
    startTransition(async () => {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('upload_preset', 'j8epfynh')
      const res = await uploadImgToCloudinary(formData)
      if (!res?.secure_url) return console.log('Error uploading ', res)
      const updatedSections = sections.map((sec: any, ind: number) => {
        if (ind === label) {
          return {
            ...sec,
            images: sec.images
              ? [...sec.images, res?.secure_url]
              : [res?.secure_url],
          }
        }
        return sec
      })
      setSections(updatedSections)
    })
  }
  // DELETE A FILE
  const handleDeleteFile = (index: number, subIndex: number) => {
    const updatedSections = sections.map((sec: any, ind: number) => {
      if (ind === index) {
        return {
          ...sec,
          images: sec.images.filter((_: any, i: number) => i !== subIndex),
        }
      }
      return sec
    })
    setSections(updatedSections)
  }

  // ADD FACTS IN HOTEL
  const handleAddFacts = (fact: any, index: number) => {
    const updatedSections = sections.map((sec: any, ind: number) => {
      if (ind === index) {
        return {
          ...sec,
          facts: sec.facts ? [...sec.facts, fact] : [fact],
        }
      }
      return sec
    })
    setSections(updatedSections)
  }

  const getHotels = async () => {
    try {
      startTransition(async () => {
        const res = await getHotelsRequest(page, 20, [])
        const data = res?.data
        if (data?.status === 200) {
          setHotels(data?.data)
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
    }
  }

  const submitData = async () => {
    try {
      startTransition(async () => {
        const res = await AddHotelsRequest({
          title,
          ratings,
          sections,
        })
        const data = res?.data
        if (data?.status === 201) {
          getHotels()
          setSections([])
          setTitle('')
          setRatings(1)
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
    }
  }

  useEffect(() => {
    getHotels()
  }, [])
  return (
    <>
      <CustomCard sx={{ padding: '40px !important', mt: 2 }}>
        {isPending && <CustomLoader />}
        {alertMsg.message && (
          <Alert sx={{ mb: 2 }} severity={alertMsg.type as any}>
            {alertMsg.message}
          </Alert>
        )}
        <HeadingWraper
          title="Add Hotels"
          detectChange={detectChange}
          handleSave={submitData}
        />
        <Box>
          <AddSectionType
            open={showModal}
            handleShowModal={handleShowModal}
            handleAddType={handleAddType}
            options={typeOptions}
          />

          <Box sx={{ pt: 2 }}>
            <TextFieldWraper
              label="Hotel Title"
              placeholder="Enter hotel title."
              value={title}
              name="title"
              onChange={(e: any) => setTitle(e.target.value)}
            />
            <CustomLabel
              id="demo-simple-select-label"
              sx={{ mt: '20px', fontFamily: 'Public Sans' }}
            >
              Overall Hotel Rating
            </CustomLabel>
            <Rating
              name="size-medium"
              defaultValue={1}
              precision={1}
              value={ratings}
              sx={{ display: 'flex', m: 0, mb: 2, mt: 1 }}
              onChange={(e: any) => setRatings(e.target.value)}
            />
            <Box sx={{ my: 2 }}>
              {sections.map((section: any, index: number) => {
                if (section?.type === 'title') {
                  return (
                    <Box
                      key={`title_${index}`}
                      sx={{
                        mt: 3,
                        pb: 8,
                        borderBottom: '1px solid var(--black)',
                      }}
                    >
                      <AddBtnsWraper
                        handleRemoveSection={handleRemoveSection}
                        index={index}
                        title="Add Title"
                      />
                      <TextFieldWraper
                        label="Title"
                        placeholder="Enter title."
                        value={section?.title}
                        name="title"
                        onChange={(e: any) => handleChangeTitle(e, index)}
                      />
                    </Box>
                  )
                }
                if (section?.type === 'ratings') {
                  return (
                    <Box
                      key={`ratings_${index}`}
                      sx={{
                        mt: 3,
                        pb: 8,
                        borderBottom: '1px solid var(--black)',
                      }}
                    >
                      <AddBtnsWraper
                        handleRemoveSection={handleRemoveSection}
                        index={index}
                        title="Add Ratings"
                      />
                      <Rating
                        name="size-medium"
                        defaultValue={1}
                        precision={0.5}
                        value={section?.rating}
                        sx={{ display: 'flex', m: 0, mb: 2, mt: 2 }}
                        onChange={(e: any) => handleRatingChange(e, index)}
                      />
                    </Box>
                  )
                }
                if (section?.type === 'gallery_slider') {
                  return (
                    <Box
                      key={`gallery_slider_${index}`}
                      sx={{
                        mt: 3,
                        pb: 5,
                        borderBottom: '1px solid var(--black)',
                      }}
                    >
                      <AddBtnsWraper
                        handleRemoveSection={handleRemoveSection}
                        index={index}
                        title="Images Gallery"
                      />

                      <ImagesUploader
                        files={section?.images}
                        label={index}
                        handleChange={handleChangeFiles}
                        handleDeleteFile={handleDeleteFile}
                      />
                    </Box>
                  )
                }
                if (section?.type === 'facts') {
                  return (
                    <Box
                      key={`facts_${index}`}
                      sx={{
                        mt: 3,
                        pb: 5,
                        borderBottom: '1px solid var(--black)',
                      }}
                    >
                      <AddBtnsWraper
                        handleRemoveSection={handleRemoveSection}
                        index={index}
                        title="Add Facts"
                      />
                      <AddFacts
                        handleAddFacts={(facts: any) =>
                          handleAddFacts(facts, index)
                        }
                        facts={section?.facts}
                      />
                    </Box>
                  )
                }
                return (
                  <Box
                    key={`description_${index}`}
                    sx={{
                      mt: 3,
                      pb: 8,
                      borderBottom: '1px solid var(--black)',
                    }}
                  >
                    <AddBtnsWraper
                      handleRemoveSection={handleRemoveSection}
                      index={index}
                      title="Add Description"
                    />
                    {/* <ReactQuillEditor
                      height="400px"
                      handleEditorValue={(val: any) =>
                        handleEditorValue(val, index)
                      }
                      value={value}
                    /> */}
                    <JoditTextEditor
                      handleEditorValue={(val: any) =>
                        handleEditorValue(val, index)
                      }
                      value={value}
                    />
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
        </Box>
      </CustomCard>
      <CustomCard sx={{ padding: '40px !important', mt: 2 }}>
        <HotelsWraper hotels={hotels} />
      </CustomCard>
    </>
  )
}

export default AddHotels
