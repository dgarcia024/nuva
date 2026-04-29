import { useState } from "react"
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";



function App() {

  const [darkMode, setDarkMode] = useState(false);

  const setMode = () => {
      setDarkMode(!darkMode)
  }

  const paletteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: (paletteType === 'light') ? '#eaeaea' : '#121212'
      }
    }
  })


  // const addProduct = () => {
  //   setProduct(prevState => [...prevState,
  //   {
  //     id: prevState.length + 1,
  //     name: `product ${prevState.length + 1}`,
  //     price: (prevState.length * 100) + 100,
  //     pictureUrl: 'https://picsum.photo/200',
  //     description: 'test',
  //     quantityOfStock: 2,
  //     type: 'test',
  //     brand: 'test'

  //   }])
  // }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar setThemeMode={setMode} darkMode={darkMode} />
      <Box
       sx={{
        minHeight: '100vh',
        background: darkMode ? 
        'radial-gradient(circle,#121212,#eaeaea)' :
        'radial-gradient(circle,#baecf9,#f0f9ff)',
        py: 6
       }}>
        <Container maxWidth='xl' sx={{ mt: 8 }}>
          <Outlet />
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
