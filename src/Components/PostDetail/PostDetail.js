import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Fakedata from '../../Fakedata/Fakedata';
import Comments from '../Comments/Comments';



const PostDetail = () => {
    const {id} = useParams();
    const [singlePost, setSinglePost] = useState({});
    const [comments,setComments] = useState([]);
    

    //load post from Api
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setSinglePost(data))
    },{}) 

    //load comment from Api
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res => res.json())
        .then(data => setComments(data));
    },[]) 
    
    const {title,body} = singlePost
    const PostText  = Fakedata.find(data => data.id && id);
    const {text} = PostText;

    //all css applied in this file
    const postStyle = {
        backgroundColor:"lightGrey",
        margin:"10px auto",
        height:"auto",
        width:"630px",
        borderRadius:"10px",
        padding:"30px"
    }
    const postBodyStyle = {
        marginTop:"10px",
        marginBottom:"10px", 
        border:"1px solid white",
        padding:"10px",
        borderRadius:"10px"}
    const commentStyle = {
        marginTop:"10px",
        borderTop:"1px solid black"
    }
    return (
        <div style={postStyle}>
            <h1>{title}</h1>
           <div style={postBodyStyle}>
            <p>{body}.{text}</p>
           </div>
           <h6>Comments</h6>
           <div style={commentStyle}>
               {
                   comments.map(data => <Comments comment={data}></Comments>)
               }
           </div>
        </div>
    );
};

export default PostDetail;