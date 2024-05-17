import React from 'react'
import Typography from '@mui/material/Typography'
import { Box, Stack } from '@mui/system'
import { CustomCard } from '../styled/CustomCard'

function TotalCardItem(props: any) {
  const { title, total } = props
  return (
    <CustomCard sx={{ height: '100px', px: { lg: '2rem' } }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Box>
          <Box
            sx={{
              width: '40px',
              height: '36px',
              bgcolor: props?.bgcolor,
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              juctifyContent: 'center',
              p: 1,
            }}
          >
            {props?.icon}
          </Box>
          <Typography
            variant="body1"
            color="var(--black)"
            sx={{ fontSize: '15px', mt: 1 }}
          >
            {title}
          </Typography>
        </Box>
        <Typography
          variant="body1"
          color="var(--black)"
          sx={{ fontSize: '30px', fontWeight: 600 }}
        >
          {total}
        </Typography>
      </Stack>
    </CustomCard>
  )
}

export default TotalCardItem
