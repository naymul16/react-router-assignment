import React, { useState, useEffect} from 'react';
import Header from '../Header/Header';
import Post from '../Post/Post';
import { Grid, Container } from '@material-ui/core';

const Home = () => {
    const [post,setPost] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPost(data.slice(0,12)))
    },[])

    return (
        <div>
           <Header></Header>
           <Container>
                <Grid container spacing={3}>
                    {
                        post.map(post =><Grid key={post.id}  item md={12}> <Post post={post} ></Post></Grid>)
                    }

                </Grid>
           </Container>

        </div>
    );
};

export default Home;