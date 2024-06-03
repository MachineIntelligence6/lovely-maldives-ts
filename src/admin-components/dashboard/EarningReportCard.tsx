'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import {
  Button,
  Menu,
  MenuItem,
  Stack,
  Box,
  Tab,
  Typography,
  CardContent,
} from '@mui/material'
import { TabList, TabPanel, TabContext } from '@mui/lab'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import LocalHotelIcon from '@mui/icons-material/LocalHotel'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import MovingIcon from '@mui/icons-material/Moving'
import LocalAirportIcon from '@mui/icons-material/LocalAirport'
import { useSession } from 'next-auth/react'

import { hexToRGBA } from '@/utils/hexToRgba'
import { CustomCard } from '../styled/CustomCard'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const tabData = [
  {
    type: 'Hotel Bookings',
    avatarIcon: (
      <LocalHotelIcon sx={{ color: 'var(--brown)', fontSize: '25px' }} />
    ),
    series: [
      {
        name: 'series-1',
        data: [28, 10, 45, 38, 15, 30, 35, 28, 8, 10, 11, 12],
      },
    ],
  },
  {
    type: 'VIP City',
    avatarIcon: (
      <LocationCityIcon sx={{ color: 'var(--brown)', fontSize: '25px' }} />
    ),
    series: [
      {
        name: 'series-2',
        data: [35, 25, 15, 40, 42, 25, 48, 8, 30, 10, 11, 12],
      },
    ],
  },
  {
    type: 'Travel Counsellings',
    avatarIcon: <MovingIcon sx={{ color: 'var(--brown)', fontSize: '25px' }} />,
    series: [
      {
        name: 'series-2',
        data: [35, 25, 15, 40, 42, 25, 48, 8, 30, 10, 11, 12],
      },
    ],
  },
  {
    type: 'Aitport Concierge',
    avatarIcon: (
      <LocalAirportIcon sx={{ color: 'var(--brown)', fontSize: '25px' }} />
    ),
    series: [
      {
        name: 'series-2',
        data: [35, 25, 15, 40, 42, 25, 48, 8, 30, 10, 11, 12],
      },
    ],
  },
]

const renderTabs = (value: any) => {
  const { data } = useSession()

  console.log('data is ', data)
  return tabData.map((item, index) => {
    return (
      <Tab
        key={index}
        value={item?.type}
        label={
          <Box
            sx={{
              width: 110,
              height: 94,
              borderWidth: 1,
              display: 'flex',
              alignItems: 'center',
              borderRadius: '10px',
              flexDirection: 'column',
              justifyContent: 'center',
              borderStyle: item?.type === value ? 'solid' : 'dashed',
              borderColor: item?.type === value ? '#00318B' : '#DBDADE',
            }}
          >
            <span>{item?.avatarIcon}</span>
            <Typography
              sx={{
                fontWeight: 500,
                color: 'text.secondary',
                textTransform: 'capitalize',
                fontSize: '14px',
                px: 1,
              }}
            >
              {item?.type}
            </Typography>
          </Box>
        }
      />
    )
  })
}

const renderTabPanels = (value: any, theme: any, options: any, colors: any) => {
  return tabData.map((item, index) => {
    return (
      <TabPanel key={index} value={item?.type}>
        <Chart
          options={options}
          series={item?.series}
          type="bar"
          width="100%"
          height={263}
        />
      </TabPanel>
    )
  })
}

function EarningReportCard() {
  const [value, setValue] = useState('Hotel Bookings')
  const [anchorEl, setAnchorEl] = useState(null)
  const [selectedOption, setSelectedOption] = useState('')

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleOptionSelect = (option: any) => {
    setSelectedOption(option)
    handleClose()
  }

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue)
  }
  const colors = Array(9).fill(hexToRGBA('#00318B', 0.16))

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      animations: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        distributed: true,
        columnWidth: '35%',
        startingShape: 'rounded',
        dataLabels: { position: 'top' },
      },
    },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: {
      offsetY: -30,
      formatter: (val: any) => `${val}k`,
      style: {
        fontWeight: 500,
        colors: ['grey'],
        fontSize: '18px',
      },
    },
    colors,
    states: {
      hover: {
        filter: { type: 'none' },
      },
      active: {
        filter: { type: 'none' },
      },
    },
    grid: {
      show: false,
      padding: {
        top: 20,
        left: -5,
        right: -8,
        bottom: -12,
      },
    },
    xaxis: {
      axisTicks: { show: false },
      //   axisBorder: { color: theme.palette.divider },
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      labels: {
        style: {
          colors: '#4B465C', // theme.palette.text.disabled,
          fontFamily: 'Public Sans',
          fontSize: '14px', // theme.typography.body2.fontSize
        },
      },
    },
    yaxis: {
      min: 0,
      max: 50,
      tickAmount: 5,
      labels: {
        formatter: (val: any) => `${val}k`,
        offsetX: -15,
        style: {
          colors: '#4B465C', // theme.palette.text.disabled,
          //   fontFamily:  '', //theme.typography.fontFamily,
          fontSize: '13px', // theme.typography.body2.fontSize
        },
      },
    },
    responsive: [
      {
        // breakpoint: theme.breakpoints.values.sm,
        options: {
          plotOptions: {
            bar: { columnWidth: '35.8px' },
          },
          grid: {
            padding: { right: 20 },
          },
        },
      },
    ],
  }

  return (
    <CustomCard sx={{ p: '24px' }}>
      <Stack direction="row" justifyContent="space-between">
        <Box>
          <Typography
            component="div"
            variant="h5"
            sx={{
              fontSize: '18px',
              fontWeight: '600',
              lineHeight: '24px',
              color: '#4B465C',
            }}
          >
            Earning Reports
          </Typography>
          <Typography
            component="div"
            variant="body2"
            sx={{
              fontSize: '13px',
              fontWeight: '400',
              lineHeight: '20px',
              color: '#4B465C',
              opacity: '.7',
            }}
          >
            Yearly Earnings Overview
          </Typography>
        </Box>
        <div>
          <Button
            onClick={handleClick}
            sx={{
              color: '#A8AAAE',
              fontSize: '15px',
              borderRadius: '6px',
              width: '100px',
              height: '38px',
              bgcolor: 'rgba(168, 170, 174, 0.16)',
            }}
          >
            2022
            <KeyboardArrowDownIcon
              sx={{
                fontSize: '15px',
                ml: '10px',
                color: '#A8AAAE',
              }}
            />
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{
              sx: {
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              },
            }}
          >
            <MenuItem onClick={() => handleOptionSelect('Export')}>
              2022
            </MenuItem>
          </Menu>
        </div>
      </Stack>
      <CardContent sx={{ '& .MuiTabPanel-root': { p: 0 } }}>
        <TabContext value={value}>
          <TabList
            variant="scrollable"
            scrollButtons="auto"
            onChange={handleChange}
            aria-label="earning report tabs"
            sx={{
              border: '0 !important',
              '& .MuiTabs-indicator': { display: 'none' },
              '& .MuiTab-root': {
                p: 0,
                minWidth: 0,
                borderRadius: '10px',
                '&:not(:last-child)': { mr: 4 },
              },
            }}
          >
            {renderTabs(value)}
          </TabList>
          {/* {renderTabPanels(value, options, colors)} */}
          {tabData.map((item, index) => {
            return (
              <TabPanel key={index} value={item?.type}>
                <Chart
                  options={options}
                  series={item?.series}
                  type="bar"
                  width="100%"
                  height={263}
                />
              </TabPanel>
            )
          })}
        </TabContext>
      </CardContent>
    </CustomCard>
  )
}

export default EarningReportCard
