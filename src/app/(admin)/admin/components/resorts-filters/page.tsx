/* eslint-disable no-alert */

'use client'

import React, { useState } from 'react'
import { Button, Stack, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { CustomCard } from '@/admin-components/styled/CustomCard'
import ResortFilter from '@/admin-components/tables/ResortFilter'
import CustomSearchField from '@/admin-components/items/CustomSearchField'
import CustomDropdown from '@/admin-components/items/CustomDropdown'
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
  const [showModal, setShowModal] = useState(false)
  const [filters, setFilters] = useState([] as any)
  const [edit, setEdit] = useState(null)
  const [filter, setFilter] = useState('')

  const handleShowModal = () => setShowModal(!showModal)

  const handleAddFilter = (fil: any) => {
    setFilters([...filters, fil])
  }

  const handleFilterChange = (option: any) => {
    setFilter(option)
    const filtered = filters.filter((fltr: any) => fltr.type === option)
    setFilters(filtered)
  }

  const deleteFilter = (id: any) => {
    const sure = window.confirm('Are you sure?')
    if (!sure) return
    setFilters(filters.filter((_: any, index: number) => index !== id))
  }

  const editFilter = (fil: any) => {
    setEdit(fil)
    handleShowModal()
  }
  const handleEditFilter = (val: any) => {
    setEdit(null)
    setFilters(
      filters.map((_: any, index: number) => {
        if (index === val.id) {
          return val
        }
        return _
      })
    )
  }

  const searchFilters = (e: any) => {
    const { value } = e.target
    console.log('search ', value)
    if (value === '') {
      setFilters(filters)
    } else {
      const filtered = filters.filter((item: any) =>
        item.filter?.toLowerCase().includes(value.toLowerCase())
      )
      setFilters(filtered)
    }
  }

  return (
    <CustomCard sx={{ padding: '40px !important', mt: 2 }}>
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
      <ResortFilter
        filters={filters}
        deleteFilter={deleteFilter}
        editFilter={editFilter}
      />
      {/* </>
      )} */}
    </CustomCard>
  )
}

export default ResortsFilters
