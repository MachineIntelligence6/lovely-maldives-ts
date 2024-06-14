/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */
/* eslint-disable react-hooks/exhaustive-deps */

'use client'

import { Alert, Box, InputLabel, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { useEffect, useState, useTransition } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import HeadingWraper from '@/admin-components/common/HeadingWraper'
import { CustomCard } from '@/admin-components/styled/CustomCard'
import TextFieldWraper from '@/admin-components/items/TextfieldWraper'
import CustomSelect from '@/admin-components/items/CustomSelect'
import {
  addBlogRequest,
  getBlogsRequest,
} from '@/utils/api-requests/blogs.request'
import CustomLoader from '@/admin-components/common/CustomLoader'
import blog from '/public/Images/landingTree.jpg'

// const ReactQuillEditor = dynamic(
//   () => import('@/admin-components/common/ReactQuillEditor'),
//   { ssr: false }
// )

const JoditTextEditor = dynamic(
  () => import('@/admin-components/common/JoditTextEditor'),
  { ssr: false }
)

const options = [
  { value: 'All Blogs', label: 'All Blogs' },
  { value: 'Latest Blogs', label: 'Latest Blogs' },
  { value: 'Popular Blogs', label: 'Popular Blogs' },
]

const CustomLabel = styled(InputLabel)(({ theme }) => ({
  fontSize: '16px',
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontWeight: 400,
  color: '#4B465C',
}))

export default function AddBlog() {
  const [isPending, startTransition] = useTransition()
  const [detectChange, setDetectChange] = useState(true)
  const [alertMsg, setAlertMsg] = useState({ type: '', message: '' })
  const [values, setValues] = useState({ title: '', category: '' })
  const [editorText, setEditorText] = useState('')
  const [pages, setPages] = useState({ page: 1, limit: 12 })
  const [blogs, setBlogs] = useState([] as any)

  const handleEditorValue = (val: any) => {
    setEditorText(val)
  }

  const getAllBlogs = async () => {
    try {
      startTransition(async () => {
        const res = await getBlogsRequest(pages)
        const data = res?.data
        if (data?.status === 200) {
          setBlogs(data?.data)
        } else {
          setAlertMsg({ type: 'error', message: data?.message })
          setTimeout(() => {
            setAlertMsg({ type: '', message: '' })
          }, 3000)
          console.log('response about maldives', res)
        }
        console.log('response ', res)
      })
    } catch (error: any) {
      console.log('error ', error)
    }
  }

  const submitData = async () => {
    try {
      startTransition(async () => {
        const res = await addBlogRequest({
          ...values,
          description: editorText,
        })
        const data = res?.data
        if (data?.status === 201) {
          getAllBlogs()
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
      // setDetectChange(false)
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
    getAllBlogs()
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
        <HeadingWraper
          title="Blogs"
          detectChange={detectChange}
          handleSave={submitData}
        />
        <Box sx={{ mt: 3, pb: 5 }}>
          <Box sx={{ mb: 3 }}>
            <TextFieldWraper
              label="Blog Title"
              name="title"
              type="text"
              placeholder="Enter blog title."
              value={values?.title}
              onChange={(e: any) =>
                setValues({ ...values, title: e.target.value })
              }
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <CustomLabel
              id="demo-simple-select-label"
              sx={{ mb: '7px', fontFamily: 'Public Sans' }}
            >
              Blog Category
            </CustomLabel>
            <CustomSelect
              placeholder="Enter blog category."
              value={values?.category}
              options={options}
              name="category"
              onChange={(e: any) =>
                setValues({ ...values, category: e.target.value })
              }
            />
          </Box>
          {/* <ReactQuillEditor
          height={400}
          handleEditorValue={handleEditorValue}
          value={value}
        /> */}
          <JoditTextEditor
            handleEditorValue={(val: any) => handleEditorValue(val)}
            value={editorText}
          />
        </Box>
      </CustomCard>
      <CustomCard sx={{ padding: '40px !important', mt: 2 }}>
        <Typography
          sx={{
            fontSize: '35px',
            textAlign: 'center',
            color: 'var(--white)',
            mt: '60px',
          }}
        >
          ALL Uploaded Blogs
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            mt: { xs: '30px', md: '40px' },
            gap: { xs: '10px', md: '20px' },
            px: 2.5,
          }}
        >
          {blogs.map((blogItem: any, index: number) => (
            <Box
              key={index}
              component={Link}
              href={`blogs/${encodeURIComponent(blogItem.title)}`}
              sx={{
                width: { xs: 'calc(100%)', md: 'calc(33.3% - 14px)' },
                borderRadius: '20px',
                bgcolor: 'var(--brown)',
                boxSizing: 'border-box',
                boxShadow: 'rgba(0, 0, 0, 0.05) 0px .5px 4px 0px',
                textDecoration: 'none',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  borderRadius: '20px 20px 0 0px',
                  height: '250px',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={blogItem?.image || blog}
                  alt="blog"
                  width={200}
                  height={250}
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: '100%',
                  height: '250px',
                  bgcolor: 'rgba(150,127,93,0.5)',
                  position: 'absolute',
                  top: '0',
                  // left: { xs: '0', md: '240.5px' },
                  borderRadius: '20px 20px 0 0',
                }}
              />
              <Box
                sx={{
                  // mt: '20px',
                  color: 'white',
                  bgcolor: 'var(--brown)',
                  pb: '20px',
                  px: { xs: '20px', md: '20px' },
                  borderRadius: '0 0 20px 20px ',
                }}
              >
                <Typography sx={{ fontSize: '20px', mt: '20px' }}>
                  {blogItem.title}
                </Typography>

                <Typography sx={{ fontSize: '16px', mt: '20px' }}>
                  {blogItem?.category}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </CustomCard>
    </>
  )
}
