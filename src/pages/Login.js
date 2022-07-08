import React from 'react';
import Avatar from '@mui/material/Avatar';
import { useNavigate, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import axiosInstance from '../utils/axios';
import { POST } from '../utils/axiosRequests';

const useStyles = makeStyles(() => ({
  paper: {
    marginTop: useTheme().spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: useTheme().spacing(1),
    backgroundColor: useTheme().palette.secondary.main
  },
  form: {
    width: '60%',
    marginTop: useTheme().spacing(3),
    [useTheme().breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  submit: {
    margin: useTheme().spacing(3, 0, 2)
  }
}));

const Login = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    try {
      let response = await POST('api/token/', {
        email: formData.email,
        password: formData.password
      });
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      axiosInstance.defaults.headers['Authorization'] =
        'Bearer ' + localStorage.getItem('access_token');
      navigate('/');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Container component='main' maxWidth='md'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar sx={{ bgcolor: pink[500] }}></Avatar>
        <Typography variant='h5' component='h1'>
          Sign In
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='email'
                id='email'
                value={formData.email}
                onChange={handleChange}
                label='Email'
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                onChange={handleChange}
                value={formData.password}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value='allowExtraEmails' color='primary' />}
                label='Remember me'
              />
            </Grid>
          </Grid>
          <Button
            sx={{
              marginBottom: '10px'
            }}
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign In
          </Button>

          <Grid
            container
            sx={{
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          >
            <Grid container>
              <Grid item xs>
                <Link to='/' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to='/' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Login;
