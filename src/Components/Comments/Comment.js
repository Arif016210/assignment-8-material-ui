import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentsDetails from '../CommentDetails/CommentsDetails';

const Comment = () => {
    const { postid } = useParams();
    const [comments, setComment] = useState([])
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postid}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComment(data))
    }, [])
    return (
        <div>
            <h1>Comments : {comments.length}</h1>
            {
                comments.map(comment => <CommentsDetails comment={comment} ></CommentsDetails>)
            }
        </div>
    );
};

export default Comment;