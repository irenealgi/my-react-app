import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';


const IndexPage = () => (
  <div>
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>Learn your English</h1>
          <p>Resources, lessons and face to face learning</p>
          <Link to="/page-2/">See courses</Link>
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>3 courses, more coming</h2>
      <div className="CardGroup">
        <Card
          title="English for travelling"
          text="4 weeks"
          image={require('../images/travel.png')} />
        <Card
          title="English for life"
          text="6 months"
          image={require('../images/relationships.png')} />
        <Card
          title="English for business"
          text="3 months"
          image={require('../images/business.png')} />
      </div>
    </div>
    <Section
      image={require('../images/bookshelf.jpg')}
      logo={require('../images/logo-react.png')}
      title="English lessons for everyone"
      text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
    />
  </div>
)

export default IndexPage
