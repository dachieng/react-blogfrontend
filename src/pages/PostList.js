import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Link } from '@mui/material';

const useStyles = makeStyles(() => ({
  cardMedia: {
    paddingTop: '2em'
  },
  link: {
    margin: useTheme().spacing(1, 1.5)
  },
  cardHeader: {
    backgroundColor:
      useTheme().palette.type === 'light'
        ? useTheme().palette.grey[200]
        : useTheme().palette.grey[700]
  },
  postTitle: {
    fontSize: '1em',
    textAlign: 'left'
  },
  postText: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'baseline',
    fontSize: '12px',
    textAlign: 'left',
    marginBottom: useTheme().spacing(2)
  }
}));

let PostList = ({ posts }) => {
  const classes = useStyles();
  console.log(posts);

  if (posts.length === 0) {
    return (
      <Container maxWidth='md'>
        <Typography variant='h5' mt={3}>
          There are no posts
        </Typography>
      </Container>
    );
  }

  return (
    <React.Fragment>
      <Container component='main' maxWidth='md'>
        <Typography variant='h5' mt={3}>
          Latest Posts...
        </Typography>
        <Grid container spacing={5} alignItems='flex-end'>
          {posts.map((post) => {
            return (
              <Grid item key={post.id} xs={12} xm={4} md={4}>
                <Card>
                  <Link
                    color='textPrimary'
                    to={post.slug}
                    component='a'
                    href={post.slug}
                  >
                    <CardMedia
                      width='100%'
                      className={classes.cardMedia}
                      component='img'
                      title='Image title'
                      height='300px'
                      src={post.image}
                    />
                  </Link>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant='h6'
                      component='h2'
                      className={classes.postTitle}
                    >
                      {post.title}
                    </Typography>
                    <div className={classes.postText}>
                      <Typography variant='p' color='textSecondary'>
                        {post.content.substr(0, 60)}...
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default PostList;
