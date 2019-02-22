import React from 'react'
import { Link } from 'react-router-dom'
import { Image as BsImage } from 'react-bootstrap'
import './style.css'

const Image = props => (
  <Link to="#">
    <BsImage {...props} />
  </Link>
)

export default Image