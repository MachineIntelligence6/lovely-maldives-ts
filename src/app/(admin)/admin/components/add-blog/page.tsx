/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */
/* eslint-disable react-hooks/exhaustive-deps */

'use client'

import { Alert, Box, InputLabel, Stack, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { useEffect, useState, useTransition } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import EditIcon from '@mui/icons-material/Edit'
import BackupIcon from '@mui/icons-material/Backup'
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
import { uploadImgToCloudinary } from '@/utils/cloudinaryImgUpload'

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
  const [coverPhoto, setCoverPhoto] = useState(null as any)
  const [coverUrl, setCoverUrl] = useState(null as any)

  const handleEditorValue = (val: any) => {
    setEditorText(val)
  }

  const handleFileChange = async (e: any) => {
    const value = e.target.files?.[0]
    setCoverPhoto(value)

    const formData = new FormData()
    formData.append('file', value as any)
    formData.append('upload_preset', 'j8epfynh')
    const res = await uploadImgToCloudinary(formData)
    setCoverUrl(res?.secure_url)
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
        }
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
          coverImage: coverUrl,
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
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            alignItems="center"
            justifyContent="space-between"
            gap={{ xs: '10px', md: '1rem' }}
            sx={{ mb: 1 }}
          >
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

            <Box sx={{ width: '100%', mb: 2 }}>
              <CustomLabel
                id="demo-simple-select-label"
                sx={{ fontFamily: 'Public Sans', mb: '5px' }}
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
          </Stack>

          <Box sx={{ mb: 3 }}>
            <label htmlFor="bgFileInput">
              <input
                type="file"
                id="bgFileInput"
                hidden
                onChange={handleFileChange}
              />
              <Box
                sx={{
                  width: '100%',
                  minHeight: '250px',
                  maxHeight: '450px',
                  border: '1px dashed gray',
                  borderRadius: '6px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  overflow: 'hidden',
                }}
              >
                {coverPhoto || coverUrl ? (
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        right: '1rem',
                        top: '1rem',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        border: '1px solid white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        zIndex: 999,
                        bgcolor: 'rgba(0,0,0,0.6)',
                      }}
                    >
                      <EditIcon
                        sx={{
                          fontSize: '25px',
                          color: 'white',
                          cursor: 'pointer',
                        }}
                      />
                    </Box>
                    <Image
                      width={1000}
                      height={350}
                      src={coverUrl || URL.createObjectURL(coverPhoto)}
                      style={{ objectFit: 'cover' }}
                      alt="bg-img"
                    />
                  </Box>
                ) : (
                  <>
                    <BackupIcon
                      sx={{
                        fontSize: '55px',
                        color: 'var(--brown)',
                      }}
                    />
                    <Typography
                      variant="body1"
                      color="var(--brown)"
                      sx={{ mt: 2, fontSize: '18px' }}
                    >
                      Upload Blog Cover Image
                    </Typography>
                  </>
                )}
              </Box>
            </label>
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
                  src={blogItem?.coverImage || blog}
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
