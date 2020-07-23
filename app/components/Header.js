import React, { useState } from "react"
import { Link } from "react-router-dom"
import HeaderLoggedOut from "./HeaderLoggedOut"
import HeaderLoggedIn from "./HeaderLoggedIn"

function Header() {
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("complexAppToken")))
  return (
    <>
      <header className="header-bar mb-3">
        <div className="container d-flex flex-column align-items-center p-3">
          <h4 className="my-0 font-weight-normal">
            <Link to="/" className="text-black">
              kidfigment
            </Link>
          </h4>
          {loggedIn ? <HeaderLoggedIn setLoggedIn={setLoggedIn} /> : <HeaderLoggedOut setLoggedIn={setLoggedIn} />}
        </div>
      </header>
    </>
  )
}

export default Header
