'use client'

import React, { useState } from 'react'
import { Button, Typography, Stack, Box } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import AddCardModal from './modals/AddCardModal'
import { CustomCard } from '../styled/CustomCard'
import ExploreWorldSlider from '../sliders/ExploreWorldSlider'

const ExploreWorldCards = () => {
  const [showModal, setShowModal] = useState(false)
  const [cards, setCards] = useState([] as any)

  const handleShowModal = () => setShowModal(!showModal)

  const handleAddCard = (newCard: any) => {
    setCards([...cards, newCard])
    handleShowModal()
  }

  const handleDeleteCard = (index: number) => {
    setCards(cards.filter((_: any, i: number) => i !== index))
  }

  return (
    <>
      <AddCardModal
        open={showModal}
        handleShowModal={handleShowModal}
        handleAddCard={handleAddCard}
      />
      <CustomCard sx={{ padding: '40px !important', mt: 2 }}>
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
