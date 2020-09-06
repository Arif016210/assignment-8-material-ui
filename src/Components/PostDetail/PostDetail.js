import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PostDetail.css';
import Comment from '../Comments/Comment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



const PostDetail = (props) => {
    const { postid } = useParams();
    const [postDetails, setPostDetails] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postid}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPostDetails(data));

    }, [])
    return (
        <div>
            <h1>Post No : {postid}</h1>

            <Card className="postDetails-style" >
                <CardContent>
                    <Typography variant="p" component="p">
                        <p>UserID : {postDetails.userId} </p>
                        <h3>ID : {postDetails.id} </h3>
                    </Typography>
                    <Typography variant="h5" component="h2">
                        <h2>Post : {postDetails.title}</h2>
                        <p> <b>Details</b> : {postDetails.body}</p>
                    </Typography>
                </CardContent>
            </Card>


            <div >
                <Comment></Comment>
            </div>

        </div>
    );
};

export default PostDetail;