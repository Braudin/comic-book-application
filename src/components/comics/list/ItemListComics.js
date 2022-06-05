import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { dateOptios, language } from '../../../help/global'

export const ItemListComic = ({ comic }) => {
  return (
    <Card
      className='card-list h-100'
      as={Link}
      to={`/details/${encodeURIComponent(comic.api_detail_url)}`}>
      <Card.Img variant='top' src={comic.image.small_url} />
      <Card.Body>
        <Card.Title>
          {`# ${comic.issue_number} ${comic.name ? comic.name : ''}`}
        </Card.Title>
        <Card.Text>
          {new Date(comic.date_added).toLocaleDateString(language, dateOptios)}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
