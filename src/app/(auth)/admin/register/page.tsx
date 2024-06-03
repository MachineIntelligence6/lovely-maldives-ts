/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-props-no-spreading */

'use client'

import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import axios from 'axios'
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { CircularProgress } from '@mui/material'

export const registerFormSchema = z.object({
  firstName: z
    .string({ required_error: 'This field is required.' }),
  lastName: z.string().optional(),
  email: z
    .string({ required_error: 'This field is required.' })
    .min(1, { message: 'This field is required.' })
    .email({ message: 'please enter a valid email address' }),
  password: z
    .string({ required_error: 'This field is required.' })
    .min(8, { message: 'Password must contain at least 8 characters' }),
})
export type RegisterFormSchema = z.infer<typeof registerFormSchema>

export default function SignUp() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields },
  } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  })
  const [isPending, startTransition] = React.useTransition();
  const[errMsg, setErrMsg] = React.useState('')

  const onSubmit = async () => {
    const name = `${watch('firstName')} ${watch("lastName")}`

    try {
      startTransition(async () => {
        const res = await axios.post('http://localhost:3000/api/auth/register', {
          name,
          email: watch('email'),
          password: watch('password'),
        })
        console.log('res =>>> ', res)
        if (res.status === 201) router.push("/admin/login")
      })
    } catch (error) {
      setErrMsg("Invalid Credentials.")
      console.log("error ", error)
    }

    return null
  }

  console.log("isPending ", isPending)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '450px',
        mx: 'auto',
        minHeight: '100vh',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'var(--brown)' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <form onSubmit={handleSubmit(onSubmit as any)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            
            <TextField
              autoComplete="given-name"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
              {...register("firstName")}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
              disabled={isPending}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Last Name"
              {...register("lastName")}
              autoComplete="family-name"
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
              disabled={isPending}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              {...register("email")}
              autoComplete="email"
              error={!!errors.email}
              helperText={errors.email?.message}
              disabled={isPending}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              {...register("password")}
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              error={!!errors.password}
              helperText={errors.password?.message}
              disabled={isPending}
            />
          </Grid>
          <Grid item xs={12}>
            {errMsg && <Typography variant="body1" color="var(--red)" sx={{fontSize: '14px'}}>
              {errMsg}
            </Typography>}
          </Grid>
        </Grid>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, height: '50px' }}
        >
          {isPending ? <CircularProgress sx={{color: 'white'}} /> : 'Sign Up'}
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/admin/login">Already have an account? Sign in</Link>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}