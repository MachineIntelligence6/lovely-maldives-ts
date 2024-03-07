/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react'
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  TextField,
} from '@mui/material'
import Image from 'next/image'
import StarRateIcon from '@mui/icons-material/StarRate'
import collectionImg from '../../public/Images/collectionImg.jpg'

export const resorts = [{}, {}, {}, {}, {}, {}, {}, {}, {}]

export default function Gallery() {
  const [addSlice, setAddSlice] = useState<any>([])

  useEffect(() => {
    const windowWidth = window.innerWidth

    if (windowWidth < 768) {
      setAddSlice(resorts.slice(0, 3))
    } else {
      setAddSlice(resorts)
    }
  }, [])
  return (
    <Container sx={{ mt: { xs: '60px', md: '120px' } }}>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: '26px', md: '50px' },
          textAlign: 'center',
          color: 'var(--white)',
        }}
      >
        OTHER LOVELY RESORTS
      </Typography>
      <TextField
        id="standard-basic"
        label="Search"
        variant="standard"
        InputLabelProps={{
          style: { color: 'var(--brown)', fontSize: '24px', fontWeight: 400 },
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          py: 2,
          mt: '20px',
          width: '100%',
        }}
      />

      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ mt: { xs: '0', md: '40px' }, overflow: 'hidden' }}
      >
        {addSlice.map((data: any, index: number) => (
          <Grid
            item
            xs={4}
            sm={4}
            md={4}
            key={index}
            sx={{ position: 'relative', mt: '60px', borderRadius: '30px' }}
          >
            <Image
              src={collectionImg}
              alt="collection"
              className="collectionImg"
              style={{
                height: '300px',
                objectFit: 'cover',
                borderRadius: '30px',
              }}
            />
            <Box
              sx={{
                width: { xs: '100%', md: '85%' },
                height: '100%',
                bgcolor: 'rgba(150,127,93,0.3)',
                position: 'absolute',
                top: '0',
                left: '0',
                borderRadius: '30px',
              }}
            />
            <Box
              sx={{
                width: { xs: '100%', md: '85%' },
                height: '40%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                position: 'absolute',
                color: 'white',
                bottom: '0%',
                left: '0',
                fontSize: '12px',
                fontWeight: '200',
                zIndex: '99',
                bgcolor: 'var(--darkBrown)',
                borderRadius: '0 0 30px  30px',
              }}
            >
              <Typography sx={{ px: 4, fontSize: '24px' }}>
                One n Only Reethi Rah{' '}
              </Typography>
              <Box sx={{ textAlign: 'left', fontSize: '10px', px: 4 }}>
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: 'center', display: { xs: 'none', md: 'block' } }}>
        <Button
          className="buttonHover"
          sx={{
            bgcolor: 'var(--brown)',
            color: 'white',
            width: 'auto',
            mt: { xs: '60px', md: '120px' },
            px: '80px',
            py: { xs: 1, md: 2 },
            textAlign: 'center',
            fontSize: '24px',
          }}
          title="All hotels"
        >
          All Hotels
        </Button>
      </Box>
      <Box sx={{ textAlign: 'center', display: { xs: 'block', md: 'none' } }}>
        <Button
          className="buttonHover"
          sx={{
            bgcolor: 'var(--brown)',
            color: 'white',
            width: 'auto',
            mt: { xs: '60px', md: '120px' },
            px: '60px',
            py: { xs: 1, md: 2 },
            textAlign: 'center',
            fontSize: '24px',
          }}
          title="Load more"
        >
          LOAD MORE
        </Button>
      </Box>
    </Container>
  )
}
