import React from "react" 
import "../@listingslab/fonts/quicksand.css"
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  PaletteMode,
  IconButton,
  CardContent,
  Card,
  CardHeader,
  Container,
} from "@mui/material"
import "./chatGPT.css"
import {
  Icon,
  Font,
} from "../@listingslab"


export const makeTheme = (
  mode: PaletteMode, 
  primary: string, 
  secondary: string,
) => ({    
  palette: {
      mode,
      primary: {
        main: mode === "light" ? primary : secondary,
      },
      secondary: {
        main: mode === "light" ? secondary : primary,
      },
      background: {
        default: "light" ? secondary : primary,
        paper: "light" ? secondary : primary,
      },
  },
})


export function ChatGPT() {

  const defaultTheme: any = {
    mode: "dark",
    primary: "#265874",
    secondary: "#489FD8",
  }
  const {
    mode, 
    primary, 
    secondary,
  } = defaultTheme;
  const t = React.useMemo(
    () => 
      // @ts-ignore
      createTheme(makeTheme(mode, primary, secondary)),
    [mode, primary, secondary],
  )

  // React.useEffect(() => {
  // }, [])

  return (<>
      <ThemeProvider theme={t}>
        <CssBaseline />
        <Container maxWidth="md">
          <Card sx={{mt:1}}>
            <CardHeader
              title={<Font variant="title">
                      LISTINGSLAB A.I.
                    </Font>}
              subheader={<Font variant="subheader">
                      A very intelligent PWA
                        </Font>}
              action={<>
                <IconButton
                  color="inherit"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault()
                    window.open("https://github.com/listingslab-software/listingslab-chatgpt", "_blank")
                  }}>
                  <Icon icon="github" />
                </IconButton></>}
            />
            <CardContent>
              
            </CardContent>
          </Card>
        </Container>
      </ThemeProvider>
    </>
  )
}
