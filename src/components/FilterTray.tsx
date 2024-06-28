/* eslint-disable react-hooks/exhaustive-deps */

'use client'

import React, { useEffect, useState } from 'react'
import TuneRoundedIcon from '@mui/icons-material/TuneRounded'
import {
  Box,
  Drawer,
  IconButton,
  Checkbox as MuiCheckbox,
  Radio,
  RadioGroup,
  Slider,
  FormGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
  Button,
  CheckboxProps,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { Close } from '@mui/icons-material'

const Checkbox = styled(MuiCheckbox)<CheckboxProps>(() => ({
  color: 'var(--brown)',
  '&.Mui-checked': {
    color: 'var(--brown)',
  },
}))

export default function FilterTray(props: any) {
  const { filters } = props
  const [allFilters, setAllFilters] = useState([] as any)
  const [open, setOpen] = React.useState(false)

  const [value, setValue] = React.useState<number[]>([20, 37])

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[])
  }

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  const transformedData = filters?.reduce((acc: any, item: any) => {
    const existingType = acc.find((entry: any) => entry.type === item.type)
    if (existingType) {
      existingType.filters.push({ filter: item.filter })
    } else {
      acc.push({
        type: item.type,
        filters: [{ filter: item.filter }],
      })
    }

    return acc
  }, [])

  useEffect(() => {
    setAllFilters(transformedData)
  }, [filters])
  return (
    <Box>
      <IconButton
        onClick={toggleDrawer(true)}
        id="resort-filter"
        aria-label="Resort Filter"
      >
        <TuneRoundedIcon
          sx={{ fontSize: { xs: '25px', md: '45px' }, color: 'var(--brown)' }}
        />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        <Box
          sx={{
            width: { xs: '100vw', md: '400px' },
            px: '40px',
            py: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          <Box>
            <IconButton onClick={toggleDrawer(false)}>
              <Close />
            </IconButton>
          </Box>
          {allFilters?.map((filter: any, index: number) => {
            if (filter?.type?.toLowerCase() === 'distance from city') {
              return (
                <>
                  <FormControl key={`tray1_${index}`}>
                    <FormLabel id="demo-radio-buttons-group-label">
                      {filter?.type}
                    </FormLabel>
                    <FormGroup sx={{ ml: '10px' }}>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                      >
                        {filter?.filters?.map((fil: any, ind: number) => (
                          <FormControlLabel
                            key={ind}
                            value={fil?.filter}
                            control={<Radio />}
                            label={fil?.filter}
                          />
                        ))}
                      </RadioGroup>
                    </FormGroup>
                  </FormControl>
                  <Slider
                    getAriaLabel={() => 'Distance slider'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={(distanceValue: number) =>
                      `${distanceValue}KM`
                    }
                  />
                </>
              )
            }
            return (
              <FormControl key={`tray2_${index}`}>
                <FormLabel>{filter?.type}</FormLabel>
                <FormGroup sx={{ ml: '10px' }}>
                  {filter?.filters?.map((fil: any, ind: number) => (
                    <FormControlLabel
                      key={ind}
                      control={<Checkbox />}
                      label={fil?.filter}
                    />
                  ))}
                </FormGroup>
              </FormControl>
            )
          })}

          <FormControl
            sx={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              flexGrow: 2,
              gap: 2,
            }}
          >
            <Button
              sx={{
                bgcolor: 'var(--blue)',
                color: 'white',
                textAlign: 'center',
                fontSize: '18px',
                '&:hover': {
                  backgroundColor: 'var(--brown) !important',
                },
                flexGrow: 1,
              }}
              onClick={toggleDrawer(false)}
              title="Apply Filters"
              aria-label="Apply Filters"
            >
              Reset
            </Button>
            <Button
              sx={{
                bgcolor: 'var(--brown)',
                color: 'white',
                textAlign: 'center',
                fontSize: '18px',
                '&:hover': {
                  backgroundColor: 'var(--blue) !important',
                },
                flexGrow: 1,
              }}
              onClick={toggleDrawer(false)}
              title="Apply Filters"
              aria-label="Apply Filters"
            >
              Apply Filters
            </Button>
          </FormControl>
        </Box>
      </Drawer>
    </Box>
  )
}
