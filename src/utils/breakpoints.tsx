import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Box from '@material-ui/core'

declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    xs: true
    mobileDefault: true
    sm: true
    md: true
    lg: true
    xl: true
  }
}
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      mobileDefault: 375,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})

export default function BreakpointTest() {
  return <div></div>
}
