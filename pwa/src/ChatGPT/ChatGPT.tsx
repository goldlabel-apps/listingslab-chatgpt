import React from "react"
import pJSON from "../../package.json"
import {
  CardHeader,
  Container,
} from "@mui/material"
import "./chatGPT.css"

export function ChatGPT() {
  console.log("@", pJSON.version)
  return (<>
    <Container maxWidth="md">
      <CardHeader 
        title="Listingslab AI"
        subheader="A very intelligent PWA"
      />
    </Container>
    </>
  )
}
