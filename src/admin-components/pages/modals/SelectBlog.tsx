/* eslint-disable react-hooks/exhaustive-deps */
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
import { getBlogsRequest } from '@/utils/api-requests/blogs.request'

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

const SelectBlog = (props: any) => {
  const { open, handleShowModal, handleAddBlog, options, index } = props

  const [pages, setPages] = useState({ page: 1, limit: 500 })
  const [blog, setBlog] = useState('' as any)
  const [isPending, startTransition] = useTransition()
  const [blogs, setBlogs] = useState([])

  const handleChange = (e: any) => {
    const { value } = e.target
    const findBlog = blogs.find((item: any) => item.id === value)
    setBlog(findBlog)
  }

  const getAllBlogs = async () => {
    try {
      startTransition(async () => {
        const res = await getBlogsRequest(pages, '')
        const data = res?.data
        const blogsData = [] as any
        if (data?.status === 200) {
          data?.data?.map((item: any) => {
            blogsData.push({ ...item, label: item?.title, value: item?.id })
          })
          setBlogs(blogsData)
        }
      })
    } catch (error: any) {
      console.log('error ', error)
    }
  }
  useEffect(() => {
    getAllBlogs()
  }, [])

  return (
    <div>
      <Modal
        open={open}
        onClose={() => handleShowModal(null)}
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
            Add Blog
          </Typography>

          <CustomLabel
            id="demo-simple-select-label"
            sx={{ mb: '7px', fontFamily: 'Public Sans' }}
          >
            Select Blog
          </CustomLabel>
          <CustomSelect
            placeholder="Select Blog."
            value={blog.value}
            options={blogs}
            name="blog"
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
              onClick={() => handleShowModal(null)}
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
                if (!blog) return
                handleAddBlog(
                  {
                    id: blog.id,
                    coverImage: blog.coverImage,
                    category: blog.category,
                    title: blog.title,
                  },
                  index
                )
                setBlog('')
                handleShowModal(null)
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

export default SelectBlog
