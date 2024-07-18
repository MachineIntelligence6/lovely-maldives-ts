'use client'

import React, { useState } from 'react'
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  TableBody,
  Stack,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import styled from '@emotion/styled'

const CustomTableLabel = styled(TableSortLabel)(({ theme }) => ({
  fontSize: '13px',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '1px',
  color: '#5D596C',
}))

const SubscriptionTable = (props: any) => {
  const { dataArray, deleteSubscription, headOptions } = props
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Table sx={{ minWidth: '600px' }}>
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
              <CustomTableLabel>{option}</CustomTableLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {dataArray?.map((value: any, index: number) => (
          <TableRow key={index}>
            <TableCell
              sx={{ color: '#6F6B7D', fontSize: '15px', fontWeight: 400 }}
            >
              {index + 1}
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
              {value?.createdAt
                ? new Date(value?.createdAt).toDateString()
                : 'N/A'}
            </TableCell>
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
                  onClick={() => deleteSubscription(value?.id)}
                />
              </Stack>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default SubscriptionTable
