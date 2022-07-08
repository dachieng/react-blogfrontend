import React from 'react';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const useStyles = makeStyles(() => ({
  paper: {
    marginTop: '1em'
  },
  link: {
    margin: useTheme().spacing(1, 1.5)
  },
  tableHeader: {
    backgroundColor:
      useTheme().palette.type === 'light'
        ? useTheme.palette.grey[200]
        : useTheme().palette.grey[700]
  },
  tableTitle: {
    fontSize: '16px',
    textAlign: 'left'
  },
  tableText: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'baseline',
    fontSize: '12px',
    textAlign: 'left',
    marginBottom: useTheme().spacing(2)
  }
}));

function Posts({ posts }) {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth='md' component='main'>
        <Paper className={classes.paper}>
          <TableContainer>
            <Table stickyHeader aria-label='sticky table'>
              <TableHead className={classes.tableHeader}>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell align='left'>Title</TableCell>
                  <TableCell align='left'>Category</TableCell>
                  <TableCell align='center' colSpan={3}>
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {posts.map((post) => {
                  return (
                    <TableRow key={post.id}>
                      <TableCell align='left'>{post.id}</TableCell>
                      <TableCell align='left'>{post.title}</TableCell>
                      <TableCell align='left'>{post.category}</TableCell>

                      <TableCell align='left'>
                        <Link
                          color='textPrimary'
                          href={'/' + post.slug}
                          className={classes.link}
                        >
                          {post.title}
                        </Link>
                      </TableCell>
                      <TableCell align='left'>
                        <Link
                          color='textPrimary'
                          href={'/post/edit/' + post.id}
                          className={classes.link}
                        >
                          <EditIcon />
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Link
                          color='textPrimary'
                          href={'/post/delete/' + post.id}
                          className={classes.link}
                        >
                          <DeleteForeverIcon />
                        </Link>
                      </TableCell>
                    </TableRow>
                  );
                })}
                <TableRow>
                  <TableCell colSpan={4} sx={{ display: 'flex-end' }}>
                    <Button
                      component='a'
                      href='/post/create'
                      variant='contained'
                      color='primary'
                    >
                      New Post
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </>
  );
}

export default Posts;
