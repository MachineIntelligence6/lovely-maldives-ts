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
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { CircularProgress } from '@mui/material'

export const loginFormSchema = z.object({
  email: z
    .string({ required_error: 'This field is required.' })
    .min(1, { message: 'This field is required.' })
    .email({ message: 'please enter a valid email address' }),
  password: z.string({ required_error: 'This field is required.' }),
})
export type LoginFormSchema = z.infer<typeof loginFormSchema>

export default function Login() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const [isPending, startTransition] = React.useTransition()
  const [errMsg, setErrMsg] = React.useState('')

  const onSubmit = async () => {
    console.log({
      email: watch('email'),
      password: watch('password'),
    })

    try {
      startTransition(async () => {
        const res = await signIn('credentials', {
          email: watch('email'),
          password: watch('password'),
          redirect: false,
        })
        console.log('res =>>> ', res)
        if (res?.status === 200) {
          router.push('/admin/dashboard')
        } else {
          setErrMsg('Invalid Credntials or you are not authorized to login.')
        }
      })
    } catch (error) {
      console.log('error ', error)
      setErrMsg('Invalid Credntials or you are not authorized to login.')
      // return throw new Error(error)
    }
  }

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
        Sign In
      </Typography>
      <form onSubmit={handleSubmit(onSubmit as any)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email?.message}
              disabled={isPending}
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              {...register('password')}
              error={!!errors.password}
              helperText={errors.password?.message}
              disabled={isPending}
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
          </Grid>
          <Grid item xs={12}>
            {errMsg && (
              <Typography
                variant="body1"
                color="var(--red)"
                sx={{ fontSize: '14px' }}
              >
                {errMsg}
              </Typography>
            )}
          </Grid>
          {/* <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid> */}
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, height: '50px' }}
        >
          {isPending ? <CircularProgress sx={{ color: 'white' }} /> : 'Sign In'}
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/admin/register">Don&apos;t have account? Sign up</Link>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}
