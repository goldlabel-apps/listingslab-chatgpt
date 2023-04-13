import React from "react"
import pJSON from "../../package.json"
import "./chatGPT.css"

export function ChatGPT() {
  console.log("@", pJSON.version)
  return (<>
      <h1>Listingslab AI</h1>
      <h2>A very intelligent PWA</h2>
    </>
  )
}
