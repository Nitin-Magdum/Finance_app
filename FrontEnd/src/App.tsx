import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import { useMemo } from "react"
import { themeSettings } from "./theme"


function App() {
  const theme =useMemo(()=>createTheme(themeSettings),[]);

  return (
    <>
     <ThemeProvider theme={theme}>
      <CssBaseline/>
      Hi!

     </ThemeProvider>
    </>
  )
}

export default App
