import { Container, Subtitle, Title } from './styles'

interface HighlightProps {
  title: string
  subtitile: string
}

export function Highlight({ title, subtitile }: HighlightProps) {
  return (
    <Container>
      <Title>{title}</Title>

      <Subtitle>{subtitile}</Subtitle>
    </Container>
  )
}
