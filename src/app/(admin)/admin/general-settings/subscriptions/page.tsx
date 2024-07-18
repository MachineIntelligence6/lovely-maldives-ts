/* eslint-disable no-alert */

'use client'

import React, { useEffect, useState, useTransition } from 'react'
import { Alert, Box, Stack } from '@mui/material'
import { CustomCard } from '@/admin-components/styled/CustomCard'
import CustomSearchField from '@/admin-components/items/CustomSearchField'
import CustomDropdown from '@/admin-components/items/CustomDropdown'
import {
  deleteSubscriptionsRequest,
  getSubscriptionsRequest,
} from '@/utils/api-requests/subscribe.request'
import CustomLoader from '@/admin-components/common/CustomLoader'
import SubscriptionTable from '@/admin-components/tables/SubscriptionTable'

const options = [
  { label: 'Property Types' },
  { label: 'Amenities' },
  { label: 'Hotel Class' },
  { label: 'Style' },
  { label: 'Distance from City' },
  { label: 'Traveler Rating' },
]

const headOptions = ['Id', 'Email', 'Subscribed date', 'Delete']

const Subscriptions = () => {
  const [isPending, startTransition] = useTransition()
  const [alertMsg, setAlertMsg] = useState({ type: '', message: '' })
  const [subs, setSubs] = useState([] as any)

  const getSubscriptions = async () => {
    try {
      startTransition(async () => {
        const res = await getSubscriptionsRequest()
        const data = res?.data
        console.log('subscsriotions email ', data)
        if (data?.status === 200) {
          setSubs(data?.data)
        } else {
          console.log('response about maldives', res)
        }
        console.log('response ', res)
      })
    } catch (error: any) {
      console.log('error ', error)
    }
  }

  const deleteSubscription = (id: any) => {
    const sure = window.confirm('Are you sure?')
    if (!sure) return
    try {
      startTransition(async () => {
        const res = await deleteSubscriptionsRequest(id)
        const data = res?.data
        if (data?.status === 200) {
          getSubscriptions()
          setAlertMsg({
            type: 'success',
            message: 'Data deleted successfully.',
          })
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
          console.log('response about maldives', res)
        }
      })
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
    getSubscriptions()
  }, [])

  return (
    <CustomCard sx={{ padding: '40px !important' }}>
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
      </Stack>
      <Box sx={{ width: '100%', overflow: 'auto' }}>
        <SubscriptionTable
          dataArray={subs}
          headOptions={headOptions}
          deleteSubscription={deleteSubscription}
        />
      </Box>
    </CustomCard>
  )
}

export default Subscriptions
