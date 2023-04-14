import * as React from "react"
import {DataShape} from "../types"
import {
  CardHeader,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material"
import {Font} from "../../@listingslab"

export default function Document(props: DataShape) {
    const {data} = props
    // console.log("data", data)
    const {
        title,
        body,
        image,
        description,
    } = data
    return (<>
            <Card>
                <CardHeader 
                    title={<Font>{title}</Font>} 
                    subheader={<Font>{description}</Font>} 
                />
                <CardMedia src={image} component={"img"}/>
                <CardContent>
                    <Font>
                        <span dangerouslySetInnerHTML={{__html: body}} />
                    </Font>
                </CardContent>
            </Card>
        </>
    )
}
