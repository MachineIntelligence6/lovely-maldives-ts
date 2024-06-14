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
import useHomeBgId from '@/utils/useHomeBgId'
import AddCardModal from './modals/AddCardModal'
import { CustomCard } from '../styled/CustomCard'
import ExploreWorldSlider from '../sliders/ExploreWorldSlider'
import CustomLoader from '../common/CustomLoader'
import TextFieldWraper from '../items/TextfieldWraper'
import HeadingWraper from '../common/HeadingWraper'

const ExploreWorldCards = () => {
  const [isPending, startTransition] = useTransition()
  const [showModal, setShowModal] = useState(false)
  const [cards, setCards] = useState([] as any)
  const [alertMsg, setAlertMsg] = React.useState({ type: '', message: '' })
  const [detectChange, setDetectChange] = useState(false)
  const [values, setValues] = useState({ title: '' })
  const [edit, setEdit] = useState('' as any)
  const homeBgId = useHomeBgId()

  const handleShowModal = () => setShowModal(!showModal)

  const handleDeleteCard = (index: number) => {
    const sure = window.confirm('Are you sure you want to delete?')
    if (!sure) return
    setCards(cards.filter((_: any, i: number) => i !== index))
  }

  const editModelShow = (index: number) => {
    setEdit(cards?.[index])
    handleShowModal()
  }

  const addNewService = (newCard: any, type: string) => {
    if (type === 'edit') {
      const newCards = cards.map((card: any) =>
        card.title === edit.title ? newCard : card
      )
      setCards(newCards)
    } else {
      setCards([...cards, newCard])
    }
    setDetectChange(true)
  }

  const getWonders = async () => {
    try {
      startTransition(async () => {
        const res = await getWondersRequest()
        const data = res?.data
        if (data?.status === 200) {
          setCards(data?.data?.cards || [])
          setValues(data?.data)
        } else {
          // alert('Error occured while fetching about maldives data.')
          setAlertMsg({type: 'error', message: data?.message})
          setTimeout(() => {
            setAlertMsg({ type: '', message: '' })
          }, 3000)
        }
      })
    } catch (error: any) {
      console.log('error ', error)
    }
  }

  const handleAddCard = async () => {
    if (!values.title) return alert('Please enter title.')
    try {
      startTransition(async () => {
        const res = await wondersRequest({
          title: values?.title,
          cards,
          homeBgId,
        })
        const data = res?.data
        if (data.status === 201) {
          getWonders()
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
    getWonders()
  }, [])

  return (
    <>
      <AddCardModal
        open={showModal}
        handleShowModal={handleShowModal}
        handleAddCard={addNewService}
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
          title="Explore world of wonders"
          handleSave={handleAddCard}
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
            mt: 1,
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

        {cards?.length > 0 ? (
          <ExploreWorldSlider
            cards={cards}
            handleDeleteCard={handleDeleteCard}
            editModelShow={editModelShow}
          />
        ) : (
          <Typography variant="body1" color="var(--black)" sx={{ mt: 3 }}>
            No Card Added...
          </Typography>
        )}
      </CustomCard>
    </>
  )
}

export default ExploreWorldCards
