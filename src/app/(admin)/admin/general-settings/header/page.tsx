'use client'
import React, { useState } from 'react'
import HeadingWraper from '@/admin-components/common/HeadingWraper'
import HeaderBgHandler from '@/admin-components/general-settings/HeaderBgHandler'
import MenuAddItem from '@/admin-components/general-settings/MenuAddItem'
import LogoInputFile from '@/admin-components/items/CustomInputFile'
import { CustomCard } from '@/admin-components/styled/CustomCard'
import { CustomLabel } from '@/admin-components/styled/CustomLabels'
import { Box, Button, Stack, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

const HeaderSettings = () => {
  const [menus, setMenus] = useState([
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'About Maldives',
      link: 'about-maldives',
    },
  ])

  const handleAddMenu = () => {
    setMenus([
      ...menus,
      {
        title: 'Menu Name',
        link: 'Menu Link',
      },
    ])
  }

  const handleChange = (index: number, field: string, e: any) => {
    console.log('index:', index, 'field:', field, 'e:', e.target.value)
    const updatedMenus = [...menus] as any
    updatedMenus[index][field] = e.target.value
    setMenus(updatedMenus)
  }

  const handleDelete = (ind: any) => {
    setMenus(menus.filter((menu, index) => index !== ind))
  }

  return (
    <Box sx={{ pb: 4 }}>
      <CustomCard sx={{ padding: '40px !important' }}>
        <HeadingWraper title="Header Main" />
        <Stack
          direction="row"
          alignItems="start"
          gap={{ xs: '1rem', md: '2rem' }}
        >
          <LogoInputFile />
          <Box>
            <CustomLabel id="demo-simple-select-label" sx={{ mb: 2 }}>
              Select Background Color
            </CustomLabel>
            <HeaderBgHandler />
          </Box>
        </Stack>
      </CustomCard>
      <CustomCard sx={{ mt: 4, padding: '40px !important' }}>
        <HeadingWraper title="Header Menu" />
        <Typography
          variant="body1"
          color="var(--black)"
          sx={{ fontSize: '17px', mb: 2, fontWeight: 'bold' }}
        >
          Menus
        </Typography>
        <Box sx={{ border: '1px solid #e1e1e1', borderRadius: '6px' }}>
          {menus?.map((menu, index) => (
            <MenuAddItem
              key={index}
              index={index}
              menu={menu}
              handleChange={handleChange}
              handleDelete={handleDelete}
            />
          ))}
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            variant="outlined"
            sx={{
              border: '1px solid var(--brown)',
              mt: 3,
              textTransform: 'capitalize',
            }}
            onClick={handleAddMenu}
          >
            <Stack direction="row" alignItems="center" gap="10px">
              <AddIcon sx={{ color: 'var(--brown)', fontSize: '22px' }} />
              <Typography variant="body1" color="var(--brown)">
                Add Menu
              </Typography>
            </Stack>
          </Button>
        </Box>
      </CustomCard>
    </Box>
  )
}

export default HeaderSettings
