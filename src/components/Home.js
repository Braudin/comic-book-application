import { useRef, useState } from 'react'
import { Col, Form, InputGroup, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()
  const searchRef = useRef(null)
  const [search, setSearch] = useState('')

  const redirectSearch = () => {
    search.length > 3 || search.length === 0
      ? navigate(`/?search=${search}`, { replace: true })
      : animationError()
  }

  const animationError = () => {
    searchRef.current.classList.add('animate__animated', 'animate__shakeX')
    setTimeout(
      () =>
        searchRef.current.classList.remove(
          'animate__animated',
          'animate__shakeX'
        ),
      1500
    )
  }

  return (
    <Row className='justify-content-center py-4  border-bottom header w-100'>
      <Col xs='12' md='8' lg='4' className='text-center'>
        <h1>ComicBook</h1>
        <InputGroup className='mb-3' ref={searchRef}>
          <Form.Control
            type='text'
            value={search}
            id='value'
            placeholder=' Search comic: Name | Aliases'
            onChange={(event) => setSearch(event.target.value)}
            onKeyUp={(event) => event.key === 'Enter' && redirectSearch()}
          />
          <InputGroup.Text role='button' onClick={redirectSearch}>
            Enter
          </InputGroup.Text>
          <InputGroup.Text role='button' onClick={redirectSearch}>
            &#11088;
          </InputGroup.Text>
        </InputGroup>
      </Col>
    </Row>
  )
}
