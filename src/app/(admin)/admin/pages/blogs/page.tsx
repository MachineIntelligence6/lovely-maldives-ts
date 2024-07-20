/* eslint-disable no-alert */
/* eslint-disable react-hooks/exhaustive-deps */

'use client'

import { Alert, Box, Button, Stack, Typography } from '@mui/material'
import dynamic from 'next/dynamic'
import { useEffect, useState, useTransition } from 'react'
import AddIcon from '@mui/icons-material/Add'
import {
  AddBlogCategsRequest,
  deleteBlogSectionRequest,
  getBlogsSectionRequest,
} from '@/utils/api-requests/blogcategs-request'
import HeadingWraper from '@/admin-components/common/HeadingWraper'
import { CustomCard } from '@/admin-components/styled/CustomCard'
import TextFieldWraper from '@/admin-components/items/TextfieldWraper'

import SelectBlog from '@/admin-components/pages/modals/SelectBlog'
import BlogsWraper from '@/admin-components/pages/BlogsWraper'
import CustomLoader from '@/admin-components/common/CustomLoader'

// const ReactQuillEditor = dynamic(
//   () => import('@/admin-components/common/ReactQuillEditor'),
//   { ssr: false }
// )

export default function Blogs() {
  const [isPending, startTransition] = useTransition()
  const [alertMsg, setAlertMsg] = useState({ type: '', message: '' })
  const [detectChange, setDetectChange] = useState(true)

  const [ids, setIds] = useState([] as any)
  const [blogs, setBlogs] = useState([] as any)
  const [allBlogs, setAllBlogs] = useState([] as any)
  const [options, setOptions] = useState([])
  const [blogSecId, setBlogSecId] = useState(null as any)
  const [showBlogModal, setShowBlogModal] = useState({
    show: false,
    index: null as any,
  })
  const [values, setValues] = useState({
    category: '',
    blog: '',
  })

  const handleShowBlogModal = (index: number) =>
    setShowBlogModal({ show: !showBlogModal?.show, index })

  const handleAddBlog = async (index: number, blog: any) => {
    setIds([...ids, blog?.id])
    setBlogs([...blogs, blog])
  }

  const updateBlog = (data: any) => {
    setValues({ ...values, category: data.category })
    setBlogs(data?.blogs)
    setBlogSecId(data?.sectionId)
    const allIds = data?.blogs?.map((blo: any) => blo?.id)
    setIds(allIds)
  }

  const deleteBlogSection = (id: string) => {
    const sure = window.confirm('Are you sure you want to delete?')
    if (!sure) return
    try {
      startTransition(async () => {
        const res = await deleteBlogSectionRequest(id)
        const data = res?.data
        if (data?.status === 200) {
          getSections()
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
        message: 'Error occured while saving data, please try again.',
      })
      setTimeout(() => {
        setAlertMsg({ type: '', message: '' })
      }, 3000)
      console.log('error ', error)
      throw new Error(error)
    }
  }

  const handleAddSections = async () => {
    try {
      startTransition(async () => {
        const res = await AddBlogCategsRequest({
          category: values.category,
          ids,
          blogSecId,
        })
        const data = res?.data
        if (data?.status === 201) {
          getSections()
          setBlogs([])
          setIds([])
          setValues({ category: '', blog: [] as any })
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
      throw new Error(error)
    }
  }

  const getSections = () => {
    try {
      startTransition(async () => {
        const res = await getBlogsSectionRequest()
        const data = res?.data
        if (data?.status === 200) {
          setAllBlogs(data?.data)
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
      throw new Error(error)
    }
  }

  useEffect(() => {
    getSections()
  }, [])

  return (
    <>
      <CustomCard sx={{ padding: '40px !important', mt: 2 }}>
        {isPending && <CustomLoader />}
        {alertMsg.message && (
          <Alert sx={{ mb: 2 }} severity={alertMsg.type as any}>
            {alertMsg.message}
          </Alert>
        )}

        <SelectBlog
          open={showBlogModal.show}
          handleShowModal={handleShowBlogModal}
          handleAddBlog={(hotel: any, ind: number) => handleAddBlog(ind, hotel)}
          options={options}
          index={showBlogModal.index}
        />

        <HeadingWraper
          title="Blogs"
          detectChange={detectChange}
          handleSave={handleAddSections}
        />
        <Box sx={{ mt: 3, pb: 5 }}>
          <TextFieldWraper
            label="Blogs Category"
            placeholder="Enter blogs category."
            value={values?.category}
            name="category"
            onChange={(e: any) =>
              setValues({ ...values, category: e.target.value })
            }
          />

          <Button
            variant="outlined"
            sx={{
              border: '1px solid var(--brown)',
              mt: 1,
              textTransform: 'capitalize',
            }}
            onClick={() => handleShowBlogModal(null as any)}
          >
            <Stack direction="row" alignItems="center" gap="10px">
              <AddIcon sx={{ color: 'var(--brown)', fontSize: '22px' }} />
              <Typography variant="body1" color="var(--brown)">
                Add Blog
              </Typography>
            </Stack>
          </Button>

          {blogs?.length > 0 && (
            <BlogsWraper category={values?.category} blogs={blogs} />
          )}
        </Box>
      </CustomCard>

      {allBlogs?.length > 0 && (
        <CustomCard sx={{ padding: '40px !important', mt: 2 }}>
          {allBlogs?.map((blogsData: any, index: number) => (
            <BlogsWraper
              key={index}
              updateBlog={updateBlog}
              blogs={blogsData?.blogs}
              sectionId={blogsData?.id}
              category={blogsData?.category}
              deleteBlogSection={deleteBlogSection}
            />
          ))}
        </CustomCard>
      )}
    </>
  )
}
