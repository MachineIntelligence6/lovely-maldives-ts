import Link from 'next/link'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import Typography from '@mui/material/Typography'

import Box from '@mui/system/Box'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import apiClient from '@/services/apiClient'

const Footer = dynamic(() => import('@/components/Footer'))
const SidePalmTree = dynamic(() => import('@/components/SidePalmTree'))
const OurCollection = dynamic(() => import('@/components/OurCollection'))
const Explore = dynamic(() => import('@/components/Explore'))
const About = dynamic(() => import('@/components/About'))
const TopBrands = dynamic(() => import('@/components/TopBrands'))
const Banner = dynamic(() => import('@/components/Banner'))
const OurServices = dynamic(() => import('@/components/OurServices'))

export const runtime = 'edge'

export const getHomeData = async () => {
  try {
    const response = await apiClient.get('/home')
    console.log('Response data is =>>> ', response.data)
    return response.data
  } catch (error: any) {
    console.error('Failed to fetch home data:', error?.message)
    throw new Error(error)
  }
}

export default async function Home() {
  const data = await getHomeData()
  if (!data || !data.data) {
    throw new Error('Invalid data structure')
  }
  const aboutMaldives = data?.data?.aboutMaldivesShort

  return (
    <>
      <Header headerData={data?.data?.header?.[0]} />
      <Banner bannerData={data?.data} />
      <Box
        sx={{
          position: 'relative',
          paddingTop: '10px',
          width: '100%',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            mx: 'auto',
            mt: { xs: '60px', md: '120px' },
            zIndex: 1,
            color: 'var(--white)',
            px: { xs: '20px', md: '0px' },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: 'var(--white)',
              textAlign: 'center',
              fontSize: { xs: '22px', md: '30px' },
              fontWeight: 400,
            }}
          >
            {aboutMaldives?.title}
          </Typography>
          <Typography
            component="div"
            variant="body1"
            sx={{
              textAlign: 'justify',
              fontSize: { xs: '18px', md: '22px' },
              fontWeight: '200',
              mt: { xs: '30px', md: '60px' },
              width: { xs: '100%', md: '750px' },
              mx: 'auto',
              fontFamily: 'century-gothic',
            }}
            dangerouslySetInnerHTML={{
              __html: aboutMaldives?.[0]?.description,
            }}
          >
            {/* Maldives is a small country located in the Indian Ocean consisting
            of 1250 islands and 62 atolls. Lorem ipsum Lorem ipsum dolor sit
            amet, Maldives is a small country located in the Indian Ocean
            consisting of 1250 island sand 62 at olls. */}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mt: { xs: '30px', md: '60px' },
              fontWeight: 400,
            }}
          >
            <Link
              href="/"
              className="readmore"
              style={{
                paddingTop: '5px',
                textDecoration: 'none',
                color: 'var(--white)',
                fontWeight: 'bold',
              }}
            >
              Read More
            </Link>
            <KeyboardArrowRightIcon
              sx={{
                fontSize: { xs: '24px', md: '30px' },
                fontWeight: 'bold',
                mt: '4px',
              }}
            />
          </Box>
        </Box>
        <SidePalmTree />
        <OurServices services={data?.data?.services} />
      </Box>
      <About data={data?.data?.aboutUsShort?.[0]} />
      <Explore wonders={data?.data?.wonders} />
      <OurCollection
        heading="Our Collection"
        button="block"
        iconShow="none"
        radius="0"
        bottomradius="0"
        collections={data?.data?.collections}
      />
      <TopBrands
        brands={data?.data?.brands}
        socialLinkSection={data?.data?.socialLinkSection?.[0]}
      />
      <Footer footerData={data?.data?.footer?.[0]} />
    </>
  )
}
