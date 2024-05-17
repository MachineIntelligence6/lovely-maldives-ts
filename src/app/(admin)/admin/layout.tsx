import { Box } from '@mui/system'
import BreedCrumb from '@/admin-components/breedcrumb'
import Sidebar from '@/admin-components/sidebar'
import TopBar from '@/admin-components/topbar'

export default function DashboardLayout({ children }: any) {
  return (
    <div
      className="admin-main-layout"
      style={{ backgroundColor: '#eeeeee', minHeight: '100vh' }}
    >
      <Sidebar />
      <TopBar />
      <Box
        sx={{
          pt: '75px',
          ml: '279px',
          pr: '20px',
        }}
      >
        <BreedCrumb />
        {children}
      </Box>
    </div>
  )
}
