import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { CssBaseline } from '@mui/material';
import { NavLink, Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  appBar: {
    borderBottom: `1px solid ${useTheme().palette.divider}`
  },
  link: {
    margin: useTheme().spacing(1, 1.5),
    textDecoration: 'none',
    fontWeight: 'bold'
  },
  toolbarTitle: {
    flexGrow: 1
  }
}));

const menuItems = [
  {
    text: 'Register',
    path: 'register/'
  },
  {
    text: 'Login',
    path: 'login/'
  },
  {
    text: 'Logout',
    path: 'logout/'
  },
  {
    text: 'Admin',
    path: 'admin/posts/'
  }
];

function Header() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar
        position='static'
        elevation={0}
        className={classes.appBar}
        sx={{
          color: '#000',
          background: '#fff'
        }}
      >
        <Toolbar>
          <Typography
            variant='h6'
            color='inherit'
            noWrap
            className={classes.toolbarTitle}
          >
            <Link
              component='a'
              to='/'
              style={{
                textDecoration: 'none'
              }}
              color='textPrimary'
            >
              BlogMe
            </Link>
          </Typography>

          <nav>
            {menuItems.map((menu) => {
              return (
                <Link
                  key={menu.text}
                  color='textSecondary'
                  to={menu.path}
                  className={classes.link}
                  component={NavLink}
                >
                  {menu.text}
                </Link>
              );
            })}
          </nav>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
