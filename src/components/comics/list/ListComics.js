import { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { getFetch } from '../../../help/fetch'
import { LIMIT_PAGE, resources } from '../../../help/global'
import { Loading } from '../../../help/Loading'
import { NoData } from '../../../help/msjs/NoData'
import { ItemListComic } from './ItemListComics'

export const ListComics = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [isues, setIsues] = useState({})
  const [listComics, setListComics] = useState([])
  const [loading, setLoading] = useState(false)
  const [errHttp, setErrHttp] = useState({})
  const search = searchParams.get('search') || ''

  useEffect(() => {
    changeList()
  }, [searchParams])

  useEffect(() => {
    Object.keys(errHttp).length !== 0 &&
      navigate(`/error/${errHttp.status}/${errHttp.msj}`)
  }, [errHttp])

  useEffect(() => {
    if (Object.keys(isues).length !== 0)
      isues.offset === 0
        ? setListComics([...isues.results])
        : setListComics([...listComics, ...isues.results])
  }, [isues])

  const changeList = async (offset = 0) => {
    offset === 0 && setListComics([])
    setLoading(true)
    if (search !== 'favorites') {
      const filter = `&offset=${offset}&filter=name:${search},aliases:${search}`
      const url = `${resources.issues}${filter}`
      await getFetch(url, setIsues, setErrHttp)
    } else {
      const isCreate = localStorage.getItem('favorites')
      if (isCreate) {
        const fav = JSON.parse(isCreate)
        setListComics(fav)
      }
    }

    setLoading(false)
  }

  return (
    <>
      <Row xs={1} md={3} lg={5} className='g-4 list-comic'>
        {listComics.map((comic) => (
          <Col
            key={comic.id}
            className='overflow-hidden animate__animated animate__fadeIn'>
            <ItemListComic comic={comic} />
          </Col>
        ))}
      </Row>
      <Row className='d-flex justify-content-center mt-5'>
        {listComics.length === 0 && !loading && <NoData />}
        <Col xs={12} md={6} lg={4} className='d-flex justify-content-center'>
          {loading ? (
            <Loading />
          ) : (
            <>
              {listComics.length < isues.number_of_total_results &&
                search !== 'favorites' && (
                  <Button
                    variant='primary'
                    onClick={() => changeList(isues.offset + LIMIT_PAGE)}>
                    Load more results
                  </Button>
                )}
            </>
          )}
        </Col>
      </Row>
    </>
  )
}
