'use client'

import Breadcrumbs from '@mui/material/Breadcrumbs'
import { Link as MuiLink } from '@mui/material'
import Stack from '@mui/material/Stack'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import Diversity2Icon from '@mui/icons-material/Diversity2'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import Link from 'next/link'

interface RouteSegment {
  label: string | ReactNode
  path: string
}

function generateRouteSegments(path: string): RouteSegment[] {
  const segments = path.split('/').filter((segment) => segment !== '')
  const routeSegments: RouteSegment[] = []

  routeSegments.push({
    label: <Diversity2Icon sx={{ fontSize: '30px', color: 'var(--brown)' }} />,
    path: '/',
  })

  let currentPath = '/'
  segments.forEach((segment) => {
    currentPath += `${decodeURIComponent(segment)}/`
    const decodedSegment = decodeURIComponent(segment)
    const formattedLabel = decodedSegment
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    routeSegments.push({ label: formattedLabel, path: currentPath })
  })

  return routeSegments
}

export default function BreadCrumb() {
  const pathname = usePathname()
  const routeSegments = generateRouteSegments(pathname)

  return (
    <Stack>
      <Breadcrumbs
        separator={<NavigateNextIcon sx={{ marginX: 0 }} />}
        aria-label="breadcrumb"
        sx={{
          '& .MuiBreadcrumbs-separator': {
            marginX: { xs: '0px', md: '10px' },
          },
        }}
      >
        {routeSegments.map((link) => (
          <MuiLink
            component={Link}
            underline="hover"
            color="var(--white)"
            href={link.path}
            role="link"
            aria-label={typeof link.label === 'string' ? link.label : 'Home'}
            sx={{ fontSize: { xs: '14px', md: '20px' } }}
            key={link.path}
          >
            {link.label}
          </MuiLink>
        ))}
      </Breadcrumbs>
    </Stack>
  )
}
