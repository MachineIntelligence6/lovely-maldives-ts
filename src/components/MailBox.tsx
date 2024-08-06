'use client'

import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from '@mui/material'
import Image from 'next/image'
import { useState, useTransition } from 'react'
import { createSubscriptionRequest } from '@/utils/api-requests/subscribe.request'
import SuccessMsg from '@/admin-components/pages/modals/SuccessMsg'

export default function MailBox() {
  const [alertMsg, setAlertMsg] = useState({ type: '', message: '' })
  const [isPending, startTransition] = useTransition()
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')

  const handleSearchModelOpen = () => setOpen(!open)

  const submitData = () => {
    if (!email || email?.length <= 3) {
      setAlertMsg({ type: 'error', message: 'Please enter valid email.' })
      setTimeout(() => {
        setAlertMsg({ type: '', message: '' })
      }, 3000)
      return
    }
    try {
      startTransition(async () => {
        const res = await createSubscriptionRequest({ email })
        const data = res?.data
        if (data?.status === 201) {
          setAlertMsg({ type: 'success', message: 'Subscribed successfully.' })
        } else {
          setAlertMsg({ type: 'error', message: data?.message })
        }
        setEmail('')
        handleSearchModelOpen()
      })
    } catch (error: any) {
      setAlertMsg({
        type: 'error',
        message: 'Error occured while saving data, please try again.',
      })
      setTimeout(() => {
        setAlertMsg({ type: '', message: '' })
      }, 3000)
      console.log('error ', error)
    }
  }

  return (
    <Box
      sx={{
        mt: { xs: '40px', md: '60px' },
        width: { xs: '100%', md: '55%' },
        minWidth: { xs: '100%', md: '500px' },
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
      <SuccessMsg
        open={open}
        handleSearchModelOpen={handleSearchModelOpen}
        message={alertMsg?.message}
        type={alertMsg?.type}
      />
      <Image
        src="/Images/lovely-maldives-logo-white.png"
        height={31}
        width={40}
        alt="Logo subscribe mailing"
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
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
          sx={{
            borderRadius: '10px',
            background: 'white',
            width: '100%',
            color:
              alertMsg?.type === 'error'
                ? 'var(--red) !important'
                : 'var(--black)',
            border:
              alertMsg?.type === 'error'
                ? '1px solid var(--red) !important'
                : 'none',
            outline: 'none',
          }}
        />
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Button
          sx={{
            bgcolor: 'var(--brown)',
            color: 'white',
            width: 'auto',
            mx: 'auto',
            mt: 2,
            px: '30px',
            py: '10px',
            textAlign: 'center',
            fontSize: '16px',
            '&:hover': {
              backgroundColor: 'var(--brown) !important',
            },
          }}
          aria-label="All hotels"
          onClick={submitData}
        >
          {isPending ? (
            <CircularProgress size={30} thickness={3} sx={{ color: '#fff' }} />
          ) : (
            'Subscribe'
          )}
        </Button>
      </Box>
    </Box>
  )
}
