import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import Diversity2Icon from '@mui/icons-material/Diversity2'

interface IBreadCrumbProps {
  linkName: string
  linkName2: string
  path: string
}
export default function BreadCrumb({
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  linkName = '',
  linkName2,
  path,
}: IBreadCrumbProps) {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="var(--white)"
      href="/"
      sx={{ fontSize: '20px' }}
    >
      <Diversity2Icon sx={{ fontSize: '35px', color: 'var(--brown)' }} />
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="var(--white)"
      href={path}
      sx={{ fontSize: '20px' }}
    >
      {linkName2}
    </Link>,
  ]
  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="large" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  )
}
