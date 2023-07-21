import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 90rem;
  height: 100vh;
  margin: 0 auto;
  padding: 2rem 10rem;

  background: ${(props) => props.theme.background};
`
