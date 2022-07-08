import React from 'react';
import axiosInstance from '../../utils/axios';
import { useNavigate, useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import { DELETE } from '../../utils/axiosRequests';

const useStyles = makeStyles(() => ({
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

function Delete() {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();
  const classes = useStyles();

  function handleSubmit(e) {
    e.preventDefault();
    DELETE('posts/post/delete/' + id + '/')
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      })
      .then(() => {
        navigate('/admin/posts');
      });
  }

  return (
    <>
      <Container component='main' maxWidth='sm'>
        <Box
          display='flex'
          justifyContent='center'
          m={1}
          p={1}
          bgcolor='background.paper'
        >
          <Button
            className={classes.form}
            variant='contained'
            color='secondary'
            type='submit'
            onClick={handleSubmit}
          >
            Press here to confirm delete
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default Delete;
