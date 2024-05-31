'use client'

import styled from '@emotion/styled'
import AddIcon from '@mui/icons-material/Add'
import { Box, InputLabel, TextField } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'

const CustomLabel = styled(InputLabel)(({ theme }) => ({
  fontSize: '16px',
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontWeight: 400,
  color: '#4B465C',
}))

const TagsField = (props: any) => {
  const { type, tags, name, handleChangeTags, label, placeholder, removeTag } =
    props
  const [tag, setTag] = useState('')
  return (
    <Box sx={{ mb: '15px', width: '100%' }}>
      <CustomLabel
        id="demo-simple-select-label"
        sx={{ mb: '7px', fontFamily: 'Public Sans' }}
      >
        {label}
      </CustomLabel>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          border: '1px solid #c4c4c4',
          borderRadius: '4px',
          pl: 2,
          pr: 1,
        }}
      >
        <input
          placeholder={placeholder}
          type={type}
          value={tag}
          name={name}
          onChange={(e: any) => setTag(e.target.value)}
          style={{
            width: '100%',
            height: '38px',
            border: 'none',
            borderRadius: '6px',
            outline: 'none',
            fontSize: '16px',
            fontFamily: 'Public Sans',
          }}
          onKeyDown={(e: any) => {
            if (e.key === 'Enter') {
              handleChangeTags(tag)
              setTag('')
            }
          }}
        />
        <AddIcon
          sx={{
            cursor: 'pointer',
            border: '1px solid #e1e1e1',
            borderRadius: '50%',
            fontSize: '28px',
          }}
          onClick={() => {
            handleChangeTags(tag)
            setTag('')
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1,
          mt: 1,
        }}
      >
        {tags?.map((item: any, index: number) => (
          <Box
            key={index}
            sx={{
              bgcolor: '#e1e1e1',
              px: '10px',
              py: '4px',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              fontSize: '14px',
            }}
          >
            {item}
            <CloseIcon
              sx={{ fontSize: '18px', cursor: 'pointer' }}
              onClick={() => removeTag(index)}
            />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default TagsField
