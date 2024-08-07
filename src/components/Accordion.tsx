/* eslint-disable react/no-array-index-key */
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function FaqsAccordion(props: any) {
  const { faqs, refs } = props

  return (
    <Box sx={{ mt: { xs: '40px', md: '60px' } }}>
      {faqs?.map((faq: any, index: number) => (
        <Box key={faq?.category} sx={{ mb: '40px' }}>
          <Typography
            sx={{ fontWeight: 600, fontSize: '20px', mb: 3, color: 'black' }}
            ref={(el) => {
              if (el) refs.current[index] = el
            }}
          >
            {faq?.category}
          </Typography>
          {faq?.questions?.map((que: any, ind: number) => (
            <Accordion
              key={ind}
              sx={{
                py: 1,
                boxShadow: 'none',
                borderBottom: '1px solid rgb(223, 223, 223)',
                borderTop: 'none',
                // mx: 4,
              }}
            >
              <AccordionSummary
                sx={{
                  fontWeight: 600,
                  // px: '0 !important',
                  fontFamily: 'Century Gothic',
                  px: { xs: 2, md: 4 },
                }}
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: 'var(--brown)',
                      fontSize: { xs: '25px', md: '35px' },
                      bgcolor: { xs: '#E5E4E2', md: 'white' },
                      borderRadius: { xs: '100%', md: 'none' },
                      // px: 4,
                    }}
                  />
                }
                aria-controls="panel1-content"
                id="panel1-header"
              >
                {que.question}
              </AccordionSummary>
              <AccordionDetails
                sx={{ fontFamily: 'Century Gothic', px: { xs: 2, md: 4 } }}
              >
                <Box
                  sx={{
                    bgcolor: 'transparent',
                    '& *': {
                      bgcolor: 'transparent !important',
                    },
                  }}
                  dangerouslySetInnerHTML={{
                    __html: que?.answer,
                  }}
                />
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      ))}
    </Box>
  )
}
