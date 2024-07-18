/* eslint-disable no-alert */

'use client'

import React, { useEffect, useState, useTransition } from 'react'
import { Alert, Box, Stack } from '@mui/material'
import { CustomCard } from '@/admin-components/styled/CustomCard'
import CustomSearchField from '@/admin-components/items/CustomSearchField'
import CustomDropdown from '@/admin-components/items/CustomDropdown'
import { deleteSubscriptionsRequest } from '@/utils/api-requests/subscribe.request'
import CustomLoader from '@/admin-components/common/CustomLoader'
import {
  changeUserStatusRequest,
  deleteUserRequest,
  getUsersRequest,
} from '@/utils/api-requests/users.request'
import UsersTable from '@/admin-components/tables/UsersTable'

const options = [{ label: 'Approved' }, { label: 'Not Approved' }]

const headOptions = ['Id', 'Name', 'Email', 'Roles', 'Status', 'Actions']

const UserRoles = () => {
  const [isPending, startTransition] = useTransition()
  const [alertMsg, setAlertMsg] = useState({ type: '', message: '' })
  const [users, setUsers] = useState([] as any)

  const getAllUsers = async () => {
    try {
      startTransition(async () => {
        const res = await getUsersRequest()
        const data = res?.data
        console.log('subscsriotions email ', data)
        if (data?.status === 200) {
          setUsers(data?.data)
        } else {
          console.log('response about maldives', res)
        }
        console.log('response ', res)
      })
    } catch (error: any) {
      console.log('error ', error)
    }
  }

  const deleteUser = (id: any) => {
    const sure = window.confirm('Are you sure?')
    if (!sure) return
    try {
      startTransition(async () => {
        const res = await deleteUserRequest(id)
        const data = res?.data
        if (data?.status === 200) {
          getAllUsers()
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

  const changeStatus = (id: string, status: boolean) => {
    const confirm = window.confirm(
      "Are you sure you want to change user's status?"
    )
    if (!confirm) return
    try {
      startTransition(async () => {
        const res = await changeUserStatusRequest(id, status)
        const data = res?.data
        if (data?.status === 200) {
          getAllUsers()
          setAlertMsg({
            type: 'success',
            message: 'Status updated successfully.',
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
        }
      })
    } catch (error: any) {
      setAlertMsg({
        type: 'error',
        message: 'Error occured while saving data, please try again.',
      })
    }
  }

  useEffect(() => {
    getAllUsers()
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
        <UsersTable
          dataArray={users}
          headOptions={headOptions}
          deleteUser={deleteUser}
          changeStatus={changeStatus}
        />
      </Box>
    </CustomCard>
  )
}

export default UserRoles
