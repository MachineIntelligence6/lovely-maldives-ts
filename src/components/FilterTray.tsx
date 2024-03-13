'use client'

import React from 'react'
import TuneRoundedIcon from '@mui/icons-material/TuneRounded'
import {
  Box,
  Drawer,
  IconButton,
  Checkbox,
  Radio,
  RadioGroup,
  Slider,
  FormGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
} from '@mui/material'

export default function FilterTray() {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  return (
    <Box>
      <IconButton onClick={toggleDrawer(true)}>
        <TuneRoundedIcon
          sx={{ fontSize: { xs: '25px', md: '45px' }, color: 'var(--white)' }}
        />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        <Box
          sx={{
            width: '400px',
            px: '40px',
            py: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
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
          <Slider defaultValue={10} aria-label="Distance slider" />

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
        </Box>
      </Drawer>
    </Box>
  )
}
