import React, { useEffect } from "react"

function Container(props) {
  return <div className={"container py-md-4 " + (!props.wide ? " d-flex flex-column align-items-center " : "")}>{props.children}</div>
}

export default Container
