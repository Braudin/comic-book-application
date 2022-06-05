import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import { DetailsComic } from '../components/comics/details/DetailsComic'
import { ListComics } from '../components/comics/list/ListComics'
import { Home } from '../components/Home'
import { Footer } from '../help/Footer'
import { Error404 } from '../help/msjs/Error404'
import { GenericErrors } from '../help/msjs/GenericErrors'

export const IndexRouter = () => {
  return (
    <>
      <Home />
      <Container fluid className='px-4 pb-5'>
        <Routes>
          <Route path='/' element={<ListComics />} />
          <Route path='details/:urlBase' element={<DetailsComic />} />
          <Route path='error/:status/:msj' element={<GenericErrors />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Container>
      <Footer className='mt-5' />
    </>
  )
}
