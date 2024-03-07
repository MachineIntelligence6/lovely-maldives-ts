/* eslint-disable react/no-array-index-key */
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const visa = [
  {
    que: 'What is the maximum visa period for tourist visa?',
    ans: 'Visiting Maldives is totally free and tourists can get on-arrival Visa.',
  },
  {
    que: 'How much does it cost for Tourist Visa?',
    ans: 'Visiting Maldives is totally free and tourists can get on-arrival Visa.',
  },
]
export const legal = [
  {
    que: 'Can we bring Alcohol to Maldives?',
    ans: 'Visiting Maldives is totally free and tourists can get on-arrival Visa.',
  },
  {
    que: 'Is smoking allowed in The Maldives?',
    ans: 'Visiting Maldives is totally free and tourists can get on-arrival Visa.',
  },
]
export const general = [
  {
    que: 'Does it snow in Maldives?',
    ans: 'Visiting Maldives is totally free and tourists can get on-arrival Visa.',
  },
  {
    que: 'What is the general temperature in Maldives?',
    ans: 'Visiting Maldives is totally free and tourists can get on-arrival Visa.',
  },
  {
    que: 'What is the maximum visa period for tourist visa?',
    ans: 'Visiting Maldives is totally free and tourists can get on-arrival Visa.',
  },
]
export default function FaqsAccordion() {
  return (
    <Container sx={{ mt: '60px' }}>
      <Typography sx={{ fontWeight: 600, fontSize: '24px', mb: 3 }}>
        Visa and Arrival
      </Typography>
      {visa.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary
            sx={{ fontWeight: 600 }}
            expandIcon={
              <ExpandMoreIcon
                sx={{ color: 'var(--brown)', fontSize: '35px' }}
              />
            }
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {faq.que}
          </AccordionSummary>
          <AccordionDetails>{faq.ans}</AccordionDetails>
        </Accordion>
      ))}
      <Typography sx={{ fontWeight: 600, fontSize: '24px', mb: 3, mt: '40px' }}>
        Legal Questions
      </Typography>
      {legal.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary
            sx={{ fontWeight: 600 }}
            expandIcon={
              <ExpandMoreIcon
                sx={{ color: 'var(--brown)', fontSize: '35px' }}
              />
            }
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {faq.que}
          </AccordionSummary>
          <AccordionDetails>{faq.ans}</AccordionDetails>
        </Accordion>
      ))}
      <Typography sx={{ fontWeight: 600, fontSize: '24px', mb: 3, mt: '40px' }}>
        General Questions
      </Typography>
      {general.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary
            sx={{ fontWeight: 600 }}
            expandIcon={
              <ExpandMoreIcon
                sx={{ color: 'var(--brown)', fontSize: '35px' }}
              />
            }
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {faq.que}
          </AccordionSummary>
          <AccordionDetails>{faq.ans}</AccordionDetails>
        </Accordion>
      ))}
    </Container>
  )
}
