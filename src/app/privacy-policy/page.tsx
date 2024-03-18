// 'use client'

import { Box, Container, Typography } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadCrumb from '@/components/BreadCrumb'
import DropdownButton from '@/components/DropdownButton'
// import Markdown from '@/components/Markdown'
// import privacy from '@/md/privacy.md'
// import Typography from '@mui/material/Typography';
import { privacyPolicyData } from '@/components/PrivacyPolicy'
import MailBox from '@/components/MailBox'

export default function PrivacyPolicyPage() {
  return (
    <Box sx={{ pt: { xs: '0px', md: '180px' } }}>
      <Header />
      <Container
        sx={{
          maxWidth: '100% !important',
          px: { xs: '24px', md: '120px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <BreadCrumb />
        <DropdownButton />
      </Container>
      <Container
        sx={{
          mt: { xs: '60px', md: '100px' },
          maxWidth: '80%',
          px: '0 !important',
          margin: 'auto',
          '@media only screen and (min-width: 1441px)': {
            maxWidth: '85% ',
          },
        }}
      >
        <Box sx={{ mt: 7, mb: 12 }}>
          {/* <Typography variant="h3" sx={{ textAlign: 'center', mb: 6 }}>
            Privacy Policy
          </Typography> */}
          {/* <Markdown>{privacy}</Markdown> */}
          {privacyPolicyData.map((data) => {
            return (
              <Accordion sx={{ mt: '15px', py: '10px', px: '0 !important' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography sx={{ px: 1 }}>{data.heading}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ px: 1 }}>{data.title}</Typography>
                  <Typography sx={{ px: 1 }}>{data.content}</Typography>
                </AccordionDetails>
              </Accordion>
            )
          })}
        </Box>
      </Container>
      <MailBox />
      <Footer />
    </Box>
  )
}
