/* eslint-disable consistent-return */
/* eslint-disable no-alert */

'use client'

import React, { useEffect, useState, useTransition } from 'react'
import { Button, Typography, Stack, Box, Alert } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import {
  collectionRequest,
  getCollectionsRequest,
} from '@/utils/api-requests/collections-request'
import useHomeBgId from '@/utils/useHomeBgId'
import AddCollection from './modals/AddCollection'
import { CustomCard } from '../styled/CustomCard'
import CollectionSlider from '../sliders/CollectionSlider'
import CustomLoader from '../common/CustomLoader'
import HeadingWraper from '../common/HeadingWraper'
import TextFieldWraper from '../items/TextfieldWraper'

const OurCollection = () => {
  const [isPending, startTransition] = useTransition()
  const [showModal, setShowModal] = useState(false)
  const [collections, setCollections] = useState([] as any)
  const [alertMsg, setAlertMsg] = React.useState({ type: '', message: '' })
  const [detectChange, setDetectChange] = useState(false)
  const [values, setValues] = useState({ title: '' })
  const [edit, setEdit] = useState('' as any)
  const homeBgId = useHomeBgId()

  const handleShowModal = () => setShowModal(!showModal)

  const handleDeleteCard = (index: number) => {
    const sure = window.confirm('Are you sure you want to delete?')
    if (!sure) return
    setCollections(collections.filter((_: any, i: number) => i !== index))
  }

  const editModelShow = (index: number) => {
    setEdit(collections?.[index])
    handleShowModal()
  }

  const addNewCollection = (newCollection: any, type: string) => {
    if (type === 'edit') {
      const newCollections = collections.map((collection: any) =>
        collection.title === edit.title ? newCollection : collection
      )
      setCollections(newCollections)
    } else {
      setCollections([...collections, newCollection])
    }
    setDetectChange(true)
  }

  const getCollections = async () => {
    try {
      startTransition(async () => {
        const res = await getCollectionsRequest()
        const data = res?.data
        console.log('data ', data)
        if (data?.status === 200) {
          setCollections(data?.data?.collections || [])
          setValues(data?.data)
        } else {
          // alert('Error occured while fetching about maldives data.')
          setAlertMsg({ type: 'error', message: data?.message })
          setTimeout(() => {
            setAlertMsg({ type: '', message: '' })
          }, 3000)
          console.log('response about maldives', res)
        }
        console.log('response ', res)
      })
    } catch (error: any) {
      console.log('error ', error)
    }
  }

  const handleAddCollection = async (newCollection: any) => {
    console.log('new collection ', newCollection)
    if (!values.title) return alert('Please enter title.')

    try {
      startTransition(async () => {
        const res = await collectionRequest({
          title: values?.title,
          collections,
          homeBgId,
        })
        const data = res?.data
        console.log('response upload ', data)
        if (data.status === 201) {
          getCollections()
          setDetectChange(false)
          setAlertMsg({ type: 'success', message: 'Data saved successfully.' })
          setTimeout(() => {
            setAlertMsg({ type: '', message: '' })
          }, 3000)
        } else {
          setAlertMsg({
            type: 'error',
            message: data?.message,
          })
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
    getCollections()
  }, [])

  return (
    <>
      <AddCollection
        open={showModal}
        handleShowModal={handleShowModal}
        handleAddCollection={addNewCollection}
        edit={edit}
      />
      <CustomCard sx={{ padding: '40px !important', mt: 2 }}>
        {isPending && <CustomLoader />}
        {alertMsg.message && (
          <Alert sx={{ mb: 2 }} severity={alertMsg.type as any}>
            {alertMsg.message}
          </Alert>
        )}

        <HeadingWraper
          title="Our Collections"
          handleSave={handleAddCollection}
          detectChange={detectChange}
        />

        <TextFieldWraper
          label="Title"
          placeholder="Enter title."
          value={values?.title}
          name="title"
          onChange={(e: any) => {
            setDetectChange(true)
            setValues({ ...values, title: e.target.value })
          }}
        />

        <Button
          sx={{
            bgcolor: 'var(--blue)',
            color: 'white',
            width: '160px',
            mt: 1,
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
              sx={{ fontSize: '14px', textTransform: 'capitalize' }}
            >
              Add Collection
            </Typography>
          </Stack>
        </Button>

        {collections?.length > 0 ? (
          <CollectionSlider
            collections={collections}
            handleDeleteCard={handleDeleteCard}
            editModelShow={editModelShow}
          />
        ) : (
          <Typography variant="body1" color="var(--black)" sx={{ mt: 3 }}>
            No Collection Added...
          </Typography>
        )}
      </CustomCard>
    </>
  )
}

export default OurCollection
