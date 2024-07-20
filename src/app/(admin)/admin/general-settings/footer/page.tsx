/* eslint-disable consistent-return */

'use client'

import React, { useEffect, useState, useTransition } from 'react'
import { Typography, Box, Button, Stack, Alert } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import HeadingWraper from '@/admin-components/common/HeadingWraper'
import { CustomCard } from '@/admin-components/styled/CustomCard'
import ColumnBlock from '@/admin-components/general-settings/ColumnBlock'
import AddTitleModal from '@/admin-components/general-settings/modals/AddTitleModal'
import {
  footerRequest,
  getFooterRequest,
} from '@/utils/api-requests/footer.request'
import CustomLoader from '@/admin-components/common/CustomLoader'
import { uploadImgToCloudinary } from '@/utils/cloudinaryImgUpload'
import useHomeBgId from '@/utils/useHomeBgId'

function FooterSettings() {
  const [isPending, startTransition] = useTransition()
  const [alertMsg, setAlertMsg] = React.useState({ type: '', message: '' })
  const [showModal, setShowModal] = useState(false)
  const [detectChange, setDetectChange] = useState(true)
  const [menus, setMenus] = useState([] as any)
  const homeBgId = useHomeBgId()

  const handleChange = async (
    index: number,
    subIndex: number,
    field: string,
    e: any
  ) => {
    if (field === 'icon') {
      const file = e.target.files?.[0]

      const formData = new FormData()
      formData.append('file', file)
      formData.append('upload_preset', 'j8epfynh')
      const res = await uploadImgToCloudinary(formData)

      if (!res?.secure_url) return
      const updatedMenus = menus.map((menu: any, i: number) => {
        if (i === index) {
          return {
            ...menu,
            menus: menu.menus.map((link: any, j: number) => {
              if (j === subIndex) {
                return {
                  ...link,
                  [field]: res?.secure_url,
                }
              }
              return link
            }),
          }
        }
        return menu
      })

      setMenus(updatedMenus)
    } else {
      const { name, value } = e.target

      const updatedMenus = menus.map((menu: any, i: number) => {
        if (i === index) {
          return {
            ...menu,
            menus: menu.menus.map((link: any, j: number) => {
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
  }

  const handleMenuItemDelete = (ind: number, subInd: number) => {
    const updatedMenus = menus.map((menu: any, i: number) => {
      if (i === ind) {
        return {
          ...menu,
          menus: menu.menus.filter((link: any, j: number) => j !== subInd),
        }
      }
      return menu
    })

    setMenus(updatedMenus)
  }

  const handleColumnDelete = (ind: number) => {
    setMenus(menus.filter((menu: any, index: number) => index !== ind))
  }

  const handleAddMenuBlock = (title: any) => {
    if (!title) return
    setMenus([
      ...menus,
      {
        title,
        menus: [{ menu: '', link: '' }],
      },
    ])
  }

  const handleAddMenuItem = (title: string) => {
    const updatedMenus = [...menus] as any
    const menuIndex = updatedMenus.findIndex(
      (menu: any) => menu.title === title
    )
    if (menuIndex !== -1) {
      updatedMenus[menuIndex]?.menus?.push({ menu: '', link: '' })
      setMenus(updatedMenus)
    }
  }

  const handleShowModal = () => setShowModal(!showModal)

  const getHeader = async () => {
    try {
      startTransition(async () => {
        const res = await getFooterRequest()
        const data = res?.data
        if (data?.status === 200) {
          setMenus(data?.data?.columns)
        } else {
          setAlertMsg({ type: 'error', message: data?.message })
          setTimeout(() => {
            setAlertMsg({ type: '', message: '' })
          }, 3000)
        }
      })
    } catch (error: any) {
      console.log('error ', error)
    }
  }

  const handleAddHeader = async () => {
    // const homeBgId = JSON.parse(localStorage.getItem('homeBgId') as any)

    try {
      startTransition(async () => {
        const res = await footerRequest({
          menus,
          homeBgId,
          title: 'Header Menu',
        })
        const data = res?.data
        if (data?.status === 201) {
          getHeader()
          // setDetectChange(false)
          setAlertMsg({ type: 'success', message: 'Data saved successfully.' })
          setTimeout(() => {
            setAlertMsg({ type: '', message: '' })
          }, 3000)
        } else {
          setAlertMsg({ type: 'error', message: data?.message })
          setTimeout(() => {
            setAlertMsg({ type: '', message: '' })
          }, 3000)
        }
      })
      // setDetectChange(false)
    } catch (error: any) {
      setAlertMsg({
        type: 'error',
        message: 'Error occured while saving data, please try again.',
      })
      setTimeout(() => {
        setAlertMsg({ type: '', message: '' })
      }, 3000)
      console.log('error ', error)
    }
  }

  useEffect(() => {
    getHeader()
  }, [])

  return (
    <>
      <AddTitleModal
        open={showModal}
        handleShowModal={handleShowModal}
        handleAddMenuBlock={handleAddMenuBlock}
      />
      <Box sx={{ pb: 4 }}>
        <CustomCard sx={{ padding: '40px !important' }}>
          {isPending && <CustomLoader />}
          {alertMsg.message && (
            <Alert sx={{ mb: 2 }} severity={alertMsg.type as any}>
              {alertMsg.message}
            </Alert>
          )}
          <HeadingWraper
            handleSave={handleAddHeader}
            title="Footer Menus"
            detectChange={detectChange}
          />
          <Typography
            variant="body1"
            color="var(--black)"
            sx={{ fontSize: '17px', mb: 2, fontWeight: 'bold' }}
          >
            Columns
          </Typography>
          <Box sx={{ borderRadius: '6px' }}>
            {menus?.map((menu: any, index: number) => (
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
