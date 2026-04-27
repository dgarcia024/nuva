import { useEffect, useState } from "react"
import type { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";



function App() {
  const [products, setProduct] = useState<Product[]>([]);
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


  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then(response => response.json())
      .then(data => setProduct(data))
  }, [])

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
          <Catalog products={products} />
        </Container>
      </Box>
      {/* <Typography variant="h4">Restore</Typography>
          <Button variant="contained" onClick={addProduct}>Add product</Button> */}
    </ThemeProvider>
  )
}

export default App
