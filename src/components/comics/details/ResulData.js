import { useEffect, useState } from 'react'
import { Button, Col, Image } from 'react-bootstrap'
import { ItemDetails } from './item-details/ItemDetails'

export const ResulData = ({ data }) => {
  const [showFavorites, setShowFavorites] = useState(true)
  const isCreate = localStorage.getItem('favorites')
  useEffect(() => {
    if (isCreate) {
      const fav = JSON.parse(isCreate)
      const result = fav.filter((x) => x.id === data.id)
      result.length !== 0 && setShowFavorites(false)
    }
  }, [])

  const addFavorites = () => {
    if (!isCreate) {
      localStorage.setItem('favorites', JSON.stringify([data]))
    } else {
      localStorage.setItem(
        'favorites',
        JSON.stringify([...JSON.parse(isCreate), data])
      )
    }
    setShowFavorites(false)
  }

  const removeFavorites = () => {
    const fav = JSON.parse(isCreate)
    const result = fav.filter((x) => x.id !== data.id)
    localStorage.setItem('favorites', JSON.stringify(result))
    setShowFavorites(true)
  }

  return (
    <>
      <Col md={4} lg={5} className='d-flex justify-content-end order-md-last'>
        <Image src={data.image.original_url} fluid />
      </Col>
      <Col md={8} lg={7}>
        {data.character_credits.length !== 0 && (
          <ItemDetails title='Characters' data={data.character_credits} />
        )}
        {data.team_credits.length !== 0 && (
          <ItemDetails title='Team' data={data.team_credits} />
        )}
        {data.location_credits.length !== 0 && (
          <ItemDetails title='Location' data={data.location_credits} />
        )}
        {data.concept_credits.length !== 0 && (
          <ItemDetails title='Concepts' data={data.concept_credits} />
        )}
        {data.person_credits.length !== 0 && (
          <ItemDetails title='Creators' data={data.person_credits} />
        )}
        {showFavorites ? (
          <Button
            variant='primary'
            onClick={() => addFavorites()}
            className='mt-3'>
            ⭐ Add to favorites
          </Button>
        ) : (
          <Button
            variant='primary'
            onClick={() => removeFavorites()}
            className='mt-3'>
            ⭐ Remove of favorites
          </Button>
        )}
      </Col>
    </>
  )
}
