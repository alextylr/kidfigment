import React, { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

function Header() {
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("complexAppToken")))

  const StyledHeader = styled(Link)`
    color: #000;
    font-size: 3.5rem;

    :hover {
      color: #000;
      text-decoration: none;
    }
  `
  return (
    <>
      <header className="header-bar mb-3">
        <div className="container d-flex flex-column align-items-center p-3">
          <h4 className="my-0 font-weight-normal">
            <StyledHeader to="/" className="text-black">
              kidfigment
            </StyledHeader>
          </h4>
        </div>
      </header>
    </>
  )
}

export default Header
