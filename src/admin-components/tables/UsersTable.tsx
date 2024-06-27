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
  Box,
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

const UsersTable = (props: any) => {
  const { dataArray, deleteUser, headOptions, changeStatus } = props
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClose = () => {
    setAnchorEl(null)
  }

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
              {value?.role ? value.role : 'N/A'}
            </TableCell>
            <TableCell>
              <Box
                sx={{
                  color: value?.isApproved ? '#28C76F' : '#F3103C',
                  fontSize: '14px',
                  px: '5px',
                  fontWeight: 400,
                  bgcolor: value?.isApproved
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
                    value?.status === 'Pending' ? 'Approved' : 'Pending'
                  )
                }
              >
                {value?.status}
              </Box>
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
                  onClick={() => deleteUser(value?.id)}
                />
              </Stack>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default UsersTable
