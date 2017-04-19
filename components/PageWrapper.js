import styled from 'styled-components'

const PageWrapper = styled.section`
  background: ${props => props.theme.background};
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  font-family: ${props => props.theme.fontFamily}, serif;
  overflow: hidden;
`

export default PageWrapper;
