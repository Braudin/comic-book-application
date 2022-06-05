import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { resources } from '../../../help/global'
import { getFetch } from '../../../help/fetch'
import { Loading } from '../../../help/Loading'
import { NoData } from '../../../help/msjs/NoData'
import { ResulData } from './ResulData'

export const DetailsComic = () => {
  const { urlBase } = useParams()
  const navigate = useNavigate()
  const [comic, setComic] = useState({ results: [] })
  const [loading, setLoading] = useState(true)
  const [errHttp, setErrHttp] = useState({})

  useEffect(() => {
    changeDetails()
  }, [urlBase])

  useEffect(() => {
    Object.keys(errHttp).length !== 0 &&
      navigate(`/error/${errHttp.status}/${errHttp.msj}`)
  }, [errHttp])

  const changeDetails = async () => {
    setLoading(true)
    const url = `${resources.proxy}${urlBase}${resources.api_key_format}`
    await getFetch(url, setComic, setErrHttp)
    setLoading(false)
  }

  return (
    <Row className='g-4 list-comic'>
      {loading && (
        <Col>
          <Loading />
        </Col>
      )}
      {comic.results.length !== 0 && <ResulData data={comic.results} />}
      {comic.results.length === 0 && !loading && (
        <Col className='d-flex justify-content-center'>
          <NoData />
        </Col>
      )}
    </Row>
  )
}
