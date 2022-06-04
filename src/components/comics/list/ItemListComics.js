import { Card } from 'react-bootstrap'

export const ItemListComic = () => {
  return (
    <Card>
      <Card.Img
        variant='top'
        src='https://comicvine.gamespot.com/a/uploads/scale_small/0/4/32659-4571-36430-1-superman-the-man-of.jpg'
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>Some quick exam</Card.Text>
      </Card.Body>
    </Card>
  )
}
