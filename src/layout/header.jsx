import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { NavLink } from 'react-router-dom';




const navItems = [
  {
    id: 1,
    name: 'Hone',
    url: '/'
  },
  {
    id: 1,
    name: 'Counter',
    url: '/counter'
  }
]

const Header = () => {


  return (


    <AppBar position="static" >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          MUI
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item, index) => (
            <Button key={index} sx={{ color: '#fff' }}>
              <NavLink to={item.url}
                style={{
                  color: 'white',
                  textDecoration: 'none'
                }}>
                {item.name}
              </NavLink>
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
