import React from "react"
import pJSON from "../../package.json"
import {
  Avatar,
  Card,
  CardHeader,
  Container,
} from "@mui/material"
import "./chatGPT.css"

export function ChatGPT() {
  console.log("@", pJSON.version)
  return (<>
    <Container maxWidth="md">
      <Card>
        <CardHeader 
          avatar={<Avatar src="/icon.svg" />}
          title="Listingslab AI"
          subheader="A very intelligent PWA"
        />
      </Card>
    </Container>
    </>
  )
}
