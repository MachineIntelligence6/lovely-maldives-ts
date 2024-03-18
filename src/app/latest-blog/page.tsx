/* eslint-disable react/no-array-index-key */
import { Box, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Image from 'next/image'
import blog from '../../../public/Images/landingTree.jpg'
import article from '../../../public/Images/main.jpg'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import BlogHeader from '../../components/BlogHeader'

export const latestBlog = [
  {
    img: blog,
    title: 'Luxury Resorts',
    discription:
      'Seyta Opens Dhunthari Resort & Spain the beautiful islands of the Maldives',
    date: 'February 12, 2024',
    isoverlay: false,
  },
  {
    img: article,
    title: 'Luxury Resorts',
    discription:
      'Seyta Opens Dhunthari Resort & Spain the beautiful islands of the Maldives',
    date: 'February 12, 2024',
    isoverlay: true,
  },
  {
    img: blog,
    title: 'Luxury Resorts',
    discription:
      'Seyta Opens Dhunthari Resort & Spain the beautiful islands of the Maldives',
    date: 'February 12, 2024',
    isoverlay: false,
  },
  {
    img: article,
    title: 'Luxury Resorts',
    discription:
      'Seyta Opens Dhunthari Resort & Spain the beautiful islands of the Maldives',
    date: 'February 12, 2024',
    isoverlay: false,
  },
]

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  // padding: theme.spacing(1),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
}))
export default function LatestBlog({ hide }: { hide: string }) {
  return (
    <Box sx={{ pt: { md: '0px', xs: '0px' }, px: 0 }}>
      {hide === 'none' ? (
        ''
      ) : (
        <>
          <Header />
          <BlogHeader />
        </>
      )}
      <Box>
        <Typography
          sx={{
            fontSize: '35px',
            // textAlign: 'center',
            color: 'var(--white)',
            mt: '60px',
          }}
        >
          LATEST
        </Typography>
        <Box
          sx={{
            width: { xs: '100%', md: '100%' },
            height: '400px',
            bgcolor: 'var(--brown)',
            position: { xs: 'relative', md: 'unset' },
            borderRadius: '20px',
            display: { xs: 'block', md: 'flex' },
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto',
            mt: '60px',
          }}
        >
          <Image
            src={blog}
            alt="blog"
            className="blogImg"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Box
            sx={{
              display: { xs: 'block', md: 'none' },
              bgcolor: 'rgba(0,0,0,0.5)',
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '400px',
              borderRadius: '20px 20px 20px 20px',
            }}
          />
          <Box
            sx={{
              position: { xs: 'absolute', md: 'unset' },
              top: '60%',
              color: 'white',
              borderRadius: '0 10px 10px 0',
              width: { xs: '100%', md: '30%' },
            }}
          >
            <Typography
              sx={{
                fontSize: '24px',
                color: 'white',
                textAlign: { xs: 'center', md: 'left' },
                width: { xs: '350px', md: '250px' },
                ml: { xs: '0', md: '50px' },
              }}
            >
              Seyta Opens Dhunthari Resort& Spa Long in the Maldives
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: '100%' }}>
          <Grid
            container
            columns={{ xs: 4, sm: 8, md: 12 }}
            columnSpacing={{ xs: 1, sm: 2, md: 5 }}
            sx={{
              mt: { xs: '0', md: '40px' },
              overFlow: 'hidden',
            }}
          >
            {latestBlog.map((latest, index) => {
              if (latest.isoverlay) {
                return (
                  <Grid
                    xs={4}
                    sm={4}
                    md={6}
                    key={index}
                    sx={{
                      borderRadius: '20px',
                      mt: '60px',
                      // position: 'relative',
                      height: { xs: '582px', md: 'auto' },
                    }}
                  >
                    <Item
                      sx={{
                        borderRadius: '20px',
                        position: 'relative',
                        height: '100%',
                      }}
                    >
                      <Image
                        src={latest.img}
                        alt="blog"
                        // className="latestImg"
                        style={{
                          width: '100%',
                          borderRadius: '20px',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                      <Box
                        sx={{
                          width: { xs: '90.5%', md: '100%' },
                          height: '100%',
                          backgroundColor: 'rgba(150, 127, 93, 0.5)',
                          position: 'absolute',
                          top: '0',
                          zIndex: 1,
                          borderRadius: '20px',
                        }}
                      />
                      <Box
                        sx={{
                          width: { xs: '90%', md: '100%' },
                          mt: '20px',
                          color: 'white',
                          position: 'absolute',
                          top: '50%',
                          // left: '10%',
                          zIndex: 99,
                        }}
                      >
                        <Typography sx={{ fontSize: '16px', mt: '20px' }}>
                          {latest.title}
                        </Typography>
                        <Typography sx={{ fontSize: '24px', mt: '20px' }}>
                          {latest.discription}
                        </Typography>
                        <Typography sx={{ fontSize: '16px', mt: '20px' }}>
                          {latest.date}
                        </Typography>
                      </Box>
                    </Item>
                  </Grid>
                )
              }
              return (
                <Grid
                  xs={4}
                  sm={4}
                  md={6}
                  key={index}
                  sx={{ borderRadius: '20px', bgcolor: 'white', mt: '60px' }}
                >
                  <Item sx={{ borderRadius: '20px' }}>
                    <Image
                      src={latest.img}
                      alt="blog"
                      // className="latestImg"
                      style={{
                        width: '100%',
                        borderRadius: '20px 20px 0 0px',
                        height: '300px',
                        objectFit: 'cover',
                      }}
                    />
                    <Box
                      sx={{
                        width: { xs: '100%', md: '100%' },
                        mt: '20px',
                        color: 'var(--white)',
                        pb: '20px',
                      }}
                    >
                      <Typography sx={{ fontSize: '16px', mt: '20px' }}>
                        {latest.title}
                      </Typography>
                      <Typography sx={{ fontSize: '24px', mt: '20px' }}>
                        {latest.discription}
                      </Typography>
                      <Typography sx={{ fontSize: '16px', mt: '20px' }}>
                        {latest.date}
                      </Typography>
                    </Box>
                  </Item>
                </Grid>
              )
            })}
          </Grid>
        </Box>
        {hide === 'none' ? '' : <Footer />}
      </Box>
    </Box>
  )
}
