import React from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaFacebook
} from 'react-icons/fa'
import './style.scss'

export default function Footer(props) {
  return (
    <div className="footer">
      <p>Find me:</p>
      <p className="d-flex">
        <a href="https://github.com/alisyahidin" className="footer__link mr-2 d-flex align-items-center">
          <FaGithub className="mr-1" />alisyahidin
        </a>
        <a href="https://linkedin.com/in/alisyahidin" className="footer__link mr-2 d-flex align-items-center">
          <FaLinkedin className="mr-1" />alisyahidin
        </a>
        <a href="https://facebook.com/Alisyahidin19" className="footer__link mr-2 d-flex align-items-center">
          <FaFacebook className="mr-1" />alisyahidin19
        </a>
      </p>
      <p className="mt-2">Coding with Love at Kuningan. &copy; 2019</p>
    </div>
  )
}