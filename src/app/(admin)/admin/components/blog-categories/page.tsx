/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-alert */

'use client'

import React, { useEffect, useState, useTransition } from 'react'
import { Alert, Button, Stack, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { CustomCard } from '@/admin-components/styled/CustomCard'
import CustomSearchField from '@/admin-components/items/CustomSearchField'
import CustomDropdown from '@/admin-components/items/CustomDropdown'
import CategoriesTable from '@/admin-components/tables/CategoriesTable'
import {
  createBlogCategory,
  delBlogCategories,
  updateBlogCategories,
} from '@/utils/api-requests/blog-categories.request'
import CustomLoader from '@/admin-components/common/CustomLoader'
import useCategoriesStore from '@/stores/blogCategoriesApiStore'
import AddCategory from './AddCategory'

const options = [
  { label: 'Property Types' },
  { label: 'Amenities' },
  { label: 'Hotel Class' },
  { label: 'Style' },
  { label: 'Distance from City' },
  { label: 'Traveler Rating' },
]

const headOptions = ['Id', 'Type', 'Actions']

const BlogCategories = () => {
  const [isPending, startTransition] = useTransition()
  const [alertMsg, setAlertMsg] = useState({ type: '', message: '' })
  const [showModal, setShowModal] = useState(false)
  const [edit, setEdit] = useState(null)
  const [filter, setFilter] = useState('')

  const { categories, error, loading, fetchData } = useCategoriesStore(
    (state: any) => ({
      categories: state.categories,
      error: state.error,
      loading: state.loading,
      fetchData: state.fetchData,
    })
  )

  const handleShowModal = () => setShowModal(!showModal)

  const handleAddCategory = (fil: any) => {
    try {
      startTransition(async () => {
        const res = await createBlogCategory({ category: fil })
        const data = res?.data
        if (data?.status === 201) {
          fetchData()
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
    } catch (err: any) {
      setAlertMsg({
        type: 'error',
        message: 'Error occured while saving data, please try again.',
      })
      setTimeout(() => {
        setAlertMsg({ type: '', message: '' })
      }, 3000)
      console.log('error ', err)
    }
  }

  const handleFilterChange = (option: any) => {
    setFilter(option)
    // const filtered = categories.filter((fltr: any) => fltr.type === option)
    // setCategories(filtered)
  }

  const deleteFilter = (id: any) => {
    const sure = window.confirm('Are you sure?')
    if (!sure) return
    try {
      startTransition(async () => {
        const res = await delBlogCategories(id)
        const data = res?.data
        if (data?.status === 200) {
          fetchData()
          setAlertMsg({
            type: 'success',
            message: 'Category deleted successfully.',
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
        message: 'Error occured while saving data, please try again.',
      })
      setTimeout(() => {
        setAlertMsg({ type: '', message: '' })
      }, 3000)
      console.log('error ', err)
    }
  }

  const editCategory = (categ: any) => {
    setEdit(categ)
    handleShowModal()
  }

  const handleEditCategory = (category: any, id: string) => {
    setEdit(null)
    try {
      startTransition(async () => {
        const res = await updateBlogCategories({ id, category })
        const data = res?.data
        if (data?.status === 200) {
          fetchData()
          setAlertMsg({
            type: 'success',
            message: 'Category updated successfully.',
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
        message: 'Error occured while saving data, please try again.',
      })
      setTimeout(() => {
        setAlertMsg({ type: '', message: '' })
      }, 3000)
      console.log('error ', err)
    }
  }

  const searchcategories = (e: any) => {
    const { value } = e.target
    if (value === '') {
      // setCategories(categories)
    } else {
      const filtered = categories.filter((item: any) =>
        item.filter?.toLowerCase().includes(value.toLowerCase())
      )
      // setCategories(filtered)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <CustomCard sx={{ padding: '40px !important', mt: 2 }}>
      <AddCategory
        open={showModal}
        edit={edit}
        handleShowModal={handleShowModal}
        handleAddCategory={handleAddCategory}
        handleEditCategory={handleEditCategory}
      />
      {isPending || loading ? <CustomLoader /> : ''}
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
        dataArray={categories}
        headOptions={headOptions}
        deleteFilter={deleteFilter}
        editCategory={editCategory}
      />
    </CustomCard>
  )
}

export default BlogCategories
