import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"

// My Components
import Header from "./components/Header"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import ImageGallery from "./components/ImageGallery"
import About from "./components/About"
import Landing from "./components/Landing"

function Main() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/Contact" exact>
          <Contact></Contact>
        </Route>
        <Route path="/" exact>
          <Landing></Landing>
        </Route>
        <Route path="/About" exact>
          <About></About>
        </Route>
        <Route path="/ImageGallery" exact>
          <ImageGallery></ImageGallery>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

ReactDOM.render(<Main />, document.querySelector("#app"))

if (module.hot) {
  module.hot.accept()
}
