import React from 'react'
import { FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  return (
    <section className='contact'>
      <div className="input-box">
        <h2 className="section-title">Contact Me</h2>

        <div className="input">
          <input type="text" placeholder='example@email.com'/>
          <FaEnvelope className='i'/>
        </div>
        <div className="btn">
          Submit
        </div>
      </div>
    </section>
  )
}

export default Contact