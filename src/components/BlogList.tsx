/* eslint-disable array-callback-return */

'use client'

import { useEffect, useTransition } from 'react'
import { Container, Box, Typography, Button, Skeleton } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import MailBox from '@/components/MailBox'
import LatestBlogs from '@/components/LatestBlogs'
import PopularBlogs from '@/components/PopularBlogs'
import { getBlogsSectionRequest } from '@/utils/api-requests/blogcategs-request'
import { getBlogsRequest } from '@/utils/api-requests/blogs.request'
import { formatCategory } from '@/utils/common'
import CustomLoader from '@/admin-components/common/CustomLoader'

const BlogList = ({
  pages,
  setPages,
  allArticles,
  setAllArticles,
  allBlogs,
  setAllBlogs,
  latestBlogs,
  setLatestBlogs,
  popularBlogs,
  setPopularBlogs,
  totalBlogs,
  setTotalBlogs,
}: any) => {
  const [isPending, startTransition] = useTransition()

  const searchParams = useSearchParams()
  const category = searchParams.get('category')?.trim()

  const getSections = () => {
    try {
      startTransition(async () => {
        const res = await getBlogsSectionRequest(category ?? '')
        const data = res?.data
        if (data?.status === 200) {
          setAllBlogs(data?.data || [])
          setTotalBlogs(data?.data?.length)
        }
      })
    } catch (err: any) {
      console.log('err ', err)
      throw new Error(err)
    }
  }

  // const getAllBlogs = async () => {
  //   try {
  //     startTransition(async () => {
  //       const res = await getBlogsRequest(pages, category ?? '')

  //       const data = res?.data

  //       if (data?.status === 200) {
  //         const newArticles = data?.data
  //         setAllArticles([...allArticles, ...newArticles])
  //         setTotalBlogs(data?.totalBlogs)
  //       }
  //     })
  //   } catch (err: any) {
  //     console.log('error ', err)
  //     throw new Error(err)
  //   }
  // }

  useEffect(() => {
    getSections()
  }, [])

  // useEffect(() => {
  //   getAllBlogs()
  // }, [pages?.page])

  return (
    <Container
      sx={{
        // maxWidth: '80%',
        mt: { xs: '180px', md: '0' },
        px: 0,
        margin: 'auto',
        '@media only screen and (min-width: 1441px)': {
          maxWidth: '1030px !important',
        },
      }}
    >
      {isPending ? (
        <CustomLoader />
      ) : (
        <>
          <Box sx={{ mt: '5rem' }}>
            {allBlogs?.length > 0 &&
              allBlogs?.map((blogs: any, ind: number) => (
                <div key={ind}>
                  {blogs?.blogs?.length > 0 && (
                    <>
                      <Typography
                        sx={{
                          fontSize: '35px',
                          textAlign: 'center',
                          color: 'var(--white)',
                          mt: '60px',
                        }}
                      >
                        {blogs?.category}
                      </Typography>

                      <Box
                        sx={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          mt: { xs: '30px' },
                          gap: { xs: '10px', md: '20px' },
                          px: 2.5,
                        }}
                      >
                        {blogs?.blogs?.length > 0 &&
                          blogs?.blogs?.map((blogItem: any, index: number) => {
                            return (
                              <Box
                                key={blogItem?.id}
                                component={Link}
                                href={`blogs/${blogItem.title}`}
                                sx={{
                                  width: {
                                    xs: 'calc(100%)',
                                    md: 'calc(33.3% - 14px)',
                                  },
                                  borderRadius: '20px',
                                  bgcolor: 'var(--brown)',
                                  boxSizing: 'border-box',
                                  boxShadow:
                                    'rgba(0, 0, 0, 0.05) 0px .5px 4px 0px',
                                  textDecoration: 'none',
                                  position: 'relative',
                                }}
                              >
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
                                    src={blogItem?.coverImage}
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
                                  <Typography
                                    sx={{ fontSize: '20px', mt: '20px' }}
                                  >
                                    {blogItem.title}
                                  </Typography>

                                  <Typography
                                    sx={{ fontSize: '16px', mt: '20px' }}
                                  >
                                    {blogItem.date || '12 February, 2024'}
                                  </Typography>
                                </Box>
                              </Box>
                            )
                          })}
                      </Box>
                    </>
                  )}
                </div>
              ))}
          </Box>

          {totalBlogs?.[1]?.length > 3 && (
            <Box sx={{ textAlign: 'center' }}>
              <Button
                sx={{
                  px: '50px',
                  py: 2,
                  mt: '60px',
                  backgroundColor: 'var(--brown)',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'var(--blue) !important',
                  },
                }}
                title="More articles"
                color="primary"
                aria-label="More articles"
                onClick={() =>
                  setPages({ ...pages, page: (pages?.page as any) + 1 })
                }
              >
                MORE ARTICLES
              </Button>
            </Box>
          )}
        </>
      )}

      <MailBox />
    </Container>
  )
}

export default BlogList
