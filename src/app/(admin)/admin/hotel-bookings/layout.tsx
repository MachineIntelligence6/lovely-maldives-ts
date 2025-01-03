import { Box } from '@mui/system'
import BreedCrumb from '@/admin-components/breedcrumb'
import Sidebar from '@/admin-components/sidebar'
import TopBar from '@/admin-components/topbar'

export default function BookingsLayout({ children }: any) {
  return (
    <div
      className="admin-main-layout"
      style={{ backgroundColor: '#eeeeee', minHeight: '100vh' }}
    >
      <Sidebar />
      <Box
        sx={{
          pt: '20px',
          ml: { xs: '20px' },
          pr: '20px',
        }}
      >
        {children}
      </Box>
    </div>
  )
}
