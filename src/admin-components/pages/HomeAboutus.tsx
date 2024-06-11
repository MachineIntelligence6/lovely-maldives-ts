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
// import useHomeBgId from '@/utils/useHomeBgId'
import AddOptionModal from './modals/AddOptionModal'
import CustomLoader from '../common/CustomLoader'

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
  // const homeBgId = useHomeBgId()
  const [homeBgId, setHomeBgId] = useState('')

  const handleEditorValue = (value: any) => {
    setEditorText(value)
    setDetectChange(true)
  }

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
    setDetectChange(true)
  }

  const handleEdit = (value: any) => setEdit(value as any)

  const getAboutusShort = async () => {
    try {
      startTransition(async () => {
        const res = await getaboutusShortRequest()
        const data = res?.data?.data
        if (res?.status === 200) {
          setEditorText(data?.description)
          setOptions(data?.promises)
        } else {
          alert('Error occured while fetching about maldives data.')
          console.log('response about maldives', res)
        }
      })
    } catch (error: any) {
      console.log('error ', error)
    }
  }

  const handleSave = async () => {
    // const homeBgId = JSON.parse(localStorage.getItem('homeBgId') as any)
    try {
      startTransition(async () => {
        const res = await aboutusShortRequest({
          title: 'About Us',
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
    setHomeBgId(JSON.parse(window.localStorage.getItem('homeBgId') as any))
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
          <ReactQuillEditor
            handleEditorValue={handleEditorValue}
            value={editorText}
            height={200}
          />
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
