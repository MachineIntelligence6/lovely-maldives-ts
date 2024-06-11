/* eslint-disable array-callback-return */

'use client'

import React, { useEffect, useState, useTransition } from 'react'
import styled from '@emotion/styled'
import {
  Box,
  Typography,
  Modal,
  Button,
  Stack,
  InputLabel,
} from '@mui/material'
import CustomSelect from '@/admin-components/items/CustomSelect'
import { getHotelsRequest } from '@/utils/api-requests/addHotels.request'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderColor: '0px solid transparent',
  borderRadius: '6px',
  py: '30px',
  px: '18px',
}

const CustomLabel = styled(InputLabel)(({ theme }) => ({
  fontSize: '16px',
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontWeight: 400,
  color: '#4B465C',
}))

const SelectHotel = (props: any) => {
  const { open, handleShowModal, handleAddHotel, options, type } = props
  const [hotel, setHotel] = useState('')
  const [isPending, startTransition] = useTransition()
  const [hotels, setHotels] = useState([] as any)

  const handleChange = (e: any) => {
    const { value } = e.target
    console.log('value is ', value)
    setHotel(value)
  }

  const getHotels = async () => {
    try {
      startTransition(async () => {
        const res = await getHotelsRequest(1, 500, [])
        const data = res?.data
        const hotelsData = [] as any
        if (data?.status === 200) {
          data?.data?.map((item: any) => {
            hotelsData.push({ label: item?.title, value: item?.id })
          })
          setHotels(hotelsData)
        } else {
          console.log('response about maldives', res)
        }
      })
    } catch (error: any) {
      console.log('error ', error)
    }
  }

  useEffect(() => {
    getHotels()
  }, [])

  return (
    <div>
      <Modal
        open={open}
        onClose={handleShowModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#000',
              fontFamily: 'Public Sans',
              mb: 3,
            }}
          >
            Add Hotel
          </Typography>

          <CustomLabel
            id="demo-simple-select-label"
            sx={{ mb: '7px', fontFamily: 'Public Sans' }}
          >
            Select Hotel
          </CustomLabel>
          <CustomSelect
            placeholder="Select Stars."
            value={hotel}
            options={hotels}
            name="hotel"
            onChange={(e: any) => handleChange(e)}
          />

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="end"
            gap="1rem"
            sx={{ mt: 3 }}
          >
            <Button
              variant="outlined"
              sx={{
                border: '1px solid var(--brown)',
                textTransform: 'capitalize',
                fontFamily: 'Public Sans',
              }}
              onClick={handleShowModal}
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              sx={{
                border: '1px solid var(--brown)',
                textTransform: 'capitalize',
                fontFamily: 'Public Sans',
              }}
              onClick={() => {
                if (!hotel) return
                handleAddHotel(hotel)
                setHotel('')
                handleShowModal()
              }}
            >
              Add
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  )
}

export default SelectHotel
