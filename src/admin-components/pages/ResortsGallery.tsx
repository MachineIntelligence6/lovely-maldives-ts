/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { Stack } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import Image from 'next/image'
import StarRateIcon from '@mui/icons-material/StarRate'
import { motion } from 'framer-motion'
import BoltIcon from '@mui/icons-material/Bolt'
import TextFieldWraper from '@/admin-components/items/TextfieldWraper'
import collectionImg from '/public/Images/collectionImg.jpg'

export default function ResortsGallery(props: any) {
  const {
    title,
    handleChange,
    handleShowModal,
    hotels,
    pages,
    isFullyLoaded,
    loadMore,
  } = props
  console.log('hotels are ', hotels)
  return (
    <Box sx={{ mb: '40px' }}>
      <TextFieldWraper
        label="Title"
        placeholder="Enter Title."
        value={title}
        name="title"
        onChange={handleChange}
      />
      <Stack direction="row" justifyContent="end">
        <Button
          variant="outlined"
          sx={{
            border: '1px solid var(--brown)',
            mt: 1,
            textTransform: 'capitalize',
          }}
          onClick={handleShowModal}
          // disabled={hotels?.length >= 5}
        >
          <Stack direction="row" alignItems="center" gap="10px">
            <AddIcon sx={{ color: 'var(--brown)', fontSize: '22px' }} />
            <Typography variant="body1" color="var(--brown)">
              Add Hotel
            </Typography>
          </Stack>
        </Button>
      </Stack>
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        sx={{ mt: { xs: '30px', md: '40px' } }}
      >
        {hotels?.length > 0 &&
          hotels.map((item: any) => (
            <Grid item xs={12} sm={6} md={6} lg={4} key={item.id}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                sx={{ width: '100%', position: 'relative' }}
              >
                <Box
                  //   component={Link}
                  //   href={`/resorts/${item.slug}`}
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

      {pages?.totalGalleryImages > hotels?.length && (
        <Box
          sx={{
            textAlign: 'center',
            mt: 4,
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
    </Box>
  )
}
