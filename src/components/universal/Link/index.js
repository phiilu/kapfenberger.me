import React from 'react'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Link = styled(OutboundLink)`
  text-decoration: none;
  color: #d90429;
  border-bottom: 2px solid #d90429;
`

export default ({ children, to }) => (
  <Link href={to} target="_blank" rel="noopener noreferrer">
    {children}
  </Link>
)
