'use client'

import { Box, InputLabel } from '@mui/material'
import styled from '@emotion/styled'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import HeadingWraper from '@/admin-components/common/HeadingWraper'
import { CustomCard } from '@/admin-components/styled/CustomCard'
import TextFieldWraper from '@/admin-components/items/TextfieldWraper'
import CustomSelect from '@/admin-components/items/CustomSelect'

const ReactQuillEditor = dynamic(
  () => import('@/admin-components/common/ReactQuillEditor'),
  { ssr: false }
)

const options = [
  { value: 'All Blogs', label: 'All Blogs' },
  { value: 'Latest Blogs', label: 'Latest Blogs' },
  { value: 'Popular Blogs', label: 'Popular Blogs' },
]

const CustomLabel = styled(InputLabel)(({ theme }) => ({
  fontSize: '16px',
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontWeight: 400,
  color: '#4B465C',
}))

export default function AddBlog() {
  const [category, setCategory] = useState('')
  const [value, setValue] = useState('')

  const handleEditorValue = (val: any) => {
    setValue(val)
  }

  return (
    <CustomCard sx={{ padding: '40px !important', mt: 2 }}>
      <HeadingWraper title="Blogs" />
      <Box sx={{ mt: 3, pb: 5 }}>
        {/* <TextFieldWraper
          label="Blog Category"
          name="blogCategory"
          type="text"
          placeholder="Enter blog category."
          value={category}
          onChange={(e: any) => setCategory(e.target.value)}
        /> */}
        <Box sx={{ mb: 3 }}>
          <CustomLabel
            id="demo-simple-select-label"
            sx={{ mb: '7px', fontFamily: 'Public Sans' }}
          >
            Blog Category
          </CustomLabel>
          <CustomSelect
            placeholder="Enter blog category."
            value={category}
            options={options}
            name="blogCategory"
            onChange={(e: any) => setCategory(e.target.value)}
          />
        </Box>
        <ReactQuillEditor
          height={400}
          handleEditorValue={handleEditorValue}
          value={value}
        />
      </Box>
    </CustomCard>
  )
}
