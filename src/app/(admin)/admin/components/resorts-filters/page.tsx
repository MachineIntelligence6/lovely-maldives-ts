/* eslint-disable no-alert */

'use client'

import React, { useEffect, useState, useTransition } from 'react'
import { Alert, Box, Button, Stack, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { CustomCard } from '@/admin-components/styled/CustomCard'
import ResortFilter from '@/admin-components/tables/ResortFilter'
import CustomSearchField from '@/admin-components/items/CustomSearchField'
import CustomDropdown from '@/admin-components/items/CustomDropdown'
import {
  AddResortFilterRequest,
  deleteResortFilterRequest,
  editResortFilterRequest,
  getResortFilterRequest,
} from '@/utils/api-requests/resortfilter.request'
import CustomLoader from '@/admin-components/common/CustomLoader'
import AddFilterModel from './AddFilterModel'

const options = [
  { label: 'Property Types' },
  { label: 'Amenities' },
  { label: 'Hotel Class' },
  { label: 'Style' },
  { label: 'Distance from City' },
  { label: 'Traveler Rating' },
]

const ResortsFilters = () => {
  const [isPending, startTransition] = useTransition()

  const [showModal, setShowModal] = useState(false)
  const [filters, setFilters] = useState([] as any)
  const [edit, setEdit] = useState(null)
  const [filter, setFilter] = useState('')
  const [alertMsg, setAlertMsg] = React.useState({ type: '', message: '' })

  const handleShowModal = () => setShowModal(!showModal)
  const handleFilterChange = (option: any) => {
    setFilter(option)
    const filtered = filters.filter((fltr: any) => fltr.type === option)
    setFilters(filtered)
  }

  const editFilter = (fil: any) => {
    setEdit(fil)
    handleShowModal()
  }

  const searchFilters = (e: any) => {
    const { value } = e.target
    if (value === '') {
      setFilters(filters)
    } else {
      const filtered = filters.filter((item: any) =>
        item.filter?.toLowerCase().includes(value.toLowerCase())
      )
      setFilters(filtered)
    }
  }

  const getFilters = async () => {
    try {
      startTransition(async () => {
        const res = await getResortFilterRequest()
        const data = res?.data
        if (data?.status === 200) {
          setFilters(data?.data)
        } else {
          setAlertMsg({ type: 'error', message: data?.message })
          setTimeout(() => {
            setAlertMsg({ type: '', message: '' })
          }, 3000)
        }
      })
    } catch (error: any) {
      console.log('error ', error)
    }
  }

  const handleAddFilter = async (fil: any) => {
    try {
      startTransition(async () => {
        const res = await AddResortFilterRequest(fil)
        const data = res?.data
        if (data?.status === 201) {
          getFilters()
          setAlertMsg({ type: 'success', message: 'Data saved successfully.' })
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

  const deleteFilter = (id: string) => {
    const sure = window.confirm('Are you sure?')
    if (!sure) return
    try {
      startTransition(async () => {
        const res = await deleteResortFilterRequest(id)
        const data = res?.data
        if (data?.status === 200) {
          getFilters()
          setAlertMsg({
            type: 'success',
            message: 'Data deleted successfully.',
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
    } catch (error: any) {
      setAlertMsg({
        type: 'error',
        message: 'Error occured while deleting data, please try again.',
      })
      setTimeout(() => {
        setAlertMsg({ type: '', message: '' })
      }, 3000)
      console.log('error ', error)
    }
  }

  const handleEditFilter = (values: any) => {
    try {
      startTransition(async () => {
        const res = await editResortFilterRequest(values)
        const data = res?.data
        if (data?.status === 200) {
          getFilters()
          setAlertMsg({
            type: 'success',
            message: 'Data deleted successfully.',
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
    } catch (error: any) {
      setAlertMsg({
        type: 'error',
        message: 'Error occured while deleting data, please try again.',
      })
      setTimeout(() => {
        setAlertMsg({ type: '', message: '' })
      }, 3000)
      console.log('error ', error)
    }
  }

  useEffect(() => {
    getFilters()
  }, [])

  return (
    <CustomCard sx={{ padding: '40px !important', mt: 2 }}>
      {isPending && <CustomLoader />}
      {alertMsg.message && (
        <Alert sx={{ mb: 2 }} severity={alertMsg.type as any}>
          {alertMsg.message}
        </Alert>
      )}
      <AddFilterModel
        open={showModal}
        edit={edit}
        handleShowModal={handleShowModal}
        handleAddFilter={handleAddFilter}
        handleEditFilter={handleEditFilter}
      />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap="1rem"
        sx={{ mb: 2 }}
      >
        <Typography
          variant="body1"
          color="var(--black)"
          sx={{ fontSize: '18px', fontWeight: 'bold' }}
        >
          Add Resorts Filters
        </Typography>
        <Button
          variant="outlined"
          sx={{
            border: '1px solid var(--brown)',
            textTransform: 'capitalize',
          }}
          onClick={handleShowModal}
        >
          <Stack direction="row" alignItems="center" gap="10px">
            <AddIcon sx={{ color: 'var(--brown)', fontSize: '22px' }} />
            <Typography variant="body1" color="var(--brown)">
              Add Filter
            </Typography>
          </Stack>
        </Button>
      </Stack>
      {/* {filters?.length > 0 && (
        <> */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap="1rem"
      >
        <CustomSearchField
          name="search"
          placeholder="Search"
          onChange={searchFilters}
        />
        <CustomDropdown
          label="Property Types"
          options={options}
          handleFilterChange={handleFilterChange}
          filter={filter}
        />
      </Stack>
      <Box sx={{ width: '100%', overflow: 'auto' }}>
        <ResortFilter
          filters={filters}
          deleteFilter={deleteFilter}
          editFilter={editFilter}
        />
      </Box>
      {/* </>
      )} */}
    </CustomCard>
  )
}

export default ResortsFilters
