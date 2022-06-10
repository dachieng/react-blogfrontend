import React from 'react';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container'
import axiosInstance from './axios';
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { useLocation } from 'react-router-dom';
import Link from '@mui/material/Link';


let useStyles = makeStyles(() => ({
    cardMedia: {
		paddingTop: '2em%', 
	},
	link: {
		margin: useTheme().spacing(1, 1.5),
	},
	cardHeader: {
		backgroundColor:
			useTheme().palette.type === 'light'
				? useTheme.palette.grey[200]
				: useTheme.palette.grey[700],
	},
	postTitle: {
		fontSize: '1em',
		textAlign: 'left',
	},
	postText: {
		display: 'flex',
		justifyContent: 'left',
		alignItems: 'baseline',
		fontSize: '0.8em',
		textAlign: 'left',
		marginBottom: useTheme.spacing(2),
	},
}))

function Search(){
    const classes = useStyles()
    const location = useLocation();

    const [searchPost, setSearchPost] = React.useState({
        search:'',
        posts:[]
    })

    React.useEffect(() => {
        axiosInstance.get("posts/search/" + window.location.search)
        .then(res => res.json())
        .then(data => setSearchPost({posts:data}))
    }, [searchPost.posts])

    console.log(searchPost)

    return (
        <>
            <Container maxWidth="md" component="main">
                <Grid container spacing={3}>
                    {
                        searchPost.posts.map(post => {
                            return (
                                <Grid item key={post.id} xs={12} md={4}>
                                    <Card>
                                        <CardHeader className={classes.cardHeader}>
                                            <Link
                                                color="textSecondary"
                                                component="a"
                                                href={post.slug}
                                                to={post.slug}
                                            >
                                            <CardMedia 
                                                component="img"
                                                src="https://source.unsplash.com/random"
                                                width="100%"
                                                className={classes.cardMedia}
                                                height="300px"
                                            />
                                            </Link>
                                        </CardHeader>
                                        <CardContent className={classes.cardContent}>
                                            <Typography
                                                gutterBottom
                                                variant="h6"
                                                component="h2"
                                                className={classes.postTitle}
                                            >
                                                {post.title.substr(0, 50)}...
                                            </Typography>
                                            <div className={classes.postText}>
                                                <Typography color="textSecondary">
                                                    {post.excerpt.substr(0, 40)}...
                                                </Typography>
                                            </div>
									    </CardContent>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
        </>
    )
}

export default Search;