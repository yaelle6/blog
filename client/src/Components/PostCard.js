import React from 'react';
import { makeStyles, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import Post from './Post';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
});

const PostCard = ({ post }) => {
  const passProps = (post) => {
    console.log('inside passprops', post);
    return <Post post={post}/>
  }
    const classes = useStyles();
    return (
        <Card className={classes.root}  onClick={passProps(post)}>
          <Link to={`/posts/${post.id}`}>
            <CardContent >
            {/* { (post.image !== "null" && post.image !== "undefined" && post.image !== undefined && post.image !== null ) ? <CardMedia image={post.image} title={post.image}/> : ''} */}
                <Typography variant="h5" component="h2">
                    {post.title}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {post.author}
                </Typography>
                <Typography variant="body2" component="p">
                    {post.text}
                </Typography>
            </CardContent>
          </Link>
        </Card>

    )
}

export default PostCard