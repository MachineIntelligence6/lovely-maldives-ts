/* eslint-disable no-alert */

'use client'

import React, { useState } from 'react'
import { Button, Stack, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { CustomCard } from '@/admin-components/styled/CustomCard'
import CustomSearchField from '@/admin-components/items/CustomSearchField'
import CustomDropdown from '@/admin-components/items/CustomDropdown'
import CategoriesTable from '@/admin-components/tables/CategoriesTable'
import AddCategory from './AddCategory'

const options = [
  { label: 'Property Types' },
  { label: 'Amenities' },
  { label: 'Hotel Class' },
  { label: 'Style' },
  { label: 'Distance from City' },
  { label: 'Traveler Rating' },
]

const BlogCategories = () => {
  const [showModal, setShowModal] = useState(false)
  const [categories, setCategories] = useState([] as any)
  const [edit, setEdit] = useState(null)
  const [filter, setFilter] = useState('')

  const handleShowModal = () => setShowModal(!showModal)

  const handleAddCategory = (fil: any) => {
    setCategories([...categories, fil])
  }

  const handleFilterChange = (option: any) => {
    setFilter(option)
    const filtered = categories.filter((fltr: any) => fltr.type === option)
    setCategories(filtered)
  }

  const deleteFilter = (id: any) => {
    const sure = window.confirm('Are you sure?')
    if (!sure) return
    setCategories(categories.filter((_: any, index: number) => index !== id))
  }

  const editCategory = (categ: any) => {
    setEdit(categ)
    handleShowModal()
  }
  const handleEditCategory = (val: any, ind: number) => {
    setEdit(null)
    setCategories(
      categories.map((_: any, index: number) => {
        if (index === ind) {
          return val
        }
        return _
      })
    )
  }

  const searchcategories = (e: any) => {
    const { value } = e.target
    console.log('search ', value)
    if (value === '') {
      setCategories(categories)
    } else {
      const filtered = categories.filter((item: any) =>
        item.filter?.toLowerCase().includes(value.toLowerCase())
      )
      setCategories(filtered)
    }
  }

  return (
    <CustomCard sx={{ padding: '40px !important', mt: 2 }}>
      <AddCategory
        open={showModal}
        edit={edit}
        handleShowModal={handleShowModal}
        handleAddCategory={handleAddCategory}
        handleEditCategory={handleEditCategory}
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
          Add Blog Categories
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
              Add Category
            </Typography>
          </Stack>
        </Button>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap="1rem"
      >
        <CustomSearchField
          name="search"
          placeholder="Search"
          onChange={searchcategories}
        />
        <CustomDropdown
          label="Property Types"
          options={options}
          handleFilterChange={handleFilterChange}
          filter={filter}
        />
      </Stack>
      <CategoriesTable
        categories={categories}
        deleteFilter={deleteFilter}
        editCategory={editCategory}
      />
    </CustomCard>
  )
}

export default BlogCategories
