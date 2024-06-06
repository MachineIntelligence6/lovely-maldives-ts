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
import AddCollection from './modals/AddCollection'
import { CustomCard } from '../styled/CustomCard'
import CollectionSlider from '../sliders/CollectionSlider'
import CustomLoader from '../common/CustomLoader'

const OurCollection = () => {
  const [isPending, startTransition] = useTransition()
  const [showModal, setShowModal] = useState(false)
  const [collections, setCollections] = useState([] as any)
  const [alertMsg, setAlertMsg] = React.useState({ type: '', message: '' })
  const [detectChange, setDetectChange] = useState(false)

  const handleShowModal = () => setShowModal(!showModal)

  // const handleAddCollection = (newCollection: any) => {
  //   setCollections([...collections, newCollection])
  //   handleShowModal()
  // }

  const handleDeleteCard = (index: number) => {
    setCollections(collections.filter((_: any, i: number) => i !== index))
  }

  const getCollections = async () => {
    try {
      startTransition(async () => {
        const res = await getCollectionsRequest()
        const data = res?.data
        console.log('data ', data)
        if (data?.status === 200) {
          setCollections(data?.data)
        } else {
          alert('Error occured while fetching about maldives data.')
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
    const homeBgId = JSON.parse(localStorage.getItem('homeBgId') as any)
    if (!newCollection.title) return alert('Please enter title.')
    if (!newCollection.img) return alert('Please upload card image.')

    try {
      startTransition(async () => {
        const res = await collectionRequest({
          title: newCollection?.title,
          image: newCollection?.img,
          ratings: newCollection?.stars,
          homeBgId,
        })
        const data = res?.data
        console.log('response upload ', data)
        if (data.status === 201) {
          getCollections()
          setDetectChange(false)
          handleShowModal()
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
        handleAddCollection={handleAddCollection}
      />
      <CustomCard sx={{ padding: '40px !important', mt: 2 }}>
        {isPending && <CustomLoader />}
        {alertMsg.message && (
          <Alert sx={{ mb: 2 }} severity={alertMsg.type as any}>
            {alertMsg.message}
          </Alert>
        )}

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap="1rem"
        >
          <Typography
            variant="body1"
            color="var(--black)"
            sx={{ fontSize: '18px', fontWeight: 'bold', mb: 3 }}
          >
            Our Collection
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
                sx={{ fontSize: '14px', textTransform: 'capitalize' }}
              >
                Add Collection
              </Typography>
            </Stack>
          </Button>
        </Stack>

        {collections?.length > 0 ? (
          <CollectionSlider
            collections={collections}
            handleDeleteCard={handleDeleteCard}
          />
        ) : (
          <Typography variant="body1" color="var(--black)">
            No Collection Added...
          </Typography>
        )}
      </CustomCard>
    </>
  )
}

export default OurCollection
