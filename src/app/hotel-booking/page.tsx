import { Box, Container } from '@mui/material'
import BookingForm from '@/components/Booking-form'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Page() {
  return (
    <Box sx={{ pt: { md: '0px', xs: '0px' }, px: 0 }}>
      <Header />
      <Container
        sx={{
          maxWidth: '80%',
          px: 0,
          margin: 'auto',
          mt: { xs: '200px' },
          '@media only screen and (min-width: 1441px)': {
            maxWidth: '1030px !important',
          },
        }}
      >
        <BookingForm />
      </Container>
      <Footer />
    </Box>
  )
}
