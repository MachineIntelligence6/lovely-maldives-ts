/* eslint-disable react/jsx-boolean-value */
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import { Box, Button, Stack, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import MenuAddItem from './MenuAddItem'

const ColumnBlock = (props: any) => {
  const {
    menu,
    handleChange,
    handleIconChange,
    handleMenuItemDelete,
    handleAddMenuItem,
    index,
    handleColumnDelete,
  } = props
  return (
    <Box
      sx={{
        border: '1px solid #e1e1e1',
        borderRadius: '8px',
        mb: 3,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ px: 3, py: 1, borderBottom: '1px solid #eeeeee' }}
      >
        <Typography
          variant="body1"
          color="var(--black)"
          sx={{ fontWeight: 'bold' }}
        >
          {menu?.title}
        </Typography>
        <DeleteIcon
          sx={{ fontSize: '22px', color: 'var(--red)', cursor: 'pointer' }}
          onClick={() => handleColumnDelete(index)}
        />
      </Stack>
      <Box>
        {menu?.menus?.map((option: any, subIndex: number) => (
          <MenuAddItem
            key={subIndex}
            subIndex={subIndex}
            index={index}
            menu={option}
            handleChange={handleChange}
            handleIconChange={handleIconChange}
            handleMenuItemDelete={handleMenuItemDelete}
            isColumns={true}
          />
        ))}
      </Box>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ px: 3, py: 2, borderTop: '1px solid #eeeeee' }}
      >
        <Button
          variant="outlined"
          sx={{
            border: '1px solid var(--brown)',
            textTransform: 'capitalize',
          }}
          onClick={() => handleAddMenuItem(menu?.title)}
        >
          <Stack direction="row" alignItems="center" gap="10px">
            <AddIcon sx={{ color: 'var(--brown)', fontSize: '22px' }} />
            <Typography variant="body1" color="var(--brown)">
              Add Menu
            </Typography>
          </Stack>
        </Button>
      </Stack>
    </Box>
  )
}

export default ColumnBlock
