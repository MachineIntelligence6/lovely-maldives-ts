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
  const [allFilters, setAllFilters] = useState()
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

          <FormControl>
            <FormLabel>Property Types</FormLabel>
            <FormGroup sx={{ ml: '10px' }}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Hotels"
              />
              <FormControlLabel control={<Checkbox />} label="Hostels" />
              <FormControlLabel control={<Checkbox />} label="Resorts" />
              <FormControlLabel control={<Checkbox />} label="Villa" />

              <FormControlLabel control={<Checkbox />} label="Motels" />
              <FormControlLabel control={<Checkbox />} label="Cottage" />
            </FormGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Amenities</FormLabel>
            <FormGroup sx={{ ml: '10px' }}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Hotels"
              />
              <FormControlLabel control={<Checkbox />} label="Free Wifi" />
              <FormControlLabel control={<Checkbox />} label="Pool" />
              <FormControlLabel
                control={<Checkbox />}
                label="Breakfast included"
              />

              <FormControlLabel control={<Checkbox />} label="Free Parking" />
              <FormControlLabel control={<Checkbox />} label="Family Rooms" />
            </FormGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Hotel Class</FormLabel>

            <FormGroup sx={{ ml: '10px' }}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="7 star"
              />
              <FormControlLabel control={<Checkbox />} label="6 Star" />
              <FormControlLabel control={<Checkbox />} label="5 Star" />
              <FormControlLabel control={<Checkbox />} label="4 Star" />

              <FormControlLabel control={<Checkbox />} label="3 Star" />
              <FormControlLabel control={<Checkbox />} label="2 Star" />
              <FormControlLabel control={<Checkbox />} label="1 Star" />
            </FormGroup>
          </FormControl>
          <FormControl>
            <FormLabel id="style-label">Style</FormLabel>
            <FormGroup sx={{ ml: '10px' }}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="7 star"
              />
              <FormControlLabel control={<Checkbox />} label="Budget" />
              <FormControlLabel control={<Checkbox />} label="Mid-range" />
              <FormControlLabel control={<Checkbox />} label="Luxury" />

              <FormControlLabel
                control={<Checkbox />}
                label="Family Friendly"
              />
              <FormControlLabel control={<Checkbox />} label="Modern" />
              <FormControlLabel control={<Checkbox />} label="1 Star" />
            </FormGroup>
          </FormControl>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Distance from City
            </FormLabel>
            <FormGroup sx={{ ml: '10px' }}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="isb"
                  control={<Radio />}
                  label="Islamabad"
                />
                <FormControlLabel
                  value="lah"
                  control={<Radio />}
                  label="Lahore"
                />
                <FormControlLabel
                  value="khi"
                  control={<Radio />}
                  label="Karachi"
                />
              </RadioGroup>
            </FormGroup>
          </FormControl>
          <Slider
            getAriaLabel={() => 'Distance slider'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={(distanceValue: number) => `${distanceValue}KM`}
          />

          <FormControl sx={{ ml: '10px' }}>
            <FormLabel id="traveler-rating-radio-label">
              Traveler Rating
            </FormLabel>
            <FormGroup sx={{ ml: '10px' }}>
              <RadioGroup
                aria-labelledby="traveler-rating-radio-label"
                name="traveler-rating"
              >
                <FormControlLabel value="5+" control={<Radio />} label="5+" />
                <FormControlLabel value="4+" control={<Radio />} label="4+" />
                <FormControlLabel value="3+" control={<Radio />} label="3+" />
              </RadioGroup>
            </FormGroup>
          </FormControl>
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
