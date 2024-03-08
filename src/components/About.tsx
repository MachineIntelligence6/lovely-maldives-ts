import Diversity2Icon from '@mui/icons-material/Diversity2'
import { Box, Container } from '@mui/material'
import Typography from '@mui/material/Typography'
// import Image from 'next/image'
import { styled } from '@mui/system'

const SparkleContainer = styled(Box)({
  width: '100%',
  height: '500px',
  background: 'var(--brown)',
})

const VLine = styled(Box)({
  position: 'relative',
  display: 'flex',
  transform: 'rotate(90deg)',
})
const HLine = styled(Box)({
  position: 'relative',
  display: 'flex',
})

const TriangleLeft = styled('div')({
  width: '0px',
  height: '0px',
  borderTop: '4px solid transparent',
  borderRight: '200px solid red',
  borderBottom: '4px solid transparent',
})

const TriangleRight = styled('div')({
  width: '0px',
  height: '0px',
  borderTop: '4px solid transparent',
  borderLeft: '200px solid red',
  borderBottom: '4px solid transparent',
})

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
function Sparkle() {
  return (
    <SparkleContainer>
      <HLine
        sx={{
          top: { xs: '50%', md: '47.5%', left: { xs: '15%', md: '22.8%' } },
        }}
      >
        <TriangleLeft />
        <TriangleRight />
      </HLine>
      <VLine sx={{ top: { xs: '80%', md: '80%' } }}>
        <TriangleLeft />
        <TriangleRight />
      </VLine>
    </SparkleContainer>
  )
}
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
                mt: { xs: '40px', md: '120px' },
                fontSize: { xs: '22px', md: '30px' },
                fontWeight: '400',
                textAlign: 'center',
                color: 'var(--brown)',
              }}
            >
              Our Promise
            </Typography>
          </Box>

          <Box
            sx={{
              bgcolor: 'var(--brown)',
              py: '50px',
              position: 'relative',
              width: { xs: '100%', md: '750px' },
              height: { xs: '200px', md: '300px' },
              borderRadius: '25px',
              mx: 'auto',
              mt: { md: '60px', xs: '40px' },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'end',
                justifyContent: 'space-between',
                color: 'white',
              }}
            >
              {/* <Typography sx={{fontSize:'24px',px:'18%'}}>hellow</Typography>
            <Typography sx={{fontSize:'24px',px:'20%'}}>hellow</Typography> */}
            </Box>
            {/* <Box sx={{ position: "absolute", left: "160px", top: "190px" }}>
                <Box
                  sx={{
                    width: "400px",
                    background: "red",
                    height: "4px",
                    borderRadius: "100%",
                  }}
                ></Box>
                <Box
                  sx={{
                    width: "400px",
                    background: "red",
                    height: "4px",
                    transform: "rotate(90deg)",
                    borderRadius: "100%",
                  }}
                ></Box>
              </Box> */}
            <Box
              sx={{
                borderRadius: '100% 100%',
                bgcolor: 'white',
                width: '7px',
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
                width: '70%',
                height: '7px',
                position: 'absolute',
                top: '50%',
                right: '15%',
                left: '15%',
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
                  height: '130px',
                  textAlign: 'center',
                  fontSize: { xs: '16px', md: '24px' },
                  pt: { xs: '3%', md: '5%' },
                  width: '50%',
                }}
              >
                Best Rates
              </Typography>
              <Typography
                sx={{
                  height: '130px',
                  textAlign: 'center',
                  fontSize: { xs: '16px', md: '24px' },
                  pt: { xs: '3%', md: '5%' },
                  width: '50%',
                }}
              >
                Top Resorts
              </Typography>
              <Typography
                sx={{
                  height: '130px',
                  textAlign: 'center',
                  fontSize: { xs: '16px', md: '24px' },
                  pt: { xs: '3%', md: '5%' },
                  width: '50%',
                }}
              >
                100% Privacy
              </Typography>
              <Typography
                sx={{
                  height: '130px',
                  textAlign: 'center',
                  fontSize: { xs: '16px', md: '24px' },
                  pt: { xs: '3%', md: '5%' },
                  width: '50%',
                }}
              >
                Rapid Service
              </Typography>
            </Box>
          </Box>
          {/* <Sparkle /> */}
        </Box>
      </Container>
    </div>
  )
}
