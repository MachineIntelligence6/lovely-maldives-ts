import { Container, Box, Typography, TextField, Button } from '@mui/material'

export default function ContactForm() {
  return (
    <Container sx={{ color: 'var(--white)', mt: '60px' }}>
      <Box sx={{ width: '700px', maxWidth: '100%', mx: 'auto', mt: '60px' }}>
        <Typography
          sx={{ fontSize: { xs: '35px', md: '50px' }, fontWeight: 400 }}
        >
          Send an Email
        </Typography>
        <Box
          sx={{
            display: { xs: 'block', md: 'flex' },
            alignItems: 'center',
            gap: '10px',
            width: '100%',
            mt: '60px',
          }}
        >
          <Box sx={{ width: '100%', maxWidth: '100%' }}>
            <Typography sx={{ fontSize: '24px' }}>Name</Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              sx={{ width: '100%', maxWidth: '100%' }}
            />
          </Box>
          <Box sx={{ width: '100%', maxWidth: '100%' }}>
            <Typography sx={{ fontSize: '24px' }}>Email Address</Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              sx={{ width: '100%', maxWidth: '100%' }}
            />
          </Box>
        </Box>

        <Typography sx={{ fontSize: '24px', mt: '40px' }}>
          Contact Number
        </Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          sx={{ width: '100%', maxWidth: '100%' }}
        />
        <Typography sx={{ fontSize: '24px', mt: '40px' }}>Message</Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          multiline
          rows={10}
          sx={{ width: '100%', maxWidth: '100%' }}
        />

        <Button
          className="buttonHover"
          sx={{
            bgcolor: 'var(--brown)',
            color: 'white',
            px: '50px',
            mt: '40px',
            py: 2,
          }}
          title="Send"
        >
          SEND
        </Button>
      </Box>
      <Typography sx={{ textAlign: 'center', fontSize: '24px', mt: '40px' }}>
        Protected by Recaptcha
      </Typography>
    </Container>
  )
}
