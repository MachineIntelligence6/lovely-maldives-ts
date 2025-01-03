'use client'

import { Box, Button, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import CloseIcon from '@mui/icons-material/Close'
import BlogSlider from '@/components/BlogSlider'
import covImage from '../../../public/Images/collectionImg.jpg'

const BlogsWraper = (props: any) => {
  const {
    blogs,
    category,
    updateBlog,
    sectionId,
    deleteBlogSection,
    deleteBlog,
    // handleEditBlog,
  } = props
  return (
    <Box sx={{ pt: { md: '0px', xs: '0px' } }}>
      <Box>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap="1rem"
          sx={{ mt: '60px' }}
        >
          <Typography
            sx={{
              fontSize: '35px',
              textAlign: 'center',
              color: 'var(--white)',
            }}
          >
            {category}
          </Typography>
          <Stack direction="row" alignItems="center" gap="10px">
            <DeleteIcon
              sx={{
                cursor: 'pointer',
                fontSize: '35px',
                color: 'var(--red)',
                border: '1px solid var(--red)',
                p: '2px',
              }}
              onClick={() => deleteBlogSection(sectionId)}
            />
            <EditIcon
              sx={{
                cursor: 'pointer',
                fontSize: '35px',
                color: 'var(--blue)',
                border: '1px solid var(--blue)',
                p: '2px',
              }}
              onClick={() => updateBlog({ category, blogs, sectionId })}
            />
          </Stack>
        </Stack>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <BlogSlider />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            mt: { xs: '30px', md: '40px' },
            gap: { xs: '10px', md: '20px' },
            mb: { xs: '30px', md: '0' },
            px: 2.5,
          }}
        >
          {blogs?.map((blog: any, index: number) => (
            <Box
              key={index}
              component={Link}
              href={`/blogs/${blog.slug}`}
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
                  deleteBlog(blog?.id)
                }}
              >
                <CloseIcon />
              </Button>
              {/* <Button
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
                  handleEditBlog(index, blog)
                }}
              >
                <EditIcon />
              </Button> */}
              <Box
                sx={{
                  width: '100%',
                  borderRadius: '20px 20px 0 0px',
                  height: '200px',
                  objectFit: 'cover',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={blog?.coverImage || covImage}
                  alt="blog"
                  width={300}
                  height={200}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: '100%',
                  height: '200px',
                  bgcolor: 'rgba(150,127,93,0.5)',
                  position: 'absolute',
                  top: '0',
                  borderRadius: '20px 20px 0 0',
                }}
              />
              <Box
                sx={{
                  color: 'white',
                  bgcolor: 'var(--brown)',
                  pb: '20px',
                  px: { xs: '20px', md: '20px' },
                  borderRadius: '0 0 20px 20px',
                }}
              >
                <Typography sx={{ fontSize: '20px', mt: '20px' }}>
                  {blog.title}
                </Typography>
                <Typography sx={{ fontSize: '14px', mt: '20px' }}>
                  {blog.date}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default BlogsWraper
