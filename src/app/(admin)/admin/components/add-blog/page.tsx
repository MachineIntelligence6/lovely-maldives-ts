'use client'

import {
  Alert,
  Box,
  Button,
  InputLabel,
  Stack,
  Typography,
} from '@mui/material'
import styled from '@emotion/styled'
import { useEffect, useState, useTransition } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import EditIcon from '@mui/icons-material/Edit'
import BackupIcon from '@mui/icons-material/Backup'
import CloseIcon from '@mui/icons-material/Close'
import HeadingWraper from '@/admin-components/common/HeadingWraper'
import { CustomCard } from '@/admin-components/styled/CustomCard'
import TextFieldWraper from '@/admin-components/items/TextfieldWraper'
import CustomSelect from '@/admin-components/items/CustomSelect'
import {
  addBlogRequest,
  deleteBlogRequest,
  getBlogsRequest,
  updateBlogRequest,
} from '@/utils/api-requests/blogs.request'
import CustomLoader from '@/admin-components/common/CustomLoader'
import TagsField from '@/admin-components/items/TagsField'
import { uploadImgToCloudinary } from '@/utils/cloudinaryImgUpload'

const JoditTextEditor = dynamic(
  () => import('@/admin-components/common/JoditTextEditor'),
  { ssr: false }
)

const options = [
  { value: 'All Articles', label: 'All Articles' },
  { value: 'Latest Articles', label: 'Latest Articles' },
  { value: 'Popular Articles', label: 'Popular Articles' },
]

const CustomLabel = styled(InputLabel)(({ theme }) => ({
  fontSize: '16px',
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontWeight: 400,
  color: '#4B465C',
}))

function AddBlog() {
  const [isPending, startTransition] = useTransition()
  const [detectChange, setDetectChange] = useState(true)
  const [alertMsg, setAlertMsg] = useState({ type: '', message: '' })
  const [values, setValues] = useState({ title: '', category: '' })
  const [editorText, setEditorText] = useState('')
  const [pages, setPages] = useState({ page: 1, limit: 12 })
  const [metatags, setMetatags] = useState([] as string[])
  const [blogs, setBlogs] = useState([] as any)
  const [coverPhoto, setCoverPhoto] = useState(null as any)
  const [coverUrl, setCoverUrl] = useState(null as any)
  const [editingBlog, setEditingBlog] = useState(null as any)
  const [showEditBlogModal, setShowEditBlogModal] = useState(false)

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

  interface Blog {
    title: string
    category: string
    description: string
    coverImage: string
    metatags: string[]
  }

  const handleShowEditBlogModal = (selectedBlog: Blog | null = null) => {
    if (selectedBlog) {
      setValues({
        title: selectedBlog?.title,
        category: selectedBlog?.category,
      })
      setEditorText(selectedBlog?.description)
      setCoverUrl(selectedBlog?.coverImage)
      setMetatags(selectedBlog?.metatags)
    }
    setEditingBlog(selectedBlog)
    setShowEditBlogModal(!showEditBlogModal)
  }

  const handleEditBlog = async () => {
    try {
      startTransition(async () => {
        const res = await updateBlogRequest({
          ...editingBlog,
          ...values,
          description: editorText,
          coverImage: coverUrl,
          metatags,
        })
        const data = res?.data
        if (data?.status === 200) {
          await getAllBlogs()
          setEditingBlog(null)
          setCoverPhoto(null)
          setCoverUrl(null)
          setValues({ title: '', category: '' })
          setMetatags([])
          setEditorText('')
          setAlertMsg({
            type: 'success',
            message: 'Blog updated successfully.',
          })
          handleShowEditBlogModal(null)
        } else {
          setAlertMsg({
            type: 'error',
            message: data?.message || 'An error occurred, please try again.',
          })
        }
        setTimeout(() => {
          setAlertMsg({ type: '', message: '' })
        }, 3000)
      })
    } catch (error) {
      console.error('Error updating blog:', error)
      setAlertMsg({
        type: 'error',
        message: 'Error occurred while updating the blog, please try again.',
      })
      setTimeout(() => {
        setAlertMsg({ type: '', message: '' })
      }, 3000)
    }
  }

  const submitData = async () => {
    try {
      startTransition(async () => {
        const res = await addBlogRequest({
          ...values,
          description: editorText,
          coverImage: coverUrl,
          metatags,
        })
        const data = res?.data
        if (data?.status === 201) {
          getAllBlogs()
          setCoverPhoto(null)
          setValues({ title: '', category: '' })
          setMetatags([])
          setCoverUrl(null)
          setEditorText('')
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
        message: 'Error occurred while saving data, please try again.',
      })
      setTimeout(() => {
        setAlertMsg({ type: '', message: '' })
      }, 3000)
      console.log('error ', error)
    }
  }

  const handleChangeTags = (tag: any) => {
    setMetatags([...metatags, tag])
  }

  const removeTag = (ind: number) => {
    setMetatags((prevMetatags) => prevMetatags.filter((_, i) => i !== ind))
  }

  const getAllBlogs = async () => {
    try {
      startTransition(async () => {
        const res = await getBlogsRequest(pages, '')
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
      console.log('error', error)
    }
  }

  const deleteBlog = (id: string) => {
    const sure = window.confirm('Are you sure to delete the Blog?')
    if (!sure) return

    try {
      startTransition(async () => {
        const res = await deleteBlogRequest(id)
        const data = res?.data
        if (data?.status === 200) {
          await getAllBlogs()
          setAlertMsg({
            type: 'success',
            message: 'Blog deleted successfully.',
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
        message: 'Error occurred while deleting the blog, please try again.',
      })
      setTimeout(() => {
        setAlertMsg({ type: '', message: '' })
      }, 3000)
      console.error('Error deleting blog:', err)
    }
  }

  useEffect(() => {
    getAllBlogs()
  }, [])

  return (
    <>
      {blogs?.map((item: any) => {
        return (
          <Head key={item.id}>
            <title>{item.title}</title>
            <meta name="description" content={item.description} />
            <meta name="keywords" content={item.metatags.join(', ')} />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </Head>
        )
      })}
      <CustomCard sx={{ padding: '40px !important', mt: 2 }}>
        {isPending && <CustomLoader />}
        {alertMsg.message && (
          <Alert sx={{ mb: 2 }} severity={alertMsg.type as any}>
            {alertMsg.message}
          </Alert>
        )}
        <HeadingWraper
          title="Articles"
          detectChange={detectChange}
          handleSave={editingBlog !== null ? handleEditBlog : submitData}
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
              label="Article Title"
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
                Article Category
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
          <CustomLabel
            id="demo-simple-select-label"
            sx={{ mt: '7px', fontFamily: 'Public Sans' }}
          >
            Metatags
          </CustomLabel>
          <TagsField
            placeholder="Enter Tags."
            tags={metatags}
            name="subTags"
            handleChangeTags={handleChangeTags}
            removeTag={removeTag}
          />

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
                      Upload Article Cover Image
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
          ALL Uploaded Articles
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
              <Button
                sx={{
                  position: 'absolute',
                  top: '15px',
                  right: '0',
                  zIndex: '10000',
                  color: 'white',
                }}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  deleteBlog(blogItem?.id)
                }}
              >
                <CloseIcon />
              </Button>
              <Button
                sx={{
                  position: 'absolute',
                  top: '15px',
                  left: '0',
                  zIndex: '10000',
                  color: 'white',
                }}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                  handleShowEditBlogModal(blogItem)
                }}
              >
                <EditIcon />
              </Button>
              <Box
                sx={{
                  width: '100%',
                  borderRadius: '20px 20px 0 0px',
                  height: '250px',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={blogItem?.coverImage}
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

export default AddBlog
