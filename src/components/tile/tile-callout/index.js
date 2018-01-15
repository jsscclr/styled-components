import React from "react"
import styled from "styled-components"

const TileCallout = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  bottom: 0;
  display: flex;
  margin: ${({ theme }) => theme.spacing};
  padding: ${({ theme }) => theme.spacing};
  position: absolute;
  left: 0;
  width: calc(100% - calc(${({ theme }) => theme.spacing}) * 2);
`

export default TileCallout
