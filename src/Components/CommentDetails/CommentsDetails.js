import React from 'react';
import './CommentsDetails.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const CommentsDetails = (props) => {

    const { name, email, body, id } = props.comment;

    return (
        <div>

            <Card className="commentDetails-style" >
                <CardContent>
                    <Typography variant="p" component="p">
                        <p>ID : {id}</p>
                        <h1> <b>Name</b> : {name} </h1>
                    </Typography>
                    <Typography variant="h5" component="h2">
                        <p> <b>Email</b> : {email} </p>
                        <p> <b>Body</b> : {body} </p>
                    </Typography>
                </CardContent>
            </Card>
        </div>


    );
};

export default CommentsDetails;