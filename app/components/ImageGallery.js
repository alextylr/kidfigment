import React, { useState } from "react"
import Page from "./Page"
import Image from "./Image"
import styled from "styled-components"
import Gallery from "react-grid-gallery"

function ImageGallery(props) {
  const [index, setIndex] = useState()

  return (
    // <Page title="ImageGallery">
    //   <ImageContainer className="">
    //     {urls.map((imageUrl) => (
    //       <Image imageUrl={imageUrl} />
    //     ))}
    //   </ImageContainer>
    // </Page>
    <Gallery rowHeight="500" images={IMAGES} />
  )
}

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 500px;
  background: red;
`

const IMAGES = [
  {
    src: "../../sample-images/sample_6.png",
    thumbnail: "../../sample-images/sample_6.png",
    thumbnailWidth: 500,
    thumbnailHeight: 500,
  },
  {
    src: "../../sample-images/sample_7.png",
    thumbnail: "../../sample-images/sample_7.png",
    thumbnailWidth: 500,
    thumbnailHeight: 500,
  },

  {
    src: "../../sample-images/sample_2.png",
    thumbnail: "../../sample-images/sample_2.png",
    thumbnailWidth: 500,
    thumbnailHeight: 500,
  },
]
// const urls = ["../../img/apple-boy.jpg", "../../img/shot.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/wyvern.jpg"]
// const urls = ["../../sample-images/sample_2.png", "../../sample-images/sample_3.png", "../../sample-images/sample_1.png", "../../sample-images/sample_7.png", "../../sample-images/sample_1.png", "../../sample-images/sample_1.png", "../../sample-images/sample_1.png", "../../sample-images/sample_2.png", "../../sample-images/sample_3.png"]
export default ImageGallery
