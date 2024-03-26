'use client'

import { Container, Box, Typography, TextField, Button } from '@mui/material'

export default function ContactForm() {
  return (
    <Container
      sx={{
        maxWidth: { xs: '100%', md: '80%' },
        px: { xs: '20px', md: '0' },
        margin: { xs: '0', md: 'auto' },
        '@media only screen and (min-width: 1441px)': {
          maxWidth: '1030px !important',
        },
        color: 'var(--white)',
        mt: '60px',
      }}
    >
      <Box sx={{ maxWidth: '100%', mx: 'auto', mt: '60px' }}>
        <Typography
          sx={{ fontSize: { xs: '22px', md: '30px' }, fontWeight: 400 }}
        >
          Send an Email
        </Typography>
        <Box
          sx={{
            display: { xs: 'block', md: 'flex' },
            alignItems: 'center',
            gap: '10px',
            width: '100%',
            mt: { xs: '30px', md: '60px' },
          }}
        >
          <Box sx={{ width: '100%', maxWidth: '100%' }}>
            <Typography
              component="label"
              htmlFor="name"
              sx={{ fontSize: { xs: '16px', md: '20px' } }}
            >
              Name
            </Typography>
            <TextField
              id="name"
              variant="outlined"
              sx={{ width: '100%', maxWidth: '100%' }}
            />
          </Box>
          <Box sx={{ width: '100%', maxWidth: '100%', mt: { xs: 5, md: 0 } }}>
            <Typography
              component="label"
              htmlFor="email"
              sx={{ fontSize: { xs: '16px', md: '20px' } }}
            >
              Email Address
            </Typography>
            <TextField
              id="email"
              type="email"
              variant="outlined"
              sx={{ width: '100%', maxWidth: '100%' }}
            />
          </Box>
        </Box>

        <Typography
          component="label"
          htmlFor="number"
          sx={{ fontSize: { xs: '16px', md: '20px' }, mt: '40px' }}
        >
          Contact Number
        </Typography>
        <TextField
          type="number"
          id="number"
          variant="outlined"
          sx={{ width: '100%', maxWidth: '100%' }}
        />
        <Typography
          component="label"
          htmlFor="message"
          sx={{ fontSize: { xs: '16px', md: '20px' }, mt: '40px' }}
        >
          Message
        </Typography>
        <TextField
          id="message"
          variant="outlined"
          multiline
          rows={5}
          sx={{ width: '100%', maxWidth: '100%' }}
        />

        <Button
          sx={{
            bgcolor: 'var(--brown)',
            color: 'white',
            px: '50px',
            mt: '40px',
            py: 2,
            '&:hover': {
              backgroundColor: 'var(--blue) !important',
            },
          }}
          aria-label="Send message"
          title="Send message"
        >
          SEND
        </Button>
      </Box>
      <Typography sx={{ fontSize: { xs: '16px', md: '20px' }, mt: '40px' }}>
        Protected by Recaptcha
      </Typography>
    </Container>
  )
}
