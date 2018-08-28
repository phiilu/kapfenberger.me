import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faExternalLinkAlt,
  faStar,
  faPaperPlane,
  faBars,
} from '@fortawesome/free-solid-svg-icons'

import 'normalize.css'
import './index.css'
import '../shared/globalStyles'

library.add(fab, faExternalLinkAlt, faStar, faPaperPlane, faBars)

console.log(
  'If you want to see the code, you can find it on GitHub: https://github.com/phiilu/site :D'
)

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content:
            'This is my personal website. I am a Frontend Developer and this site allows me to show of some of my work.',
        },
        {
          name: 'keywords',
          content:
            'web developer, frontend developer, webentwickler, reactjs developer, reactjs webentwickler, react, reactjs, programmierer, persönliche website, portfolio',
        },
      ]}
    />
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
