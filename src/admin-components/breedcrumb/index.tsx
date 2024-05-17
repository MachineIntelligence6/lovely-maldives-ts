'use client'
import { Breadcrumbs, Link, Typography } from '@mui/material'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const BreedCrumb = () => {
  const pathname = usePathname()
  const [links, setLinks] = useState({ title: '', paths: [] as any })
  const paths = pathname?.split('/')
  console.log('pathname', paths)

  useEffect(() => {
    const result = paths?.filter(
      (path: any, index: number) => index !== 0 && index !== 1 && index !== paths?.length - 1
    )
    setLinks({
      title: paths?.[paths.length - 1],
      paths: result,
    })
  }, [pathname])

  console.log('links are ', links)
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 1 }}>
      {links?.paths?.map((link: any, index: number) => (
        <Link
          key={index}
          underline="hover"
          color="inherit"
          href={link?.path}
          style={{ cursor: 'pointer', textTransform: 'capitalize' }}
        >
          {link}
        </Link>
      ))}
      <Typography
        variant="body1"
        color="text.primary"
        sx={{ textTransform: 'capitalize' }}
      >
        {links?.title}
      </Typography>
    </Breadcrumbs>
  )
}

export default BreedCrumb
