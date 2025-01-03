'use client'

import React, { useState } from 'react'
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
} from '@mui/material'
import { sendEmailRequest } from '@/utils/api-requests/sendEmailRequest'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>(
    'success'
  )

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  // Form validation function
  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setSnackbarMessage('Please fill in all required fields.')
      setSnackbarSeverity('error')
      setSnackbarOpen(true)
      return false
    }
    return true
  }

  const handleSubmit = async () => {
    // Validate form before proceeding
    if (!validateForm()) return

    setIsLoading(true)
    console.log(`Submit :`, formData)
    try {
      // Call the sendEmailRequest function with form data
      const res = await sendEmailRequest(formData)

      if (res?.status === 200) {
        setSnackbarMessage('Email sent successfully!')
        setSnackbarSeverity('success')
      } else {
        setSnackbarMessage('Failed to send email.')
        setSnackbarSeverity('error')
      }
    } catch (error) {
      console.error('Error occurred while sending email:', {
        message: (error as any).message,
        stack: (error as any).stack,
        response: (error as any).response?.data,
      })
      setSnackbarMessage(
        (error as any).response?.data?.message ||
          'Error occurred while sending email.'
      )
      setSnackbarSeverity('error')
    } finally {
      setIsLoading(false)
      setSnackbarOpen(true)
    }
  }

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
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            fullWidth
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            id="email"
            label="Email Address"
            type="email"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={handleChange}
            sx={{ mt: { xs: 2, md: 0 } }}
          />
        </Box>
        <TextField
          id="number"
          label="Contact Number"
          type="number"
          variant="outlined"
          fullWidth
          value={formData.number}
          onChange={handleChange}
          sx={{ mt: 4 }}
        />
        <TextField
          id="message"
          label="Message"
          variant="outlined"
          multiline
          rows={5}
          fullWidth
          value={formData.message}
          onChange={handleChange}
          sx={{ mt: 4 }}
        />
        <Button
          onClick={handleSubmit}
          disabled={isLoading}
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
        >
          {isLoading ? 'Sending...' : 'SEND'}
        </Button>
      </Box>
      <Typography sx={{ fontSize: { xs: '16px', md: '20px' }, mt: '40px' }}>
        Protected by Recaptcha
      </Typography>
      <Snackbar
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
        autoHideDuration={6000}
      />
    </Container>
  )
}
