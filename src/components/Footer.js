import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';

const useStyles = makeStyles(() => ({
  footer: {
    borderTop: `1px solid ${useTheme().palette.divider}`,
    marginTop: useTheme().spacing(8),
    paddingTop: useTheme().spacing(3),
    paddingBottom: useTheme().spacing(3),
    [useTheme().breakpoints.up('sm')]: {
      paddingTop: useTheme().spacing(6),
      paddingBottom: useTheme().spacing(6)
    }
  }
}));

let Copyright = () => {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '} {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

let navItems = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations']
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one'
    ]
  },
  {
    title: 'Resources',
    description: [
      'Resource',
      'Resource name',
      'Another resource',
      'Final resource'
    ]
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use']
  }
];

let Footer = () => {
  const classes = useStyles();

  return (
    <>
      <div component='footer' className={classes.footer}>
        <Grid container spacing={4} justify='space-evenly'>
          {navItems.map((menu) => {
            return (
              <Grid item key={menu.title} xs={12} sm={3}>
                <Typography
                  variant='h6'
                  color='textPrimary'
                  align='center'
                  gutterBottom
                >
                  {menu.title}
                </Typography>
                <List>
                  {menu.description.map((item) => (
                    <ListItem key={item} button>
                      <ListItemText primary={item} align='center' />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            );
          })}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </div>
    </>
  );
};

export default Footer;
