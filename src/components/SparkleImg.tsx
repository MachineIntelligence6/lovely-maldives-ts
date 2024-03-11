import { Container } from '@mui/system'

export default function SparkleImg() {
  return (
    <Container sx={{ width: '400px', height: 'auto', bgcolor: 'var(--blue)' }}>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1080 1080"
        width="100%"
        height="100%"
      >
        <polygon
          className="cls-1"
          points="544 540 540 818.72 536 540 544 540 544 540"
        />
        <polygon
          className="cls-1"
          points="536 540 540 261.28 544 540 536 540 536 540"
        />
        <polygon
          className="cls-1"
          points="540 544 261.28 540 540 536 540 544 540 544"
        />
        <polygon
          className="cls-1"
          points="540 536 818.72 540 540 544 540 536 540 536"
        />
      </svg>
    </Container>
  )
}
