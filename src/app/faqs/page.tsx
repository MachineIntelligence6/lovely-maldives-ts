import { Container, Box, Typography } from '@mui/material'

import Header from '@/components/Header'
import BreadCrumb from '@/components/BreadCrumb'
import Accordion from '@/components/Accordion'
import Footer from '@/components/Footer'
import MailBox from '@/components/MailBox'

export default function page() {
  return (
    <>
      <Header />
      <Container
        sx={{
          maxWidth: '100% !important',
          px: { xs: '24px', md: '120px' },
          mt: '120px',
          color: 'var(--white)',
        }}
      >
        <BreadCrumb linkName="Home" linkName2="FAQs" path="/faqs" />
        <Box sx={{ mt: '60px' }}>
          <Typography>
            Our Frequently Asked Questions (FAQ) is tailor-made to assist
            tourists visiting to the Maldives and will be covering a wide range
            of questions by tourists regarding the tourist Visa, rules and
            regulations and several other areas. Our Frequently Asked Questions
            (FAQ) is tailor-made to assist tourists visiting to the Maldives and
            will be covering a wide range of questions by tourists regarding the
            tourist Visa, rules and regulations and several other areas. Our
            Frequently Asked Questions (FAQ) is tailor-made to assist tourists
            visiting to the Maldives and will be covering a wide range of
            questions by tourists regarding the tourist Visa, rules and
            regulations and several other areas.
          </Typography>
          <Box
            sx={{
              width: { xs: 'auto', md: '75%' },
              bgcolor: 'var(--brown)',
              color: 'white',
              py: 3,
              px: 2,
              borderRadius: '20px',
              mt: '60px',
            }}
          >
            <Typography sx={{ fontWeight: 600, mt: 2 }}>Categories:</Typography>
            <Typography sx={{ fontWeight: 600, mt: 2 }}>
              Visa and Arrival
            </Typography>
            <Typography sx={{ fontWeight: 600, mt: 2 }}>
              Legal Queries
            </Typography>
            <Typography sx={{ fontWeight: 600, mt: 2 }}>
              General Questions
            </Typography>
            <Typography sx={{ fontWeight: 600, mt: 2 }}>
              More Category Add from Beknd
            </Typography>
          </Box>
        </Box>
        <Accordion />
      </Container>
      <Box sx={{ width: { xs: 'auto', md: '63%' }, mx: 'auto' }}>
        <MailBox />
      </Box>
      <Footer />
    </>
  )
}
