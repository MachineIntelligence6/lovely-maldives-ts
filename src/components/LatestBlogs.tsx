/* eslint-disable react/no-array-index-key */
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import blog from '../../public/Images/landingTree.jpg'
import article from '../../public/Images/main.jpg'

export const latestBlog = [
  {
    img: blog,
    title: 'Luxury Resorts',
    description:
      'Seyta Opens Dhunthari Resort & Spain the beautiful islands of the Maldives',
    date: 'February 12, 2024',
    isoverlay: false,
    isQuickRead: true,
    slug: 'luxury-resorts-1',
  },
  {
    img: article,
    title: 'Luxury Resorts',
    description:
      'Seyta Opens Dhunthari Resort & Spain the beautiful islands of the Maldives',
    date: 'February 12, 2024',
    isoverlay: true,
    isQuickRead: true,
    slug: 'luxury-resorts-2',
  },
  {
    img: blog,
    title: 'Luxury Resorts',
    description:
      'Seyta Opens Dhunthari Resort & Spain the beautiful islands of the Maldives',
    date: 'February 12, 2024',
    isoverlay: false,
    isQuickRead: true,
    slug: 'luxury-resorts-3',
  },
  {
    img: article,
    title: 'Luxury Resorts',
    description:
      'Seyta Opens Dhunthari Resort & Spain the beautiful islands of the Maldives',
    date: 'February 12, 2024',
    isoverlay: false,
    isQuickRead: true,
    slug: 'luxury-resorts-4',
  },
]

// function OverlayImageBlogCard() {
//   return (
//     <Grid
//       item
//       xs={4}
//       sm={4}
//       md={6}
//       sx={{
//         borderRadius: '20px',
//         mt: '60px',
//         position: 'relative',
//         height: { xs: '582px', md: 'auto' },
//       }}
//     >
//       <Image
//         src={latest.img}
//         alt="blog"
//         // className="latestImg"
//         style={{
//           width: '100%',
//           borderRadius: '20px',
//           height: '100%',
//           objectFit: 'cover',
//         }}
//       />
//       <Box
//         sx={{
//           width: { xs: '90.5%', md: '94%' },
//           height: '100%',
//           backgroundColor: 'rgba(150, 127, 93, 0.5)',
//           position: 'absolute',
//           top: '0',
//           zIndex: 1,
//           borderRadius: '20px !important',
//         }}
//       />
//       <Box
//         sx={{
//           width: { xs: '90%', md: '550px' },
//           mt: '20px',
//           color: 'white',
//           position: 'absolute',
//           top: '59%',
//           left: '10%',
//           zIndex: 99,
//         }}
//       >
//         <Typography sx={{ fontSize: '16px', mt: '20px' }}>
//           {latest.title}
//         </Typography>
//         <Typography sx={{ fontSize: '24px', mt: '20px' }}>
//           {latest.description}
//         </Typography>
//         <Typography sx={{ fontSize: '16px', mt: '20px' }}>
//           {latest.date}
//         </Typography>
//       </Box>
//     </Grid>
//   )
// }
export default function LatestBlogs() {
  return (
    <Box sx={{ pt: { md: '0px', xs: '0px' }, px: 0 }}>
      <Box>
        <Typography
          sx={{
            fontSize: '35px',
            // textAlign: 'center',
            color: 'var(--white)',
            mt: { xs: 0, md: '100px' },
            textTransform: 'uppercase',
            px: '20px',
          }}
        >
          Latest News
        </Typography>
        <Box
          sx={{
            width: { xs: '100%', md: '100%' },
            height: { xs: '350px', md: '450px' },
            bgcolor: 'var(--brown)',
            // position: { xs: 'relative', md: 'unset' },
            borderRadius: { xs: 0, md: '20px' },
            display: { xs: 'block', md: 'flex' },
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto',
            mt: '24px',
            position: 'relative',
          }}
        >
          <Box
            component={Image}
            src={blog}
            alt="blog"
            sx={{
              height: '100%',
              objectFit: 'cover',
              width: '100%',
              borderRadius: { xs: '0', md: '20px 0px 0px 20px' },
            }}
          />
          <Box
            sx={{
              width: { xs: '100%', md: '60%' },
              height: '100%',
              bgcolor: 'rgba(150,127,93,0.5)',
              position: 'absolute',
              top: 0,
              left: 0,
              borderRadius: { xs: 0, md: '20px' },
            }}
          />
          {/* <Box
            sx={{
              display: { xs: 'block', md: 'none' },
              bgcolor: 'rgba(0,0,0,0.5)',
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              borderRadius: '20px 20px 20px 20px',
            }}
          /> */}
          <Box
            sx={{
              position: { xs: 'absolute', md: 'unset' },
              top: '60%',
              color: 'white',
              borderRadius: { xs: 0, md: '0 10px 10px 0' },
              width: { xs: '100%', md: '80%' },
            }}
          >
            <Typography
              sx={{
                fontSize: '24px',
                color: 'white',
                textAlign: { xs: 'center', md: 'left' },
                ml: { xs: '0', md: '50px' },
              }}
            >
              Seyta Opens Dhunthari Resort& Spa Long in the Maldives
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            mt: { xs: '30px', md: '40px' },
            gap: { xs: '10px', md: '20px' },
          }}
        >
          {latestBlog.map((latest, index) => (
            <Box
              key={index}
              component={Link}
              href={`/blogs/${latest.slug}`}
              sx={{
                width: { xs: 'calc(100%)', md: 'calc(50% - 20px)' },
                borderRadius: '20px',
                bgcolor: 'var(--brown)',
                boxSizing: 'border-box',
                boxShadow: 'rgba(0, 0, 0, 0.05) 0px .5px 4px 0px',
                textDecoration: 'none',
                position: 'relative',
              }}
            >
              <Box
                component={Image}
                src={latest.img}
                alt="blog"
                sx={{
                  width: '100%',
                  borderRadius: { xs: 0, md: '20px 20px 0 0px' },
                  height: '300px',
                  objectFit: 'cover',
                }}
              />
              <Box
                sx={{
                  width: '100%',
                  height: '300px',
                  bgcolor: 'rgba(150,127,93,0.5)',
                  position: 'absolute',
                  top: '0',
                  // left: { xs: '0', md: '240.5px' },
                  borderRadius: { xs: 0, md: '20px 20px 0 0' },
                }}
              />
              <Box
                sx={{
                  // mt: '20px',
                  bgcolor: 'var(--brown)',
                  color: 'white',
                  pb: '20px',
                  px: { xs: '20px', md: '20px' },
                  borderRadius: { xs: 0, md: '0  0 20px 20px ' },
                }}
              >
                <Typography
                  sx={{ fontSize: { xs: '14px', md: '16px' }, pt: '20px' }}
                >
                  {latest.title}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: '20px', md: '24px' }, mt: '20px' }}
                >
                  {latest.description}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: '14px', md: '16px' }, mt: '20px' }}
                >
                  {latest.date}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
