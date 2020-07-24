import React, { useState } from "react"
import Page from "./Page"

function Gallery(props) {
  const urls = ["../../img/apple-boy.jpg", "../../img/shot.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/warbat.jpg", "../../img/wyvern.jpg"]

  function renderImage(imageUrl) {
    return (
      <>
        <div className="col-md-4">
          <img className="img-fluid" src={imageUrl} />
        </div>
      </>
    )
  }

  return (
    <Page title="Gallery">
      <div className="row">{urls.map((imageUrl) => renderImage(imageUrl))}</div>
    </Page>
  )
}

export default Gallery
