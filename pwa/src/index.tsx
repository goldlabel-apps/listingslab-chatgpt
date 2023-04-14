import React from "react"
// import { createStore } from "redux"
// import { persistStore, persistReducer } from "redux-persist"
// import storage from "redux-persist/lib/storage"

import { createRoot } from "react-dom/client"
import {ChatGPT} from "./ChatGPT"

const container = document.getElementById("root")!
const root = createRoot(container)

root.render(
  <React.StrictMode>
      <ChatGPT />
  </React.StrictMode>
)
