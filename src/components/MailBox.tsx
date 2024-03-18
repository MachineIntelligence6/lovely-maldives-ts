import { Box, Typography, TextField, IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import Image from 'next/image'

export default function MailBox() {
  return (
    <Box
      sx={{
        mt: { xs: '40px', md: '60px' },
        width: { xs: '100%', md: '55%' },
        // height: { xs: '250px', md: '350px' },
        mx: 'auto',
        py: '50px',
        borderRadius: { xs: '0', md: '25px' },
        position: 'relative',
        bgcolor: 'var(--blue)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Image
        src="/Images/lovely-maldives-logo-white.png"
        height={31}
        width={40}
        alt="Logo subscribe mailing"
        // style={{ marginTop: '8%' }}
      />
      <Typography
        sx={{
          width: { xs: 'auto', md: '500px' },
          color: 'white',
          fontSize: { xs: '16px', md: '20px' },
          fontWeight: 200,
          textAlign: 'center',
          mt: '20px',
          px: 4,
        }}
      >
        Subscribe to get the latest news and offers by Lovely Maldives
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mt: '20px',
          width: { xs: '70%', md: '60%' },
        }}
      >
        <TextField
          id="outlined-multiline-flexible"
          placeholder="Enter email address"
          multiline
          className="input"
          sx={{
            borderRadius: '10px',
            background: 'white',
            width: '100%',
          }}
        />
        <IconButton
          aria-label="subscribe"
          sx={{
            position: 'absolute',
            right: { xs: '70px', md: '22%' },
            // transform: 'translateY(-50%)',
            // bgcolor: 'primary.main',
            color: 'primary.main',
            borderRadius: '0 10px 10px 0',
            '&:hover': {
              color: 'primary.dark',
              background: 'none',
            },
          }}
        >
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  )
}
