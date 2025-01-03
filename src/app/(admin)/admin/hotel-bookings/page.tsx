'use client'

import React, { useEffect, useState, useTransition } from 'react'
import { TableSortLabel, Stack, Box, Alert } from '@mui/material'
import styled from '@emotion/styled'
import CustomDropdown from '@/admin-components/items/CustomDropdown'
import CustomSearchField from '@/admin-components/items/CustomSearchField'
import { CustomCard } from '@/admin-components/styled/CustomCard'
import CustomLoader from '@/admin-components/common/CustomLoader'
import BookingsTable from '@/admin-components/tables/BookingsTable'
import {
  deleteHotelBookingRequest,
  getHotelBookingsRequest,
} from '@/services/hotel-booking'

const options = [{ label: 'Approved' }, { label: 'Not Approved' }]

const headOptions = [
  'S.No',
  'Customer Name',
  'Email',
  'Phone',
  'Total Guest',
  'Total Rooms',
  'Check In Date',
  'Check Out Date',
]

const Page = () => {
  const [isPending, startTransition] = useTransition()
  const [alertMsg, setAlertMsg] = useState({ type: '', message: '' })
  const [bookings, setBookings] = useState([] as any)
  const page: number = 1
  const limit: number = 100

  const handleChangeStatus = (id: number, newStatus: string) => {
    console.log(`Change status for booking ID: ${id} to ${newStatus}`)
  }

  const getHotelBookings = async () => {
    try {
      startTransition(async () => {
        const res = await getHotelBookingsRequest(page, limit)
        const data = res?.data
        if (data?.status === 200) {
          setBookings(data?.data) // assuming `setHotelBookings` is used to set the state of the bookings
        } else {
          setAlertMsg({ type: 'error', message: data?.message })
          setTimeout(() => {
            setAlertMsg({ type: '', message: '' })
          }, 3000)
        }
      })
    } catch (error: any) {
      console.log('Error fetching hotel bookings: ', error)
      setAlertMsg({
        type: 'error',
        message: 'Error occurred while fetching bookings, please try again.',
      })
      setTimeout(() => {
        setAlertMsg({ type: '', message: '' })
      }, 3000)
    }
  }

  const handleDeleteBooking = (id: string) => {
    const sure = window.confirm('Are you sure to cancel booking?')
    if (!sure) return

    try {
      startTransition(async () => {
        const res = await deleteHotelBookingRequest(id)
        const data = res?.data

        if (data?.status === 200) {
          await getHotelBookings()
          setAlertMsg({
            type: 'success',
            message: 'booking deleted successfully.',
          })

          setTimeout(() => {
            setAlertMsg({ type: '', message: '' })
          }, 3000)
        } else {
          setAlertMsg({ type: 'error', message: data?.message })

          setTimeout(() => {
            setAlertMsg({ type: '', message: '' })
          }, 3000)
        }
      })
    } catch (err: any) {
      setAlertMsg({
        type: 'error',
        message: 'Error occurred while deleting the booking, please try again.',
      })

      setTimeout(() => {
        setAlertMsg({ type: '', message: '' })
      }, 3000)

      console.error('Error deleting booking:', err)
    }
  }

  useEffect(() => {
    getHotelBookings()
  }, [])

  return (
    <CustomCard sx={{ padding: '40px !important' }}>
      {isPending && <CustomLoader />}
      {alertMsg.message && (
        <Alert sx={{ mb: 2 }} severity={alertMsg.type as any}>
          {alertMsg.message}
        </Alert>
      )}
      {/* <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap="1rem"
      >
        <CustomSearchField
          name="search"
          placeholder="Search"
          //   onChange={searchcategories}
        />
        <CustomDropdown
          label="Property Types"
          options={options}
          //   handleFilterChange={handleFilterChange}
          //   filter={filter}
        />
      </Stack> */}
      <Box sx={{ width: '100%', overflow: 'auto' }}>
        <BookingsTable
          dataArray={bookings}
          deleteBooking={handleDeleteBooking}
          headOptions={headOptions}
          changeStatus={handleChangeStatus}
        />
      </Box>
    </CustomCard>
  )
}

export default Page
