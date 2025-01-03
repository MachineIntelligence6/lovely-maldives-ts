'use client'

import { useTransition, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  FormHelperText,
  Alert,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { createHotelBookingRequst } from '@/services/hotel-booking'
import CustomLoader from '@/admin-components/common/CustomLoader'

// Validation schema
const bookingSchema = z
  .object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
    checkInDate: z.date({
      required_error: 'Check-in date is required',
      invalid_type_error: "That's not a date!",
    }),
    checkOutDate: z.date({
      required_error: 'Check-out date is required',
      invalid_type_error: "That's not a date!",
    }),
    totalGuest: z.number().min(1, 'Please enter number of guests'),
    totalRooms: z.number().min(1, 'Please enter number of rooms'),
  })
  .refine((data) => data.checkOutDate > data.checkInDate, {
    message: 'Check-out date must be after check-in date',
    path: ['checkOutDate'],
  })

type BookingFormData = z.infer<typeof bookingSchema>

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4),
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
}))

export default function BookingForm() {
  const [isPending, startTransition] = useTransition()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [alertMsg, setAlertMsg] = useState<{ type: string; message: string }>({
    type: '',
    message: '',
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      totalGuest: 1,
      totalRooms: 1,
      checkInDate: new Date(),
      checkOutDate: new Date(new Date().setDate(new Date().getDate() + 1)),
    },
  })

  const checkInDate = watch('checkInDate')

  const onSubmit = async (payload: BookingFormData) => {
    setIsSubmitting(true)
    try {
      startTransition(async () => {
        // Sending the request to create a new booking
        if (!payload.checkInDate || !payload.checkOutDate) {
          setAlertMsg({
            type: 'error',
            message: 'Check-in and check-out dates are required.',
          })
          setTimeout(() => {
            setAlertMsg({ type: '', message: '' })
          }, 3000)
          return
        }

        const res = await createHotelBookingRequst({
          name: payload.name,
          email: payload.email,
          phone: payload.phone,
          checkInDate: payload.checkInDate,
          checkOutDate: payload.checkOutDate,
          totalGuest: payload.totalGuest,
          totalRooms: payload.totalRooms,
        })

        // Handling the response
        const data = res?.data
        if (data?.status === 201) {
          reset()
          console.log('Form submitted:', data)
          // Display a success message
          setAlertMsg({
            type: 'success',
            message: 'Hotel booking created successfully.',
          })
          setTimeout(() => {
            setAlertMsg({ type: '', message: '' })
          }, 3000)
        } else {
          // Handle failure response
          setAlertMsg({ type: 'error', message: data?.message })
          setTimeout(() => {
            setAlertMsg({ type: '', message: '' })
          }, 3000)
        }
      })
    } catch (error: any) {
      // Error handling
      setAlertMsg({
        type: 'error',
        message: 'Error occurred while creating the booking, please try again.',
      })
      setTimeout(() => {
        setAlertMsg({ type: '', message: '' })
      }, 3000)

      console.log('Error submitting hotel booking: ', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* <CustomCard sx={{ mt: 2 }}> */}
      {isPending && <CustomLoader />}
      {alertMsg.message && (
        <Alert sx={{ mb: 2 }} severity={alertMsg.type as any}>
          {alertMsg.message}
        </Alert>
      )}
      {/* </CustomCard> */}

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StyledContainer maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Book Your Dream Getaway Now
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Experience the luxury and serenity of Hotelvia Vila & Resort. Our
              booking process is simple and ensures that every detail of your
              stay.
            </Typography>
          </Box>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      name={field.name}
                      label="Your Name"
                      placeholder="Please enter your name"
                      fullWidth
                      error={!!errors.name}
                      helperText={errors.name?.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      name={field.name}
                      label="Your Email"
                      placeholder="e.g., john.doe@example.com"
                      fullWidth
                      error={!!errors.email}
                      helperText={errors.email?.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      name={field.name}
                      label="Your Phone"
                      placeholder="e.g., +1234567890"
                      fullWidth
                      error={!!errors.phone}
                      helperText={errors.phone?.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Controller
                  name="totalGuest"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      value={field.value}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                      onBlur={field.onBlur}
                      name={field.name}
                      label="Total Guests"
                      placeholder="Please enter number of guests"
                      type="number"
                      fullWidth
                      InputProps={{ inputProps: { min: 1, max: 10 } }}
                      error={!!errors.totalGuest}
                      helperText={errors.totalGuest?.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Controller
                  name="totalRooms"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      value={field.value}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                      onBlur={field.onBlur}
                      name={field.name}
                      label="Total Rooms"
                      placeholder="Please enter number of rooms"
                      type="number"
                      fullWidth
                      InputProps={{ inputProps: { min: 1, max: 10 } }}
                      error={!!errors.totalRooms}
                      helperText={errors.totalRooms?.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Controller
                  name="checkInDate"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      label="Check-in Date"
                      value={field.value}
                      onChange={(date) => field.onChange(date)}
                      disablePast
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          error: !!errors.checkInDate,
                          helperText: errors.checkInDate?.message,
                        },
                      }}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="checkOutDate"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      label="Check-out Date"
                      value={field.value}
                      onChange={(date) => field.onChange(date)}
                      disablePast
                      minDate={new Date(checkInDate)}
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          error: !!errors.checkOutDate,
                          helperText: errors.checkOutDate?.message,
                        },
                      }}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <FormHelperText>* Terms and conditions applied</FormHelperText>
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={isSubmitting}
                  sx={{
                    mt: 2,
                    py: 1.5,
                    backgroundColor: '#967f5d',
                    '&:hover': {
                      backgroundColor: '#2277DD',
                    },
                  }}
                >
                  {isSubmitting ? 'Booking...' : 'Booking Now'}
                </Button>
              </Grid>
            </Grid>
          </form>
        </StyledContainer>
      </LocalizationProvider>
    </>
  )
}
