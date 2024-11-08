import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
        <ul>
          <li>
            <Link className='li' href={"/About"}> About </Link>
          </li>

          <li>
            <Link className='li' href={"/Service"}> Service </Link>
          </li>

          <li>
            <Link className='li' href={"/Projects"}> Project </Link>
          </li>

          <li>
            <Link className='li' href={"/Contact"}> Contact </Link>
          </li>
        </ul>

        <p className='copyright'>@ All rights Reserved | Bakhtawar khan</p>
    </footer>
  )
}

export default Footer