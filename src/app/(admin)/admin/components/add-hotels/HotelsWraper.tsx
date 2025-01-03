'use client'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import Image from 'next/image'
import StarRateIcon from '@mui/icons-material/StarRate'
import { motion } from 'framer-motion'
import BoltIcon from '@mui/icons-material/Bolt'
import Link from 'next/link'
import CloseIcon from '@mui/icons-material/Close'
import EditIcon from '@mui/icons-material/Edit'
import { Button } from '@mui/material'

const HotelsWraper = (props: any) => {
  const { hotels, deleteHotel, handleShowEditHotelModal } = props
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '22px', md: '30px' },
          color: 'var(--black)',

          textTransform: 'capitalize',
        }}
      >
        All Uploaded Hotels
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        sx={{ mt: { xs: '30px', md: '30px' } }}
      >
        {hotels?.length > 0 ? (
          hotels?.map((hotelItem: any, index: number) => (
            <Grid
              key={`hotelwraper_1_${index}`}
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
            >
              <Box
                component={motion?.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                sx={{
                  width: '100%',
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
                  onClick={() => deleteHotel(hotelItem?.id)}
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
                    handleShowEditHotelModal(hotelItem)
                  }}
                >
                  <EditIcon />
                </Button>
                <Box
                  component={Link}
                  href={`/resorts/${hotelItem?.title}`}
                  sx={{
                    textDecoration: 'none',
                    position: 'relative',
                  }}
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
                    {hotelItem?.image && (
                      <Image
                        src={hotelItem?.image}
                        alt="img"
                        width={400}
                        height={450}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    )}
                  </Box>
                  <Box
                    sx={{
                      width: { xs: '100%', md: '100%' },
                      height: { xs: '250px', md: '300px' },
                      bgcolor: 'rgba(150,127,93,0.5)',
                      position: 'absolute',
                      bottom: '105px',
                      top: 0,
                      left: 0,
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
                      // mt: '-10px',
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
                        {hotelItem?.title}
                      </Typography>
                      <BoltIcon sx={{ display: `flex` }} />
                    </Box>
                    <Box sx={{ textAlign: 'left', fontSize: '10px', px: 4 }}>
                      {[...Array(parseInt(hotelItem?.ratings, 10))].map(
                        (_: any, ind: number) => (
                          <StarRateIcon key={`_${index}_${ind}`} />
                        )
                      )}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))
        ) : (
          <Typography
            variant="body1"
            color="initial"
            sx={{
              fontSize: '20px',
              color: 'gray',
              ml: 4,
            }}
          >
            No Hotel found.
          </Typography>
        )}
      </Grid>
    </Box>
  )
}

export default HotelsWraper
