import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";


const midLinks = [
  { title: 'catalog', path: '/catalog' },
  { title: 'about', path: '/about' },
  { title: 'contacts', path: '/contact' }
]

const rightLinks = [
  { title: 'login', path: '/login' },
  { title: 'register', path: '/register' },
]

const navStyles = {
  color: 'inherit',
  typography: 'h6',
  textDecoration: 'none',
  '&:hover': {
    color: 'gray.500'
  },
  '&.active': {
    color: '#baecf9'
  }
}

const navButtonStyle = {
  display:'flex',
  alignItems:'center'
}


interface Props {
  setThemeMode: () => void,
  darkMode: boolean
}

export default function NavBar({ setThemeMode, darkMode }: Props) {
  return (
    <AppBar
      position="fixed"
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={navButtonStyle}>
          <Typography component={NavLink} to='/' sx={navStyles} variant="h6">RE-STORE</Typography>
          <IconButton onClick={setThemeMode}>
            {darkMode ? <LightMode sx={{ color: 'yellow' }} /> : <DarkMode sx={{ color: 'white' }} />}
          </IconButton>
        </Box>
        <List sx={{ display: 'flex' }}>
          {midLinks.map(({ title, path }) => (
            <ListItem
              component={NavLink}
              to={path}
              key={path}
              sx={navStyles}
            >
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
        <Box sx={navButtonStyle}>
          <IconButton size="large" sx={{ color: 'inherit' }}>
            <Badge badgeContent="4" color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <List sx={{ display: 'flex' }}>
            {rightLinks.map(({ title, path }) => (
              <ListItem
                component={NavLink}
                to={path}
                key={path}
                sx={navStyles}
              >
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  )
}