import React from "react"
import { createRoot } from "react-dom/client"
import {ChatGPT} from "./ChatGPT"

const container = document.getElementById("root")!
const root = createRoot(container)

root.render(
  <React.StrictMode>
      <ChatGPT />
  </React.StrictMode>
)
