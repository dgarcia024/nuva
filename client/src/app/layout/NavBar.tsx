import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

interface Props {
  setThemeMode: () => void,
  darkMode: boolean
}

export default function NavBar({ setThemeMode, darkMode }: Props) {
  return (
    <AppBar
        position="fixed"    
    >
       <Toolbar>
         <Typography variant="h6">RE-STORE</Typography>
         <IconButton onClick={setThemeMode}>
            { darkMode ? <LightMode sx={{ color: 'yellow' }} /> : <DarkMode sx={{ color: 'white' }} />}
         </IconButton>
       </Toolbar>
    </AppBar>
  )
}