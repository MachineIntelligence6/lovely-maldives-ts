'use client'

import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { Box, Button, Stack, Typography } from '@mui/material'
import { CustomCard } from '@/admin-components/styled/CustomCard'
import HeadingWraper from '@/admin-components/common/HeadingWraper'
import AddOptionModal from './modals/AddOptionModal'

const ReactQuillEditor = dynamic(
  () => import('@/admin-components/common/ReactQuillEditor'),
  { ssr: false }
)

const HomeAboutus = () => {
  const [showModal, setShowModal] = useState(false)
  const [options, setOptions] = useState([] as any)
  const [edit, setEdit] = useState(null)

  const handleShowModal = () => setShowModal(!showModal)

  const handleAddOption = (newOption: any, status: string) => {
    if (status === 'add') {
      setOptions([...options, newOption])
      handleShowModal()
    } else {
      const values = [...options]
      const index = values.indexOf(edit)
      values[index] = newOption
      setOptions(values)
    }
    handleShowModal()
  }

  const handleEdit = (value: any) => setEdit(value as any)

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
        <HeadingWraper title="About Us" />
        <Box sx={{ mt: 3, pb: 5 }}>
          <ReactQuillEditor />
        </Box>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap="1rem"
          sx={{ mt: 5 }}
        >
          <Typography
            variant="body1"
            color="var(--black)"
            sx={{ fontSize: '18px', fontWeight: 'bold', mb: 3 }}
          >
            Our Promises
          </Typography>
          <Button
            sx={{
              bgcolor: 'var(--blue)',
              color: 'white',
              width: '160px',
              height: '36px',
              '&:hover': {
                bgcolor: 'var(--blue)',
              },
            }}
            onClick={handleShowModal}
          >
            <Stack direction="row" alignItems="center" gap="10px">
              <AddIcon sx={{ color: 'white', fontSize: '20px' }} />
              <Typography variant="body1" color="white">
                Add Option
              </Typography>
            </Stack>
          </Button>
        </Stack>

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
