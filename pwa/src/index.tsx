import React from "react"
import { createRoot } from "react-dom/client"
import {ChatGPT} from "./ChatGPT"
import reportWebVitals from "./reportWebVitals"

const container = document.getElementById("root")!
const root = createRoot(container)

root.render(
  <React.StrictMode>
      <ChatGPT />
  </React.StrictMode>
)

reportWebVitals()
