/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */

'use client'

import React, { Fragment, useEffect, useState } from 'react'
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@mui/material'
import styled from '@emotion/styled'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { usePathname, useRouter } from 'next/navigation'
import Logo from './Logo'
import SectionTitle from '../common/SectionTitle'
import menuItems from '../navigation-menus'
// import { toggleHamburger } from "@/redux/slices/hamburger";

const SidebarMainBox = styled(Box)(({ theme }) => ({
  height: '100vh',
  backgroundColor: 'white',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1000,
  bottom: 0,
  overflowY: 'auto',
  overflowX: 'hidden',
  boxShadow: '0px 2px 4px 0px rgba(165, 163, 174, 0.30)',
  transition: 'all .3s ease-in-out',
}))

function Sidebar() {
  // const theme = useTheme()
  // const dispatch = useDispatch();
  const [openMenus, setOpenMenus] = useState({
    mainActive: null,
    subMenus: [],
  })
  const pathname = usePathname()
  const router = useRouter()
  const [showSidebar, setShowSidebar] = useState(false)
  // const showSidebar = useSelector((state: any) => state.hamburger.show);

  useEffect(() => {
    let activeInd = 0
    const activeSubIndexes = [] as any
    menuItems?.map((menuItem: any, index: number) => {
      if (menuItem?.path) {
        if (pathname?.split('/')?.[2] === menuItem?.path?.split('/')?.[1]) {
          activeInd = index
        }
      } else if (menuItem?.children?.length > 0) {
        menuItem.children.map((child: any, childIndex: number) => {
          if (pathname?.split('/')?.[2] === child?.path?.split('/')?.[1]) {
            activeInd = index
            activeSubIndexes.push(`${index}.${childIndex}`)
          }
        })
      }
    })

    if (activeInd !== -1) {
      setOpenMenus({
        ...openMenus,
        mainActive: activeInd as any,
        subMenus: [...(openMenus?.subMenus ?? []), ...activeSubIndexes] as any,
      })
    }
  }, [pathname])

  const handleMenuClick = (type: any, index: number) => {
    if (type === 'main') {
      if (openMenus?.mainActive === index) {
        setOpenMenus({ ...openMenus, mainActive: null })
      } else {
        setOpenMenus({ ...openMenus, mainActive: index as any })
      }
    } else if (openMenus.subMenus.includes(index as never)) {
      setOpenMenus({
        ...openMenus,
        subMenus: openMenus?.subMenus?.filter((item) => item !== index),
      })
    } else {
      setOpenMenus({
        ...openMenus,
        subMenus: [...openMenus.subMenus, index] as any,
      })
    }
  }

  const renderSubMenuItems = (
    submenus: any,
    depth: any,
    parentIndex: number
  ) => {
    return submenus?.map((submenu: any, subIndex: number) => (
      <Fragment key={subIndex}>
        {submenu?.sectionTitle ? (
          <SectionTitle title={submenu?.sectionTitle} />
        ) : (
          <div>
            <ListItem
              button
              onClick={() => {
                if (submenu?.children?.length > 0) {
                  handleMenuClick('sub', `${parentIndex}.${subIndex}` as any)
                } else {
                  handleMenuClick('sub', `${parentIndex}.${subIndex}` as any)
                  router.push(`/${submenu?.path}`, { scroll: false })
                }
              }}
              sx={{
                pl: '2.8rem',
                height: '40px',
                pr: '4px',
                borderRadius: '6px',
                // backgroundColor: openMenus?.subMenus?.includes(
                //   (parentIndex + '.' + subIndex) as never
                // )
                //   ? 'var(--brown-light)'
                //   : 'transparent',
              }}
            >
              {submenu.icon && (
                <ListItemIcon sx={{ minWidth: '30px' }}>
                  {submenu.icon}
                </ListItemIcon>
              )}
              <ListItemText
                primary={submenu.title}
                sx={{
                  fontSize: '15px',
                  fontWeight: 400,
                  fontFamily: 'Montserrat',
                  color: '#696969',
                  '.css-10hburv-MuiTypography-root, & .css-yb0lig': {
                    lineHeight: '22px',
                  },
                }}
              />
              {submenu.children &&
                (openMenus?.subMenus?.includes(
                  `${parentIndex}.${subIndex}` as never
                ) ? (
                  <ExpandMore sx={{ color: '#696969' }} />
                ) : (
                  <ChevronRightIcon sx={{ color: '#696969' }} />
                ))}
            </ListItem>
            {submenu.children && (
              <Collapse
                in={openMenus?.subMenus?.includes(
                  `${parentIndex}.${subIndex}` as never
                )}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {renderSubMenuItems(
                    submenu.children,
                    depth + 1,
                    `${parentIndex}.${subIndex}` as any
                  )}
                </List>
              </Collapse>
            )}
          </div>
        )}
      </Fragment>
    ))
  }

  const renderMenuItems = (newMenuItems: any) => {
    return newMenuItems?.map((menuItem: any, index: number) => (
      <Fragment key={index}>
        {menuItem?.sectionTitle ? (
          <SectionTitle title={menuItem?.sectionTitle} />
        ) : (
          <div>
            <ListItem
              button
              onClick={() => {
                if (menuItem?.children?.length > 0) {
                  handleMenuClick('main', index)
                } else {
                  handleMenuClick('main', index)
                  router.push(`/${menuItem?.path}`, { scroll: false })
                }
              }}
              sx={{
                pl: '16px',
                height: '40px',
                pr: '4px',
                mb: 1,
                background:
                  openMenus.mainActive === index
                    ? 'var(--brown)'
                    : 'transparent',
                borderRadius: '6px',
                '&:hover': {
                  background:
                    openMenus.mainActive === index
                      ? 'var(--brown)'
                      : 'rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: '1px',
                  pr: '8px',
                  '& .css-1vbwjd7-MuiSvgIcon-root, &': {
                    color: openMenus.mainActive === index ? 'white' : '#696969',
                  },
                  '& .sidebar-icon': {
                    color: openMenus.mainActive === index ? 'white' : '#696969',
                  },
                }}
              >
                {menuItem.icon}
              </ListItemIcon>
              <ListItemText
                primary={menuItem.title}
                className="listItemText"
                sx={{
                  fontFamily: 'Montserrat',
                  '& .css-10hburv-MuiTypography-root, &': {
                    fontSize: '15px !important',
                    color: openMenus.mainActive === index ? 'white' : '#696969',
                    lineHeight: '22px',
                    fontWeight: 400,
                  },
                }}
              />
              {menuItem.children &&
                (openMenus.mainActive === index ? (
                  <ExpandMore
                    sx={{
                      color:
                        openMenus.mainActive === index ? 'white' : '#696969',
                    }}
                  />
                ) : (
                  <ChevronRightIcon
                    sx={{
                      color:
                        openMenus.mainActive === index ? 'white' : '#696969',
                    }}
                  />
                ))}
            </ListItem>
            {menuItem.children && (
              <Collapse
                in={openMenus.mainActive === index}
                timeout="auto"
                unmountOnExit
              >
                {renderSubMenuItems(menuItem.children, 1, index)}
              </Collapse>
            )}
          </div>
        )}
      </Fragment>
    ))
  }

  return (
    <>
      {showSidebar && (
        <Box
          // onClick={() => dispatch(toggleHamburger(false))}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: 'rgba(0,0,0,0.3)',
            zIndex: 999,
          }}
        />
      )}
      <SidebarMainBox
        sx={{
          width: '25%',
          maxWidth: showSidebar
            ? '265px'
            : { xs: '0px', md: '0px', lg: '265px' },
          minWidth: showSidebar
            ? '265px'
            : { xs: '0px', md: '0px', lg: '265px' },
          '&::-webkit-scrollbar': {
            width: '4px',
            height: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#888',
            width: '3px',
            height: '3px',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
            borderRadius: '4px',
          },
        }}
      >
        <Logo />
        <Box sx={{ width: '100%', px: '14px' }}>
          <List>{renderMenuItems(menuItems)}</List>
        </Box>
      </SidebarMainBox>
    </>
  )
}

export default Sidebar
