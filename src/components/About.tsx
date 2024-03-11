import Diversity2Icon from '@mui/icons-material/Diversity2'
import { Box, Container } from '@mui/material'
import Typography from '@mui/material/Typography'
// import Image from 'next/image'

export default function About() {
  return (
    <div>
      <Container
        sx={{
          px: { xs: '20px !important', md: '120px !important' },
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            mt: { xs: '60px', md: '120px' },
            mx: 'auto',
            width: { xs: '100%', md: '750px' },
            color: 'var(--white)',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '22px', md: '30px' },
              fontWeight: '400',
              textAlign: 'center',
            }}
          >
            ABOUT US
          </Typography>
          <Box>
            <Box sx={{ textAlign: 'center' }}>
              {/* <Image
                src="/Images/maldivesLogo.png"
                height={60}
                width={100}
                alt="Lovely Maldives"
              /> */}
              <Diversity2Icon
                sx={{
                  fontSize: '55px',
                  mt: { xs: '30px', md: '60px' },
                  color: 'var(--brown)',
                }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: { xs: '18px', md: '22px' },
                fontWeight: '200',
                mt: { xs: '30px', md: '60px' },
                textAlign: 'justify',
              }}
            >
              Lovely Maldives, a distinguished travel agency from the Maldives
              strives to redene Luxury travel experiences in the Maldives. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                mt: { xs: '40px', md: '60px' },
                fontSize: { xs: '22px', md: '30px' },
                fontWeight: '400',
                textAlign: 'center',
                textTransform: 'uppercase',
                color: 'var(--brown)',
              }}
            >
              Our Promise
            </Typography>
          </Box>
          <Box
            sx={{
              width: '100%',
              background: 'var(--brown)',
              borderRadius: '25px',
            }}
          >
            <Box
              sx={{
                py: '50px',
                position: 'relative',
                width: { xs: '300px', md: '400px' },
                height: { xs: '300px', md: '400px' },
                mx: 'auto',
                mt: { md: '60px', xs: '40px' },
              }}
            >
              <Box
                sx={{
                  borderRadius: '100% 100%',
                  bgcolor: 'white',
                  width: '5px',
                  position: 'absolute',
                  top: '15%',
                  bottom: '15%',
                  left: '50%',
                }}
              />
              <Box
                sx={{
                  borderRadius: '100% 100%',
                  bgcolor: 'white',
                  width: '100%',
                  height: '5px',
                  position: 'absolute',
                  top: '50%',
                  right: '15%',
                  left: '0%',
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  color: 'white',
                }}
              >
                <Typography
                  sx={{
                    pr: '20px',
                    textAlign: 'right',
                    fontSize: { xs: '16px', md: '24px' },
                    pt: { xs: '18%', md: '20%' },
                    width: '50%',
                  }}
                >
                  Best Rates
                </Typography>
                <Typography
                  sx={{
                    pl: '20px',
                    textAlign: 'left',
                    fontSize: { xs: '16px', md: '24px' },
                    pt: { xs: '18%', md: '20%' },
                    width: '50%',
                  }}
                >
                  Top Resorts
                </Typography>
                <Typography
                  sx={{
                    pr: '20px',
                    textAlign: 'right',
                    fontSize: { xs: '16px', md: '24px' },
                    pt: { xs: '16%', md: '18%' },
                    width: '50%',
                  }}
                >
                  100% Privacy
                </Typography>
                <Typography
                  sx={{
                    pl: '20px',
                    textAlign: 'left',
                    fontSize: { xs: '16px', md: '24px' },
                    pt: { xs: '16%', md: '18%' },
                    width: '50%',
                  }}
                >
                  Rapid Service
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  )
}
