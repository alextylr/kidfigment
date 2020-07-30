import React, { useState } from "react"
import Page from "./Page"
import Axios from "axios"
import styled from "styled-components"

function Contact() {
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const Button = styled.button`
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.3rem;
    display: block;
    width: 100%;
    padding-bottom: 1rem;
    padding-top: 1rem;
    margin-top: 1.5rem;
    color: #fff;
    background-color: #afe76f;
    border-color: #afe76f;

    :hover {
      background-color: #50ebaa;
      border-color: #50ebaa;
    }
  `
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await Axios.post("http://localhost:8080/register", { username, email, password })
      console.log("User was successfully created.")
    } catch (e) {
      console.log(e.response.data)
    }
  }

  return (
    <Page wide={true}>
      <div className="row align-items-center">
        <div className="col-lg-3"></div>
        <div className="col-lg-6 pl-lg-5 pb-3 py-lg-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username-register" className="text-muted mb-1">
                <small>Name</small>
              </label>
              <input onChange={(e) => setUsername(e.target.value)} id="username-register" name="username" className="form-control" type="text" placeholder="Name" autoComplete="off" />
            </div>
            <div className="form-group">
              <label htmlFor="email-register" className="text-muted mb-1">
                <small>Email</small>
              </label>
              <input onChange={(e) => setEmail(e.target.value)} id="email-register" name="email" className="form-control" type="text" placeholder="you@example.com" autoComplete="off" />
            </div>
            <div className="form-group">
              <label htmlFor="password-register" className="text-muted mb-1">
                <small>Message</small>
              </label>
              <input onChange={(e) => setPassword(e.target.value)} id="message-register" name="message" className="form-control" type="text" placeholder="Type your message here" />
            </div>
            <Button type="submit" className="py-3 mt-4 btn btn-lg btn-success btn-block">
              hmu!
            </Button>
          </form>
        </div>
      </div>
      <div className="col-lg-3"></div>
    </Page>
  )
}

export default Contact
