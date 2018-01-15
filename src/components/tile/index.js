import React from "react"
import styled from "styled-components"
import TileCallout from "./tile-callout"

const Tile = styled.div`
  background: ${({ theme }) => theme.darkColor};
  padding: ${({ theme }) => theme.spacing};
  max-width: 100%;
  position: relative;
`

export { Tile as default, TileCallout }
