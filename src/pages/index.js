import React from 'react'

import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

const IndexPage = ({ data: { profileImage, waffleImage } }) => (
  <div>
    <Navigation />
    <Header profileImage={profileImage} />
    <Main waffleImage={waffleImage} />
    <Footer />
  </div>
)

export default IndexPage

export const query = graphql`
  query indexQuery {
    profileImage: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 600) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    waffleImage: file(relativePath: { eq: "logo-waffle.png" }) {
      childImageSharp {
        sizes(maxWidth: 327) {
          ...GatsbyImageSharpSizes_tracedSVG
        }
      }
    }
  }
`
