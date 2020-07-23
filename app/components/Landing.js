import React, { useEffect } from "react"
import { Link, to } from "react-router-dom"
import Page from "./Page"

function Landing() {
  return (
    <>
      <Page>
        <h2>
          <Link to="/Gallery" className="mx-1">
            gallery
          </Link>
        </h2>
        <h2>
          <Link className="mx-1" to="/About">
            about
          </Link>
        </h2>
        <h2>
          <Link className="mx-1" to="/Contact">
            contact
          </Link>
        </h2>
        <h2>
          <a href="https://kidfigment.myshopify.com/?_ab=0&_fd=0&_sc=1&key=d9a2d9bee67c2cc8399e57ce115b732dcef36841926cc0a4800f8a1344225424">shop</a>
        </h2>
      </Page>
    </>
  )
}

export default Landing
