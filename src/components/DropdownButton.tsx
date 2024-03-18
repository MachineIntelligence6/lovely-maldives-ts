/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import React from 'react'
import TuneRoundedIcon from '@mui/icons-material/TuneRounded'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import { Box } from '@mui/material'

const options = ['Luxury Resorts', 'Honeymoon', 'Private Island']

export default function DropdownButton() {
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef<any>(null)
  const [selectedIndex, setSelectedIndex] = React.useState(1)

  // const handleClick = () => {
  //   console.info(`You clicked ${options[selectedIndex]}`)
  // }

  const handleMenuItemClick = (index: any) => {
    setSelectedIndex(index)
    setOpen(false)
  }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: any) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  return (
    <>
      <Box ref={anchorRef} aria-label="Button group with a nested menu">
        {/* <Button onClick={handleClick}>{options[selectedIndex]}</Button> */}
        <Box
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <TuneRoundedIcon
            sx={{ fontSize: { xs: '25px', md: '45px' }, color: 'var(--white)' }}
          />
        </Box>
      </Box>
      <Popper
        sx={{
          zIndex: 1,
          bgcolor: 'white',
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      // disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={() => handleMenuItemClick(index)}
                      sx={{ color: 'var(--white)', fontSize: '24px' }}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}
