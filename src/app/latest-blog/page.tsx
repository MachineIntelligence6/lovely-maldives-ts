/* eslint-disable react/no-array-index-key */
import { Box, Container, Grid, Typography } from '@mui/material'
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
  },
  {
    img: article,
    title: 'Luxury Resorts',
    discription:
      'Seyta Opens Dhunthari Resort & Spain the beautiful islands of the Maldives',
    date: 'February 12, 2024',
  },
  {
    img: blog,
    title: 'Luxury Resorts',
    discription:
      'Seyta Opens Dhunthari Resort & Spain the beautiful islands of the Maldives',
    date: 'February 12, 2024',
  },
  {
    img: article,
    title: 'Luxury Resorts',
    discription:
      'Seyta Opens Dhunthari Resort & Spain the beautiful islands of the Maldives',
    date: 'February 12, 2024',
  },
]
export default function LatestBlog({ hide }: { hide: string }) {
  return (
    <Box sx={{ pt: { md: '180px', xs: '0px' } }}>
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
            textAlign: 'center',
            color: 'var(--white)',
            mt: '60px',
          }}
        >
          LATEST
        </Typography>
        <Box
          sx={{
            width: { xs: '100%', md: '700px' },
            height: '350px',
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
            style={{ height: '350px', objectFit: 'cover' }}
          />
          <Box
            sx={{
              display: { xs: 'block', md: 'none' },
              bgcolor: 'rgba(0,0,0,0.5)',
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '350px',
              borderRadius: '20px',
            }}
          />
          <Box
            sx={{
              position: { xs: 'absolute', md: 'unset' },
              top: '60%',
              color: 'white',
              borderRadius: '0 10px 10px 0',
              width: { xs: '100%', md: '350px' },
            }}
          >
            <Typography
              sx={{ fontSize: '24px', color: 'white', textAlign: 'center' }}
            >
              Seyta Opens Dhunthari Resort& Spa Long in the Maldives
            </Typography>
          </Box>
        </Box>
        <Container>
          <Grid
            container
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{ mt: { xs: '0', md: '40px' }, overflow: 'hidden' }}
          >
            {latestBlog.map((latest, index) => (
              <Grid
                item
                xs={4}
                sm={4}
                md={4}
                key={index}
                sx={{ borderRadius: '20px', mt: '40px' }}
              >
                <Image
                  src={latest.img}
                  alt="blog"
                  className="latestImg"
                  style={{
                    borderRadius: '20px',
                    height: '200px',
                    objectFit: 'cover',
                  }}
                />
                <Box
                  sx={{
                    width: { xs: '100%', md: '300px' },
                    mt: '20px',
                    color: 'var(--white)',
                  }}
                >
                  <Typography sx={{ fontSize: '12px', mt: '20px' }}>
                    {latest.title}
                  </Typography>
                  <Typography>{latest.discription}</Typography>
                  <Typography sx={{ fontSize: '12px', mt: '20px' }}>
                    {latest.date}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
        {hide === 'none' ? '' : <Footer />}
      </Box>
    </Box>
  )
}
