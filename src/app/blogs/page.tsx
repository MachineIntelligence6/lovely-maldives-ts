/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */

'use client'

import { useState, useEffect, useTransition } from 'react'
import { Container, Box, Typography, Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import BlogHeader from '@/components/BlogHeader'
import Footer from '@/components/Footer'

import Header from '@/components/Header'
import MailBox from '@/components/MailBox'
import LatestBlogs from '@/components/LatestBlogs'
import PopularBlogs from '@/components/PopularBlogs'
import { getBlogsSectionRequest } from '@/utils/api-requests/blogcategs-request'
import { getBlogsRequest } from '@/utils/api-requests/blogs.request'
import CustomLoader from '@/admin-components/common/CustomLoader'
import useApiStore from '@/stores/themeApiStore'
import blog from '../../../public/Images/landingTree.jpg'
import articleImage from '../../../public/Images/main.jpg'

export const articles: any[] = [
  {
    image: blog,
    title:
      'Seyta Opens Dhunthari Resort & Spa in the beautiful islands of the Maldives.',
    date: '04 Feb 2024',
    slug: 'seyta-opens-dhunthari-resort',
  },
  {
    image: articleImage,
    title:
      'Seyta Opens Dhunthari Resort & Spa in the beautiful islands of the Maldives.',
    date: '04 Feb 2024',
    slug: 'seyta-opens-dhunthari-resort-1',
  },
  {
    image: blog,
    title:
      'Seyta Opens Dhunthari Resort & Spa in the beautiful islands of the Maldives.',
    date: '04 Feb 2024',
    slug: 'seyta-opens-dhunthari-resort-2',
  },
  {
    image: blog,
    title:
      'Seyta Opens Dhunthari Resort & Spa in the beautiful islands of the Maldives.',
    date: '04 Feb 2024',
    slug: 'seyta-opens-dhunthari-resort-3',
  },
  {
    image: articleImage,
    title:
      'Seyta Opens Dhunthari Resort & Spa in the beautiful islands of the Maldives.',
    date: '04 Feb 2024',
    slug: 'seyta-opens-dhunthari-resort-4',
  },
  {
    image: blog,
    title:
      'Seyta Opens Dhunthari Resort & Spa in the beautiful islands of the Maldives.',
    date: '04 Feb 2024',
    slug: 'seyta-opens-dhunthari-resort-5',
  },
  {
    image: blog,
    title:
      'Seyta Opens Dhunthari Resort & Spa in the beautiful islands of the Maldives.',
    date: '04 Feb 2024',
    slug: 'seyta-opens-dhunthari-resort-6',
  },
  {
    image: articleImage,
    title:
      'Seyta Opens Dhunthari Resort & Spa in the beautiful islands of the Maldives.',
    date: '04 Feb 2024',
    slug: 'seyta-opens-dhunthari-resort-7',
  },
  {
    image: blog,
    title:
      'Seyta Opens Dhunthari Resort & Spa in the beautiful islands of the Maldives.',
    date: '04 Feb 2024',
    slug: 'seyta-opens-dhunthari-resort-8',
  },
]

export default function Page() {
  const [isPending, startTransition] = useTransition()
  const [allBlogs, setAllBlogs] = useState([] as any)
  const [allArticles, setAllArticles] = useState([] as any)
  const [totalBlogs, setTotalBlogs] = useState(null as any)
  const [pages, setPages] = useState({ page: 1, limit: 3 })
  const [latestBlogs, setLatestBlogs] = useState({ category: '', blogs: [] })
  const [popularBlogs, setPopularBlogs] = useState({ category: '', blogs: [] })

  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  console.log('all blogs ', allBlogs)

  const { themeData, error, fetchData } = useApiStore((state: any) => ({
    themeData: state.themeData,
    error: state.error,
    fetchData: state.fetchData,
  }))

  const getSections = () => {
    try {
      startTransition(async () => {
        const res = await getBlogsSectionRequest(category ?? '')
        const data = res?.data
        if (data?.status === 200) {
          setAllBlogs(data?.data)
          data?.data?.map((da: any) => {
            if (da?.category?.toLowerCase() === 'latest blogs') {
              if (da?.blogs?.length > 0) {
                setLatestBlogs(da)
              } else {
                setLatestBlogs({ ...da, blogs: [] })
              }
            } else if (da?.category?.toLowerCase() === 'popular') {
              if (da?.blogs?.length > 0) {
                setPopularBlogs(da)
              } else {
                setPopularBlogs({ ...da, blogs: [] })
              }
            }
          })
        }
      })
    } catch (err: any) {
      console.log('err ', err)
      throw new Error(err)
    }
  }

  const getAllBlogs = async () => {
    try {
      startTransition(async () => {
        const res = await getBlogsRequest(pages, category ?? '')
        const data = res?.data
        if (data?.status === 200) {
          const newArticles = data?.data
          setAllArticles([...allArticles, ...newArticles])
          setTotalBlogs(data?.totalBlogs)
        }
      })
    } catch (err: any) {
      console.log('error ', err)
      throw new Error(err)
    }
  }

  useEffect(() => {
    getSections()
  }, [])

  useEffect(() => {
    getAllBlogs()
  }, [pages?.page])

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Box sx={{ pt: { md: '180px', xs: '0px' }, bgcolor: themeData?.bgColor }}>
      {isPending && <CustomLoader />}
      <Header />
      <BlogHeader />
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
        {latestBlogs?.blogs?.length > 0 && (
          <LatestBlogs blogs={allBlogs?.[0]} />
        )}
        {popularBlogs?.blogs?.length > 0 && (
          <PopularBlogs blogs={allBlogs?.[1]} />
        )}
        <Box>
          <Typography
            sx={{
              fontSize: '35px',
              textAlign: 'center',
              color: 'var(--white)',
              mt: '60px',
            }}
          >
            ALL ARTICLES
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
            {allArticles?.length > 0 &&
              allArticles?.map((blogItem: any, index: number) => (
                <Box
                  key={blogItem?.id}
                  component={Link}
                  href={`blogs/${blogItem.title}`}
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
                    <Typography sx={{ fontSize: '20px', mt: '20px' }}>
                      {blogItem.title}
                    </Typography>

                    <Typography sx={{ fontSize: '16px', mt: '20px' }}>
                      {blogItem.date || '12 February, 2024'}
                    </Typography>
                  </Box>
                </Box>
              ))}
          </Box>
          {totalBlogs === allArticles.length ? (
            ''
          ) : (
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
        </Box>
        {allBlogs?.[2] && (
          <Box>
            <Typography
              sx={{
                fontSize: '35px',
                textAlign: 'center',
                color: 'var(--white)',
                mt: '60px',
              }}
            >
              {allBlogs?.[2]?.category}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                mt: { xs: '30px', md: '40px' },
                px: { xs: 2.5, md: 0 },
              }}
            >
              {allBlogs?.[2]?.blogs?.map((blogItem: any, index: number) => (
                <Box
                  key={blogItem?.id}
                  sx={{
                    width: { xs: '100%', md: '50%' },
                    borderBottom: '1px solid lightgray',
                    px: '0px',
                    mb: 2,
                    pb: 2,
                  }}
                >
                  <Box
                    component={Link}
                    href={`blogs/${encodeURIComponent(blogItem.title)}`}
                    sx={{
                      textDecoration: 'none',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      // position: 'relative',
                    }}
                  >
                    <Box sx={{ position: 'relative', width: '200px' }}>
                      <Box
                        sx={{
                          width: '100%',
                          maxWidth: '200px',
                          borderRadius: '20px',
                          aspectRatio: '1.3',
                          // height: { xs: '90px', md: '132px' },
                          objectFit: 'cover',
                          backgroundPosition: '100%',
                          backgroundSize: 'cover',
                          backgroundImage: `url(${blogItem?.coverImage})`,
                        }}
                      />
                      <Box
                        sx={{
                          width: '100%',
                          // height: { xs: '90px', md: '132px' },
                          bgcolor: 'rgba(150,127,93,0.5)',
                          position: 'absolute',
                          top: { xs: '0', md: '0px' },
                          left: 0,
                          bottom: 0,
                          borderRadius: '20px',
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        mt: '20px',
                        color: 'var(--white)',
                        pb: '20px',
                        px: { xs: '20px', md: '20px' },
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{ fontSize: '16px', mt: '20px', fontWeight: 600 }}
                        >
                          {blogItem.title}
                        </Typography>

                        <Typography sx={{ fontSize: '16px', mt: '20px' }}>
                          {blogItem.date || '12 February, 2024'}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        )}
        <MailBox />
      </Container>
      <Footer />
    </Box>
  )
}
