/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { useRouter } from 'next/navigation'

import Image from 'next/image'
import StarRateIcon from '@mui/icons-material/StarRate'
import { motion } from 'framer-motion'
import BoltIcon from '@mui/icons-material/Bolt'
import Link from 'next/link'
// import { Resort, resorts } from '@/data'
import collectionImg from '../../public/Images/collectionImg.jpg'

export default function ResortsGallery(props: any) {
  const { resorts, pages, loadMore, isFullyLoaded } = props
  const router = useRouter()

  return (
    <>
      <Box sx={{ my: { xs: '40px', md: '80px' } }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '22px', md: '30px' },
            color: 'var(--white)',
            textAlign: 'center',
            mt: { xs: '60px', md: '120px' },
            textTransform: 'uppercase',
          }}
        >
          OTHER LOVELY RESORTS
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          sx={{ mt: { xs: '30px', md: '40px' } }}
        >
          {resorts?.map((item: any, index: number) => (
            <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                sx={{ width: '100%', position: 'relative', cursor: 'pointer' }}
                onClick={() =>
                  router.push(`/resorts/${encodeURIComponent(item?.title)}`)
                }
              >
                <Box
                  component={Link}
                  href={`/resorts/${item.slug}`}
                  sx={{ textDecoration: 'none', position: 'relative' }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: { xs: '250px', md: '300px' },
                      objectFit: 'cover',
                      overflow: 'hidden',
                      borderRadius: {
                        xs: '0px',
                        md: `20px 20px 0px 0px`,
                      },
                    }}
                  >
                    <Image
                      src={item?.image || collectionImg}
                      alt="image"
                      width={400}
                      height={500}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      width: { xs: '100%', md: '100%' },
                      height: { xs: '250px', md: '300px' },
                      bgcolor: 'rgba(150,127,93,0.5)',
                      position: 'absolute',
                      bottom: '110px',
                      top: 0,
                      right: 0,
                      left: { xs: 0, md: '0px' },
                      borderRadius: {
                        xs: '0px',
                        md: `20px 20px 0px 0px`,
                      },
                    }}
                  />
                  <Box
                    component={motion.div}
                    sx={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      color: 'white',
                      fontSize: '12px',
                      fontWeight: '200',
                      zIndex: '99',
                      gap: 1,
                      py: '24px',
                      bgcolor: 'var(--darkBrown)',
                      borderRadius: { xs: '0px', md: '0px 0px 20px 20px' },
                      mt: '-10px',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: 'auto',
                        px: 4,
                      }}
                    >
                      <Typography sx={{ fontSize: '20px' }}>
                        {item.title.length > 20
                          ? `${item.title.substring(0, 20)}...`
                          : item.title}
                      </Typography>
                      <BoltIcon sx={{ display: `flex` }} />
                    </Box>
                    <Box sx={{ textAlign: 'left', fontSize: '10px', px: 4 }}>
                      {[...Array(parseInt(item?.ratings, 10))].map(
                        (_: any, ind: number) => (
                          <StarRateIcon key={`_${index}_${ind}`} />
                        )
                      )}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      {pages?.totalGalleryImages > resorts?.length && (
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 6, md: 2 },
            display: isFullyLoaded ? 'none' : 'block',
          }}
        >
          <Button
            sx={{
              bgcolor: 'var(--brown)',
              color: 'white',
              px: { xs: '12px', md: '16px' },
              py: { xs: '6px', md: '8px' },
              textAlign: 'center',
              fontSize: '18px',
              '&:hover': {
                backgroundColor: 'var(--blue) !important',
              },
            }}
            onClick={loadMore}
            title="Load more resorts"
            aria-label="Load more resorts"
          >
            Load More
          </Button>
        </Box>
      )}
      <Box
        sx={{
          textAlign: 'center',
          mb: { xs: 6, md: 2 },
          display: isFullyLoaded ? { xs: 'block', md: 'none' } : 'none',
        }}
      >
        <Button
          sx={{
            color: 'white',
            bgcolor: 'var(--brown)',
            px: 3,
            py: 1.5,
            fontSize: '1.2rem !important',
            '&:hover': {
              backgroundColor: 'var(--blue) !important',
            },
            textTransform: 'uppercase',
          }}
          title="Enquire"
          aria-label="Enquire"
        >
          SEND ENQUIRE
        </Button>
      </Box>
    </>
  )
}
