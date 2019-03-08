import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/logo-designcode.svg';
import './Header.css'



class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll',
  this.handleScroll)
}

handleScroll = (event) => {
  const scrollTop = window.pageYOffset

  if (scrollTop > 50) {
    this.setState({ hasScrolled: true })
  } else {
    this.setState({ hasScrolled: false })
  }
}


  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={logo} width="30" /></Link>
          <Link to="/work">Courses</Link>
          <Link to="/blog">Resources</Link>
          <Link to="/about">Pricing</Link>
          <Link to="/contact"><button>Get access</button></Link>
          </div>
      </div>
    )
  }
}

export default Header
