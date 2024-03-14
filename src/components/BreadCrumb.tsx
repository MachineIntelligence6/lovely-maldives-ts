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
    label: <Diversity2Icon sx={{ fontSize: '35px', color: 'var(--brown)' }} />,
    path: '/',
  })

  let currentPath = '/'
  segments.forEach((segment) => {
    currentPath += `${segment}/`
    const formattedLabel = segment
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
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="large" />}
        aria-label="breadcrumb"
      >
        {routeSegments.map((link) => (
          <MuiLink
            component={Link}
            underline="hover"
            color="var(--white)"
            href={link.path}
            sx={{ fontSize: '20px' }}
            key={link.path}
          >
            {link.label}
          </MuiLink>
        ))}
      </Breadcrumbs>
    </Stack>
  )
}
