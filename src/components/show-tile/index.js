import React from "react"
import styled from "styled-components"
import { withShow } from "../../containers"
import { Tile, TileCallout } from "../"

/* 
 * This uses an h2 element despite being the only heading element in the
 * application. I'm operating on the assumption that this component 
 * would not be the top-level component of a page.
 */
const ShowTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin: ${({ theme }) => theme.spacing};
`

const ShowImage = styled.img`
  display: block;
  object-fit: cover;
  object-position: 0 0;
  max-width: 100%;
  min-height: 17.5rem;
`

const ShowLogo = styled.img`
  height: auto;
  width: 3.5rem;
`

const ShowTile = ({ channel, image, title }) => (
  <Tile>
    <ShowImage {...image} />
    <TileCallout>
      <ShowLogo {...channel.image} />
      <ShowTitle>{title}</ShowTitle>
    </TileCallout>
  </Tile>
)

export default withShow(ShowTile)
