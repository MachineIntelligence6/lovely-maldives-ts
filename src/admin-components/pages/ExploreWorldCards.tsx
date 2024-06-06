/* eslint-disable consistent-return */
/* eslint-disable no-alert */

'use client'

import React, { useEffect, useState, useTransition } from 'react'
import { Button, Typography, Stack, Box, Alert } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import {
  getWondersRequest,
  wondersRequest,
} from '@/utils/api-requests/wonders.request'
import AddCardModal from './modals/AddCardModal'
import { CustomCard } from '../styled/CustomCard'
import ExploreWorldSlider from '../sliders/ExploreWorldSlider'
import CustomLoader from '../common/CustomLoader'

const ExploreWorldCards = () => {
  const [isPending, startTransition] = useTransition()
  const [showModal, setShowModal] = useState(false)
  const [cards, setCards] = useState([] as any)
  const [alertMsg, setAlertMsg] = React.useState({ type: '', message: '' })
  const [detectChange, setDetectChange] = useState(false)

  const handleShowModal = () => setShowModal(!showModal)

  const handleDeleteCard = (index: number) => {
    setCards(cards.filter((_: any, i: number) => i !== index))
  }

  const getWonders = async () => {
    try {
      startTransition(async () => {
        const res = await getWondersRequest()
        const data = res?.data?.data
        if (res?.status === 200) {
          setCards(data)
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

  const handleAddCard = async (newCard: any) => {
    const homeBgId = JSON.parse(localStorage.getItem('homeBgId') as any)
    if (!newCard.title) return alert('Please enter title.')
    if (!newCard.img) return alert('Please upload card image.')

      try {
      startTransition(async () => {
        const res = await wondersRequest({
          title: newCard?.title,
          image: newCard?.img,
          homeBgId,
        })
        const data = res?.data
        console.log('response upload ', data)
        if (data.status === 201) {
          getWonders()
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
    getWonders()
  }, [])

  return (
    <>
      <AddCardModal
        open={showModal}
        handleShowModal={handleShowModal}
        handleAddCard={handleAddCard}
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
            Explore World of Wonders
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
                  fonsSize: '14px',
                }}
              >
                Add Card
              </Typography>
            </Stack>
          </Button>
        </Stack>

        {cards?.length > 0 ? (
          <ExploreWorldSlider
            cards={cards}
            handleDeleteCard={handleDeleteCard}
          />
        ) : (
          <Typography variant="body1" color="var(--black)">
            No Card Added...
          </Typography>
        )}
      </CustomCard>
    </>
  )
}

export default ExploreWorldCards
