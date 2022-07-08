import React from 'react';
import Avatar from '@mui/material/Avatar';
import { useNavigate, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { pink } from '@mui/material/colors';
import { POST } from '../utils/axiosRequests';

const useStyles = makeStyles(() => ({
  paper: {
    marginTop: useTheme().spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: useTheme().spacing(2),
    backgroundColor: useTheme().palette.secondary.main
  },
  form: {
    width: '60%',
    marginTop: useTheme().spacing(3),
    [useTheme().breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  button: {
    margin: useTheme().spacing(3, 0, 2)
  }
}));

const Register = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const [userRegistrationData, setUserRegistrationForm] = React.useState({
    email: '',
    username: '',
    password: ''
  });

  let handleChange = (event) => {
    let { name, value } = event.target;

    setUserRegistrationForm((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    console.log(userRegistrationData);

    try {
      let response = await POST('users/register/', {
        email: userRegistrationData.email,
        username: userRegistrationData.username,
        password: userRegistrationData.password
      });
      console.log(response.data);
      navigate('/login/');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <Container component='main' maxWidth='md'>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar sx={{ bgcolor: pink[500] }}></Avatar>
          <Typography variant='h5' component='h1'>
            Sign Up
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
                  value={userRegistrationData.email}
                  onChange={handleChange}
                  label='Email'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  fullWidth
                  name='username'
                  label='Username'
                  id='username'
                  value={userRegistrationData.username}
                  onChange={handleChange}
                  required
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
                  value={userRegistrationData.password}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value='allowExtraEmails' color='primary' />
                  }
                  label='Accept Terms and Conditions'
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
              Sign Up
            </Button>

            <Grid
              container
              sx={{
                display: 'flex',
                justifyContent: 'flex-end'
              }}
            >
              <Grid item>
                <Link to='/' variant='body2'>
                  <small>Already have an account? Sign in</small>
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Register;
