import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Post.css';
import { Link } from 'react-router-dom';





const Post = (props) => {
    const { title, id } = props.post;
    return (
        <div>
            <Card className="card-style" >
                <CardContent>
                    <Typography variant="p" component="p">
                        <h3> {id} </h3>
                    </Typography>
                    <Typography variant="h5" component="h2">
                        <h3> {title} </h3>
                    </Typography>
                </CardContent>

                <CardActions>



                    <Button variant="contained" color="primary"> <Link className="btn-link" to={`/post/${id}`}>See Post Detail...</Link></Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default Post;