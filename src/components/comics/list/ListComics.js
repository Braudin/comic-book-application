import { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { LIMIT_PAGE, resources } from '../../../help/global'
import { Loading } from '../../../help/Loading'
import { ItemListComic } from './ItemListComics'

export const ListComics = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [isues, setIsues] = useState({})
  const [listComics, setListComics] = useState([])
  const [loading, setLoading] = useState(false)
  const [errHttp, setErrHttp] = useState({})

  useEffect(() => {
    changeList()
  }, [searchParams])

  useEffect(() => {
    Object.keys(errHttp).length !== 0 &&
      navigate(`/error/${errHttp.status}/${errHttp.msj}`, { replace: true })
  }, [errHttp])

  useEffect(() => {
    if (Object.keys(isues).length !== 0)
      isues.offset === 0
        ? setListComics([...isues.results])
        : setListComics([...listComics, ...isues.results])
  }, [isues])

  const changeList = (offset = 0) => {
    offset === 0 && setListComics([])
    setLoading(true)
    const search = searchParams.get('search')
    const filter =
      search?.length !== 0 &&
      `&offset=${offset}&filter=name:${search},aliases:${search}`
    const url = `${resources.issues}${filter}`
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          const err = new Error(res.statusText)
          err.status = res.status
          err.msj = res.statusText
          throw err
        }
        return res.json()
      })
      .then((res) => {
        console.log(res)
        setIsues(res)
      })
      .catch((err) =>
        setErrHttp(
          err.status ? err : { status: 0, msj: 'ERR_NAME_NOT_RESOLVED' }
        )
      )
      .finally((end) => setLoading(false))
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
        <Col xs={12} md={6} lg={4} className='d-flex justify-content-center'>
          {loading ? (
            <Loading />
          ) : (
            <>
              {listComics.length < isues.number_of_total_results && (
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
