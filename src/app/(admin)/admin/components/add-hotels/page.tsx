/* eslint-disable no-alert */

'use client'

import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import AddIcon from '@mui/icons-material/Add'
import { Box, Button, Rating, Stack, Typography } from '@mui/material'
import HeadingWraper from '@/admin-components/common/HeadingWraper'
import { CustomCard } from '@/admin-components/styled/CustomCard'
import AddSectionType from '@/admin-components/pages/modals/AddSectionType'
import AddBtnsWraper from '@/admin-components/common/AddBtnsWraper'
import TextFieldWraper from '@/admin-components/items/TextfieldWraper'
import ImagesUploader from '@/admin-components/common/ImagesUploader'
import AddFacts from '@/admin-components/pages/AddFacts'

const ReactQuillEditor = dynamic(
  () => import('@/admin-components/common/ReactQuillEditor'),
  { ssr: false }
)

const typeOptions = [
  { label: 'Title', value: 'title' },
  { label: 'Ratings', value: 'ratings' },
  { label: 'Description', value: 'description' },
  { label: 'Slider Images', value: 'gallery_slider' },
  { label: 'Facts', value: 'facts' },
]

const AddHotels = () => {
  const [showModal, setShowModal] = useState(false)
  const [sections, setSections] = useState([] as any)

  const handleShowModal = () => setShowModal(!showModal)

  // ADD SECTION TYPE (e.g. TEXT, TITLE, etc)
  const handleAddType = (type: string) => {
    console.log('type is ', type)
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

  // const handleChange = (e: any, index: number) => {
  //   const { value } = e.target
  //   console.log('value is ', value)
  //   const updatedSections = sections.map((sec: any, ind: number) => {
  //     if (ind === index) {
  //       return { ...sec, title: value }
  //     }
  //     return sec
  //   })
  //   setSections(updatedSections)
  // }

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

  // ADD GALLERY SLIDER IMAGES IN HOTEL
  const handleChangeFiles = (e: any, label: number) => {
    const file = e.target.files[0]
    const updatedSections = sections.map((sec: any, ind: number) => {
      if (ind === label) {
        return {
          ...sec,
          images: sec.images ? [...sec.images, file] : [file],
        }
      }
      return sec
    })
    setSections(updatedSections)
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
    console.log('fact ', fact)
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

  console.log('sections ', sections)

  return (
    <CustomCard sx={{ padding: '40px !important', mt: 2 }}>
      <HeadingWraper title="Add Hotels" />
      <Box>
        <AddSectionType
          open={showModal}
          handleShowModal={handleShowModal}
          handleAddType={handleAddType}
          options={typeOptions}
        />
        <Box>
          <Box sx={{ my: 2 }}>
            {sections.map((section: any, index: number) => {
              if (section?.type === 'title') {
                return (
                  <Box
                    key={index}
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
                    key={index}
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
                    key={index}
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
                    key={index}
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
                  key={index}
                  sx={{ mt: 3, pb: 8, borderBottom: '1px solid var(--black)' }}
                >
                  <AddBtnsWraper
                    handleRemoveSection={handleRemoveSection}
                    index={index}
                    title="Add Description"
                  />
                  <ReactQuillEditor height="400px" />
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
  )
}

export default AddHotels
