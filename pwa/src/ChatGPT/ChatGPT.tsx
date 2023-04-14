import React from "react" 
import "../@listingslab/fonts/quicksand.css"
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  PaletteMode,
  IconButton,
  Avatar,
  Card,
  CardHeader,
  Container,
  Grid,
} from "@mui/material"
import "./chatGPT.css"
import {
  Icon,
  Font,
  AppShell,
  Document,
} from "../@listingslab"
import {document} from "./document"

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
        <AppShell>
          <Container maxWidth="md" sx={{mb:"100px"}}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Card sx={{mt:1}}>
                  <CardHeader
                    avatar={<Avatar src="./icon.svg" alt="ChatGTP" />}
                    title={<Font>
                            LISTINGSLAB A.I.
                          </Font>}
                    subheader={<Font>
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
                </Card>
              </Grid>
              <Grid item xs={12} md={8}>
                <Document data={document} />
              </Grid>
              <Grid item xs={12} md={4}>
                Sidebar
              </Grid>
            </Grid>


          </Container>
        </AppShell>
      </ThemeProvider>
    </>
  )
}
