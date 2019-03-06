import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/logo-designcode.svg';
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={logo} width="30" /></Link>
      <Link to="/work">Work</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/about">About</Link>
      <Link to="/contact"><button>Contact</button></Link>
      </div>
  </div>
)

export default Header
