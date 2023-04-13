import React from "react"
import pJSON from "../../package.json"
import "./chatGPT.css"

export function ChatGPT() {
  console.log("@ChatGPT", pJSON.version)
  return (<>
      <h1>Listingslab ChatGPT</h1>
      <h2>A very intelligent PWA</h2>
    </>
  )
}
