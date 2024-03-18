import { Container } from '@mui/system'

export default function SparkleImg() {
  return (
    <Container sx={{ width: '900px', height: '300px', bgcolor: 'var(--blue)' }}>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1080 980"
      >
        <polygon
          className="cls-1"
          points="547.75 540 540 1080 532.25 540 547.75 540 547.75 540"
        />
        <polygon
          className="cls-1"
          points="532.25 540 540 0 547.75 540 532.25 540 532.25 540"
        />
        <polygon
          className="cls-1"
          points="540 547.75 0 540 540 532.25 540 547.75 540 547.75"
        />
        <polygon
          className="cls-1"
          points="540 532.25 1080 540 540 547.75 540 532.25 540 532.25"
        />
      </svg>
    </Container>
  )
}
