import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
      <h4 className="footer py-4 text-center">All rights reserved by <span className='text-primary'>TechBlog</span></h4>
      <p className='text-center mt-3'>
        <Link to="/about">About</Link>
        |
        <Link to="/contact">Contact</Link>
        |
        <Link to="/policy">Privacy Policy</Link>

      </p>
    </div>
  )
}

export default Footer
