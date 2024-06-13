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

const ResortFilter = (props: any) => {
  const { filters, deleteFilter, editFilter } = props
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <CustomTableLabel>ID</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>Filter Type</CustomTableLabel>
          </TableCell>
          <TableCell>
            <CustomTableLabel>Filter</CustomTableLabel>
          </TableCell>
          <TableCell sx={{ textAlign: 'right' }}>
            <CustomTableLabel>Actions</CustomTableLabel>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {filters?.map((filter: any, index: number) => (
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
              {filter?.type}
            </TableCell>
            <TableCell>{filter?.filter}</TableCell>
            <TableCell sx={{ pr: 4 }}>
              <Stack
                direction="row"
                gap="16px"
                alignItems="center"
                justifyContent="end"
              >
                <EditIcon
                  sx={{
                    color: 'var(--blue)',
                    fontSize: '22px',
                    cursor: 'pointer',
                  }}
                  onClick={() => editFilter({ ...filter, id: filter?.id })}
                />
                <DeleteIcon
                  sx={{
                    color: 'var(--red)',
                    fontSize: '22px',
                    cursor: 'pointer',
                  }}  
                  onClick={() => deleteFilter(filter?.id)}
                />
              </Stack>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default ResortFilter
