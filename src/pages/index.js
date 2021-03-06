import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell'
import styled from 'styled-components'


const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

@media (max-width: 800px) {
  grid-template-columns: repeat(1, 1fr);
}

`

const IndexPage = () => (
  <div>
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>Hi, I'm Irene</h1>
          <p>I'm a Product Designer based in London</p>
          <Link to="/page-2/">See work</Link>
        </div>
        <Wave />
      </div>
    </div>
  

    <div className="Cards">
      <h2>Case studies</h2>
      <div className="CardGroup">
        <Card
          title="Unmortgage"
          text="Work project"
          image={require('../images/unmortgage-pre-filtering-thumbnail.png')} />
        <Card
          title="Carwow Dealer Dashboard"
          text="Work project"
          image={require('../images/carwow_thumbnail.png')} />
        <Card
          title="Chippin"
          text="Client project"
          image={require('../images/chippin_thumbnail.png')} />
        <Card
          title="Nuffield Health"
          text="Concept project"
          image={require('../images/nuffield_thumbnail.png')} />
        <Card
          title="My own portfolio"
          text="Personal project"
          image={require('../images/portfolio_thumbnail.png')} />
      </div>
    </div>
    {/*}

    <Section
      image={require('../images/flower.jpg')}
      logo={require('../images/logo-react.png')}
      title="About"
      text="Product designer with a special focus on UX, market research and having a deep understanding of business needs and objectives. I bring a holistic approach to product development, taking into account views and ideas from all stakeholders and delivering designs that are functional, easy to use and understand, and pleasant to the eye. I enjoy solving problems and coming up with universal solutions that will stand the test of time and will make sense to as many users as possible. My design process is guided by a bit of user research, a pinch of common sense, a few design heuristics and lots of testing and iterating.

      When I’m not designing, I love to read and write, cycle and play the ukulele. I also take photographs, and specialise in portrait photography."

    />

*/}


    {/*}
    <SectionCaption>12 sections - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell
          title={cell.title}
          image={cell.image} />
      ))}
    </SectionCellGroup>

*/}

  </div>


)

export default IndexPage
