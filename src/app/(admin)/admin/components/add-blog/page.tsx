'use client'

import { Box } from '@mui/material'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import HeadingWraper from '@/admin-components/common/HeadingWraper'
import { CustomCard } from '@/admin-components/styled/CustomCard'
import TextFieldWraper from '@/admin-components/items/TextfieldWraper'

const ReactQuillEditor = dynamic(
  () => import('@/admin-components/common/ReactQuillEditor'),
  { ssr: false }
)

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
        <TextFieldWraper
          label="Blog Category"
          name="blogCategory"
          type="text"
          placeholder="Enter blog category."
          value={category}
          onChange={(e: any) => setCategory(e.target.value)}
        />
        <ReactQuillEditor
          height={400}
          handleEditorValue={handleEditorValue}
          value={value}
        />
      </Box>
    </CustomCard>
  )
}
