import React from 'react'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container'
import axiosInstance from './axios';
import { useParams } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect } from 'react';

const useStyles = makeStyles(() => ({
  paper: {
		marginTop: useTheme().spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
}))


function Single() {
  const classes = useStyles()
  const param  = useParams() 

  const slug = param.slug

  const [data, setData] = React.useState({ posts: [] });

  useEffect(() => {
    axiosInstance.get(slug)
    .then(res => setData({ posts: res.data }))

  }, [slug])
  console.log(data)
  return (
    <>
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Container maxWidth="sm">
        <Typography
						component="h1"
						variant="h4"
						align="center"
						color="textPrimary"
						gutterBottom
					>
						{data.posts.title}
					</Typography>
					<Typography
						variant="h6"
						align="center"
						color="textSecondary"
						paragraph
					>
						{data.posts.excerpt}
					</Typography>
        </Container>

      </div>

    </Container>
    </>
  )
}

export default Single
