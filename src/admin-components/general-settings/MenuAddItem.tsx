'use client'

import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle'
import DeleteIcon from '@mui/icons-material/Delete'
import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { useState } from 'react'
import TextFieldWraper from '../items/TextfieldWraper'

function MenuAddItem(props: any) {
  const { handleDelete, handleChange, index } = props
  const [active, setActive] = useState(false)

  const handleActive = () => {
    setActive(!active)
  }

  return (
    <Box
      sx={{
        height: active ? 'auto' : '50px',
        borderBottom: '1px solid #e1e1e1',
        transition: 'all 0.5s ease-in-out',
        overflow: 'hidden',
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ height: '50px', px: 3, py: 1, cursor: 'pointer' }}
        onClick={handleActive}
      >
        <Stack direction="row" alignItems="center" gap="10px">
          <ArrowDropDownCircleIcon
            sx={{
              fontSize: '25px',
              color: 'var(--brown)',
              rotate: active ? '180deg' : '0deg',
              transition: 'all 0.5s ease-in-out',
            }}
          />
          <Typography variant="body1" color="var(--black)">
            {props?.menu?.title}
          </Typography>
        </Stack>
        <DeleteIcon
          sx={{ fontSize: '18px', color: 'var(--red)', cursor: 'pointer' }}
          onClick={() => handleDelete(index)}
        />
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        gap="2rem"
        sx={{
          p: 3,
          border: '1px solid var(--blue)',
          backgroundColor: '#e1e1e1',
        }}
      >
        <TextFieldWraper
          label="Menu Name"
          placeholder="Enter Menu Name."
          value={props?.menu?.title}
          name="title"
          onChange={(e: any) => handleChange(index, 'title', e)}
        />
        <TextFieldWraper
          label="Menu Link"
          placeholder="Enter Menu Link."
          value={props?.menu?.link}
          name="link"
          onChange={(e: any) => handleChange(index, 'link', e)}
        />
      </Stack>
    </Box>
  )
}

export default MenuAddItem
