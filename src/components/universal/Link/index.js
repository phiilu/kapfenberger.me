import React from "react";
import styled from "styled-components";

const Link = styled.a`
  text-decoration: none;
  color: #d90429;
  border-bottom: 2px solid #d90429;
`;

export default ({ children, to }) => (
  <Link href={to} target="_blank" rel="noopener noreferrer">
    {children}
  </Link>
);
