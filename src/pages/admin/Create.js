import React from 'react';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { pink } from '@mui/material/colors';
import { POST } from '../../utils/axiosRequests';

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

function Create() {
  const navigate = useNavigate();
  const classes = useStyles();

  const [formData, setFormData] = React.useState({
    title: '',
    excerpt: '',
    content: '',
    image: null
  });

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;

    setFormData((prev) => {
      return {
        ...prev,
        //[name]:value
        [name]: type === 'file' ? files : value
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    POST('posts/post/create/', {
      title: formData.title,
      excerpt: formData.excerpt,
      content: formData.content
    }).then((res) => {
      navigate('/admin/posts');
    });
  };

  return (
    <>
      <Container component='main' maxWidth='md'>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar sx={{ bgcolor: pink[500], marginBottom: '10px' }}></Avatar>
          <Typography variant='h5' component='h1'>
            Create Post
          </Typography>
          <form className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='title'
                  id='title'
                  value={formData.title}
                  onChange={handleChange}
                  label='Title'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='excerpt'
                  id='excerpt'
                  value={formData.excerpt}
                  onChange={handleChange}
                  label='Excerpt'
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='content'
                  id='excerpt'
                  value={formData.content}
                  onChange={handleChange}
                  label='Content'
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid>
                <input
                  accept='image/*'
                  id='post-image'
                  onChange={handleChange}
                  name='image'
                  type='file'
                  required
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              sx={{
                marginTop: '1em'
              }}
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              onClick={handleSubmit}
            >
              Create Post
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
}

export default Create;
