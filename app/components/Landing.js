import React, { useEffect } from "react"
import { Link, to } from "react-router-dom"
import Page from "./Page"
import styled from "styled-components"

function Landing() {
  const StyledLink = styled(Link)`
    color: #000;
    font-size: 3.2rem;

    :hover {
      color: #000;
      text-decoration: none;
    }
  `
  return (
    <>
      <Page>
        <h2>
          <StyledLink to="/ImageGallery" className="mx-1">
            ImageGallery
          </StyledLink>
        </h2>
        <h2>
          <StyledLink className="mx-1" to="/About">
            about
          </StyledLink>
        </h2>
        <h2>
          <StyledLink className="mx-1" to="/Contact">
            contact
          </StyledLink>
        </h2>
        <h2>
          <StyledLink as="a" href="https://kidfigment.myshopify.com/?_ab=0&_fd=0&_sc=1&key=d9a2d9bee67c2cc8399e57ce115b732dcef36841926cc0a4800f8a1344225424">
            shop
          </StyledLink>
        </h2>
      </Page>
    </>
  )
}

export default Landing
