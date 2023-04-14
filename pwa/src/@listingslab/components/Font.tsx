import React from "react"
import {FontShape} from "../types"
import {
  useTheme,
  Typography
} from "@mui/material"

export function Font(props: FontShape) {
  const theme = useTheme()
  const {
      variant,
      fontSize,
      color,
      children,
      align,
      width,
  } = props
  
  let textAlign = "left"
  let w: any = "100%"
  if(width) w = width
  let textfontSize: any = "1rem"
  let textFont = "Quicksand-Bold"
  let lineHeight: any = "auto"
  if(align) textAlign = align
  
  if(variant === "black") textFont = "Quicksand-Bold"
  if(variant === "bold") textFont = "Quicksand-Bold"
  if(variant === "thin") textFont = "Quicksand-Light"

  if(variant === "title") {
    lineHeight = "1.6rem"
    textfontSize = "1.6rem"
  }

  if(variant === "subheader") {
    textfontSize = "1.2rem"
    lineHeight = "1.2rem"
  }

  if (fontSize) {
    lineHeight = fontSize
    textfontSize = fontSize
  }

  return (
    <Typography component="span" sx={{
      display: "block",
      textAlign,
      fontFamily: textFont,
      fontSize: textfontSize,
      lineHeight,
      color: color ? color : theme.palette.text.primary,
      width: w,
    }}>
      {children}
    </Typography>    
  )
}
