import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='p-3 text-center'>
      <Link to='https://braudin.com' target='_blank' className='px-2'>
        Braudin.com
      </Link>
      <Link
        to='https://comicvine.gamespot.com/'
        target='_blank'
        className='px-2'>
        Comicvine.com
      </Link>
    </div>
  )
}
