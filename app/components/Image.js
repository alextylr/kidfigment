import React, { useEffect } from "react"

function Image(props) {
  return (
    <>
      <div className="col-md-2">
        <img src={props.source} alt={props.altDesc} medium={props.medium} />
      </div>
    </>
  )
}

export default Image
