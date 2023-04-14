import * as React from "react"
import {DataShape} from "../types"
import {
  Box,
  Card,
} from "@mui/material"

export default function Document(props: DataShape) {
    const {data} = props
    // console.log("data", data)
    const {
        title,
        body,
    } = data
    return (<>
            <Card>
                {title}
                {body}
            </Card>
        </>
    )
}
