import React from "react"
import styled, { ThemeProvider, injectGlobal } from "styled-components"
import { ShowTile } from "../"
import theme from "./theme"

/*
 * Magic numbers due to fluid type size.
 * See https://madebymike.com.au/writing/precise-control-responsive-typography/ for details.
 */
injectGlobal`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 1rem;
  }

  @media(min-width: 20rem) {
    html {
      font-size: calc(1rem + 0.25 * ((100vw - 20rem) / 70))
    }
  }

  @media(min-width: 90rem) {
    html {
      font-size: 1.25rem
    }
  }

  body {
    background: #0A0A0A;
    color: #ffffff;
    font-family: Arial, sans-serif;
  }
`

const AppContainer = styled.main`
  align-items: center;
  display: flex;
  padding: ${({ theme }) => theme.spacing};
  height: 100%;
  width: 100%;
`

const App = () => (
  <ThemeProvider theme={theme}>
    <AppContainer>
      <ShowTile showId="home-and-away" />
    </AppContainer>
  </ThemeProvider>
)

export default App
