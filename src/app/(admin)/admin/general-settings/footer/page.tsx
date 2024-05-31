'use client'

import React, { useState } from 'react'
import { Typography, Box, Button, Stack } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import HeadingWraper from '@/admin-components/common/HeadingWraper'
import { CustomCard } from '@/admin-components/styled/CustomCard'
import ColumnBlock from '@/admin-components/general-settings/ColumnBlock'
import AddTitleModal from '@/admin-components/general-settings/modals/AddTitleModal'

function FooterSettings() {
  const [showModal, setShowModal] = useState(false)
  const [menus, setMenus] = useState([
    {
      title: 'Links',
      links: [
        {
          title: 'Home',
          link: '/',
        },
      ],
    },
  ])

  const handleChange = (
    index: number,
    subIndex: number,
    field: string,
    e: any
  ) => {
    const { name, value } = e.target

    const updatedMenus = menus.map((menu, i) => {
      if (i === index) {
        return {
          ...menu,
          links: menu.links.map((link, j) => {
            if (j === subIndex) {
              return {
                ...link,
                [field]: value,
              }
            }
            return link
          }),
        }
      }
      return menu
    })

    setMenus(updatedMenus)
  }

  const handleMenuItemDelete = (ind: number, subInd: number) => {
    const updatedMenus = menus.map((menu, i) => {
      if (i === ind) {
        return {
          ...menu,
          links: menu.links.filter((link, j) => j !== subInd),
        }
      }
      return menu
    })

    setMenus(updatedMenus)
  }

  const handleColumnDelete = (ind: number) => {
    setMenus(menus.filter((menu, index) => index !== ind))
  }

  const handleAddMenuBlock = (title: any) => {
    if (!title) return
    setMenus([
      ...menus,
      {
        title,
        links: [{ title: '', link: '' }],
      },
    ])
  }

  const handleAddMenuItem = (title: string) => {
    const updatedMenus = [...menus] as any
    const menuIndex = updatedMenus.findIndex(
      (menu: any) => menu.title === title
    )
    if (menuIndex !== -1) {
      updatedMenus[menuIndex].links.push({ title: '', link: '' })
      setMenus(updatedMenus)
    }
  }

  const handleShowModal = () => setShowModal(!showModal)

  const submitSave = () => {
    console.log('menus ', menus)
  }

  return (
    <>
      <AddTitleModal
        open={showModal}
        handleShowModal={handleShowModal}
        handleAddMenuBlock={handleAddMenuBlock}
      />
      <Box sx={{ pb: 4 }}>
        <CustomCard sx={{ padding: '40px !important' }}>
          <HeadingWraper handleSave={submitSave} title="Footer Menus" />
          <Typography
            variant="body1"
            color="var(--black)"
            sx={{ fontSize: '17px', mb: 2, fontWeight: 'bold' }}
          >
            Columns
          </Typography>
          <Box sx={{ borderRadius: '6px' }}>
            {menus?.map((menu, index) => (
              <ColumnBlock
                key={index}
                menu={menu}
                index={index}
                handleChange={handleChange}
                handleMenuItemDelete={handleMenuItemDelete}
                handleColumnDelete={handleColumnDelete}
                handleAddMenuItem={handleAddMenuItem}
              />
            ))}
          </Box>
          <Box
            sx={{
              display: 'flex',
              borderTop: '1px solid var(--brown)',
              mt: 3,
            }}
          >
            <Button
              variant="outlined"
              sx={{
                border: '1px solid var(--brown)',
                mt: 1,
                textTransform: 'capitalize',
              }}
              onClick={handleShowModal}
            >
              <Stack direction="row" alignItems="center" gap="10px">
                <AddIcon sx={{ color: 'var(--brown)', fontSize: '22px' }} />
                <Typography variant="body1" color="var(--brown)">
                  Add Column
                </Typography>
              </Stack>
            </Button>
          </Box>
        </CustomCard>
      </Box>
    </>
  )
}

export default FooterSettings
