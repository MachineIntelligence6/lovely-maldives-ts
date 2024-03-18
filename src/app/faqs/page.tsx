import { Container, Box, Typography } from '@mui/material'
// import SendIcon from '@mui/icons-material/Send'
// import Diversity2Icon from '@mui/icons-material/Diversity2'
import Header from '@/components/Header'
import BreadCrumb from '@/components/BreadCrumb'
import Footer from '@/components/Footer'
import FaqsAccordion from '@/components/Accordion'
import MailBox from '@/components/MailBox'

export default function page() {
  return (
    <Box sx={{ pt: { md: '180px', xs: '100px' } }}>
      <Header />
      <Container
        sx={{
          maxWidth: '100% !important',
          px: { xs: '24px', md: '120px' },
          color: 'var(--white)',
        }}
      >
        <BreadCrumb />
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
              bgcolor: '#E5E4E2',
              color: 'black',
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
            <Typography sx={{ fontWeight: 600, mt: 2, mb: 4 }}>
              More Category Add from Beknd
            </Typography>
          </Box>
        </Box>
        <FaqsAccordion />
        {/* <Box
          sx={{
            mt: { xs: '60px', md: '120px' },
            width: { xs: '90%', md: '55%' },
            height: { xs: '250px', md: '350px' },
            mx: 'auto',
            borderRadius: '25px',
            position: 'relative',
            bgcolor: 'var(--blue)',
            textAlign: 'center',
          }}
        >
          <Diversity2Icon
            sx={{
              color: 'white',
              mt: { xs: '7%', md: '10%' },
              fontSize: '45px',
            }}
          />
          <Typography
            sx={{
              color: 'white',
              fontSize: { xs: '16px', md: '24px' },
              fontWeight: 200,
              textAlign: 'center',
              mt: '20px',
              px: 4,
            }}
          >
            Subscribe to get the latest news and offers by Lovely Maldives
          </Typography>
          <Box>
            <TextField
              id="outlined-multiline-flexible"
              label="Enter email adress"
              multiline
              className="input"
              // maxRows={10}
              sx={{
                bgcolor: 'white',
                mt: '20px',
                borderRadius: '10px',
                width: '60%',
                position: 'relative',
              }}
            />
            <SendIcon
              sx={{
                position: 'absolute',
                top: { xs: '70%', md: '71%' },
                right: '22%',
                color: 'var(--blue)',
              }}
            />
          </Box>
        </Box> */}
      </Container>
      <Box sx={{ width: { xs: 'auto', md: '63%' }, mx: 'auto' }}>
        <MailBox />
      </Box>
      <Footer />
    </Box>
  )
}
