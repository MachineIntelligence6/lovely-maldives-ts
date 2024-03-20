/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

import Image from 'next/image'
import StarRateIcon from '@mui/icons-material/StarRate'
import { motion } from 'framer-motion'
import BoltIcon from '@mui/icons-material/Bolt'
import Link from 'next/link'
import { Resort, resorts } from '@/data'
import collectionImg from '../../public/Images/collectionImg.jpg'

export default function ResortsGallery() {
  const [resortsData, setResortsData]: [
    Resort[],
    Dispatch<SetStateAction<Resort[]>>,
  ] = useState<Resort[]>([...resorts])
  const [isFullyLoaded, setIsFullyLoaded] = useState(false)

  const loadMore = () => {
    setResortsData([...resortsData, ...resorts])
    setIsFullyLoaded(true)
  }
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
          {resortsData.map((item) => (
            <Grid item xs={12} sm={6} md={6} lg={4} key={item.id}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ width: '100%' }}
              >
                <Box
                  component={Link}
                  href={`/resorts/${item.slug}`}
                  sx={{ textDecoration: 'none', position: 'relative' }}
                >
                  <Box
                    component={Image}
                    src={collectionImg}
                    alt={item.name}
                    sx={{
                      width: '100%',
                      height: { xs: '250px', md: '300px' },
                      objectFit: 'cover',
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
                        alignItems: 'center',
                        height: 'auto',
                      }}
                    >
                      <Typography sx={{ px: 4, fontSize: '20px' }}>
                        {item.name.length > 20
                          ? `${item.name.substring(0, 20)}...`
                          : item.name}
                      </Typography>
                      <BoltIcon sx={{ display: `flex` }} />
                    </Box>
                    <Box sx={{ textAlign: 'left', fontSize: '10px', px: 4 }}>
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
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
        >
          Load More
        </Button>
      </Box>
      <Box
        sx={{
          textAlign: 'center',
          mb: { xs: 6, md: 2 },
          display: isFullyLoaded ? { xs: 'block', md: 'none' } : 'none',
        }}
      >
        <Button
          title="Enquire"
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
        >
          SEND ENQUIRE
        </Button>
      </Box>
    </>
  )
}
