'use client'

import React from 'react'
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  TableBody,
  Stack,
  Box,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import styled from '@emotion/styled'
import { format } from 'date-fns'

const CustomTableLabel = styled(TableSortLabel)(({ theme }) => ({
  fontSize: '13px',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '1px',
  color: '#5D596C',
}))

const BookingsTable = (props: any) => {
  const { dataArray, deleteBooking, headOptions, changeStatus } = props

  return (
    <Table>
      <TableHead>
        <TableRow sx={{ mt: 2 }}>
          {headOptions?.map((option: any, index: number) => (
            <TableCell
              sx={{
                '&:last-child': {
                  textAlign: 'right',
                },
              }}
              key={index}
            >
              <CustomTableLabel sx={{ textWrap: 'nowrap' }}>
                {option}
              </CustomTableLabel>
            </TableCell>
          ))}
          <TableCell
            sx={{
              '&:last-child': {
                textAlign: 'right',
              },
            }}
          />
        </TableRow>
      </TableHead>
      <TableBody>
        {dataArray?.map((value: any, index: number) => (
          <TableRow key={value.id}>
            <TableCell
              sx={{ color: '#6F6B7D', fontSize: '15px', fontWeight: 400 }}
            >
              {index + 1}
            </TableCell>
            {/* <TableCell
              sx={{
                color: '#6F6B7D',
                fontSize: '15px',
                fontWeight: 500,
              }}
            >
              {value?.bookingId}
            </TableCell> */}
            <TableCell
              sx={{
                color: '#6F6B7D',
                fontSize: '15px',
                fontWeight: 500,
              }}
            >
              {value?.name}
            </TableCell>
            <TableCell
              sx={{
                color: '#6F6B7D',
                fontSize: '15px',
                fontWeight: 500,
              }}
            >
              {value?.email}
            </TableCell>
            <TableCell
              sx={{
                color: '#6F6B7D',
                fontSize: '15px',
                fontWeight: 500,
              }}
            >
              {value?.phone}
            </TableCell>
            <TableCell
              sx={{
                color: '#6F6B7D',
                fontSize: '15px',
                fontWeight: 500,
              }}
            >
              {value?.totalGuest}
            </TableCell>
            <TableCell
              sx={{
                color: '#6F6B7D',
                fontSize: '15px',
                fontWeight: 500,
              }}
            >
              {value?.totalRooms}
            </TableCell>
            <TableCell
              sx={{
                color: '#6F6B7D',
                fontSize: '15px',
                fontWeight: 500,
              }}
            >
              {value?.checkInDate
                ? format(new Date(value.checkInDate), 'dd-MM-yyyy')
                : ''}
            </TableCell>
            <TableCell
              sx={{
                color: '#6F6B7D',
                fontSize: '15px',
                fontWeight: 500,
              }}
            >
              {value?.checkOutDate
                ? format(new Date(value.checkOutDate), 'dd-MM-yyyy')
                : ''}
            </TableCell>
            {/* <TableCell>
              <Box
                sx={{
                  color: value?.status === 'Confirmed' ? '#28C76F' : '#F3103C',
                  fontSize: '14px',
                  px: '5px',
                  fontWeight: 400,
                  bgcolor:
                    value?.status === 'Confirmed'
                      ? 'rgba(40, 199, 111, 0.15)'
                      : 'rgba(243, 16, 60, 0.15)',
                  padding: '5px 10px',
                  textAlign: 'center',
                  borderRadius: '4px',
                  maxWidth: '130px',
                  cursor: 'pointer',
                }}
                onClick={() =>
                  changeStatus(
                    value?.id,
                    value?.status === 'Pending' ? 'Confirmed' : 'Pending'
                  )
                }
              >
                {value?.status}
                Confirmed
              </Box>
            </TableCell> */}
            <TableCell sx={{ pr: 4 }}>
              <Stack
                direction="row"
                gap="16px"
                alignItems="center"
                justifyContent="end"
              >
                <DeleteIcon
                  sx={{
                    color: 'var(--red)',
                    fontSize: '22px',
                    cursor: 'pointer',
                  }}
                  onClick={() => deleteBooking(value?.id)}
                />
              </Stack>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default BookingsTable
