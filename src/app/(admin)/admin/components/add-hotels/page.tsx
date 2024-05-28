/* eslint-disable no-alert */

'use client'

import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import AddIcon from '@mui/icons-material/Add'
import { Box, Button, Stack, Typography } from '@mui/material'
import HeadingWraper from '@/admin-components/common/HeadingWraper'
import { CustomCard } from '@/admin-components/styled/CustomCard'
import AddSectionType from '@/admin-components/pages/modals/AddSectionType'

const ReactQuillEditor = dynamic(
  () => import('@/admin-components/common/ReactQuillEditor'),
  { ssr: false }
)

const typeOptions = [
    {label: "Title", type: "title"},
    {label: "Ratings", type: "rating"},
    {label: "Description", type: "description"},
    {label: "Slider Images", type: "slider_images"},
    {label: "Facts", type: "facts"},
]

const AddHotels = () => {
  const [showModal, setShowModal] = useState(false)
  const [sections, setSections] = useState([] as any)

  const handleShowModal = () => setShowModal(!showModal)

  const handleAddType = (type: string) => {
    setSections([...sections, { type }])
  }

  const handleRemoveSection = (index: number) => {
    const sure = window.confirm('Are you sure you want to remove')
    if (!sure) return
    setSections(sections.filter((_: any, i: number) => i !== index))
  }

  const handleChange = (e: any, index: number) => {
    const { value } = e.target
    console.log('value is ', value)
    const updatedSections = sections.map((sec: any, ind: number) => {
      if (ind === index) {
        return { ...sec, title: value }
      }
      return sec
    })
    setSections(updatedSections)
  }
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
              if (section?.type === 'text') {
                return (
                  <Box
                    key={index}
                    sx={{
                      mt: 3,
                      pb: 8,
                      borderBottom: '1px solid var(--black)',
                    }}
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
                    <ReactQuillEditor height={400} />
                  </Box>
                )
              }
              if (section?.type === 'images_gallery') {
                return (
                  <Box
                    key={index}
                    sx={{
                      mt: 3,
                      pb: 5,
                      borderBottom: '1px solid var(--black)',
                    }}
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
