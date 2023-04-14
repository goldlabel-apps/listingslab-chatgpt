import * as React from 'react'
import {
  styled,
  Fab,
  Toolbar,
  Box,
  AppBar,
} from "@mui/material"
import {Icon} from "../@listingslab"


const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -10,
  left: 0,
  right: 0,
  margin: '0 auto',
})

export default function AppShell(props: any) {

  const {children} = props

  return (
    <React.Fragment>
      {children}
      <AppBar 
        position="fixed"
        sx={{ 
          top: 'auto', 
          bottom: 0, 
          boxShadow: "none",
          background: "none",
        }}>
        <Toolbar>
          <StyledFab color="secondary">
            <Icon icon="rocket"/>
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}
