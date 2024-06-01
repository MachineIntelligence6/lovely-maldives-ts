import { Box } from '@mui/material'
import dynamic from 'next/dynamic'
import HeadingWraper from '@/admin-components/common/HeadingWraper'
import { CustomCard } from '@/admin-components/styled/CustomCard'

const ReactQuillEditor = dynamic(
  () => import('@/admin-components/common/ReactQuillEditor'),
  { ssr: false }
)

export default function Blogs() {
  return (
    <CustomCard sx={{ padding: '40px !important', mt: 2 }}>
      <HeadingWraper title="Blogs" />
      <Box sx={{ mt: 3, pb: 5 }}>
        <ReactQuillEditor height={400} />
      </Box>
    </CustomCard>
  )
}
