import React, { useState } from "react"
import Modal from "react-bootstrap/Modal"
import styled from "styled-components"

function Image({ imageUrl }) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return !show ? (
    <ImageWrapper>
      <img onClick={handleShow} src={imageUrl} />
    </ImageWrapper>
  ) : (
    <>
      <img className="col-md-3" onClick={handleShow} src={imageUrl} />
      <Modal show={show} onHide={handleClose}>
        <img className="img-responsive" src={imageUrl} />
      </Modal>
    </>
  )
}

const ImageWrapper = styled.div`
  width: 100px;
  margin-top: 2rem;
  flex: 1;

  img {
    width: 100%;
  }
`

export default Image
