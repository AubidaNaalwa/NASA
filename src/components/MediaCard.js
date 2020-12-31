import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useLocation } from "react-router-dom";



export default function MediaCard(props) {
    const location = useLocation()
    const button = ()=>{
        if(location.pathname === '/search' || location.pathname === '/favorites')
        {
            if(props.liked){
                return (
                    <Button onClick={()=>props.deleteImg(props.id)}>UnLike</Button>
                )
            }else{
                return (
                    <Button onClick={()=>props.saveImage(props.img)}>Like</Button>
                )
            }
        }
    }
    return (
        <Card  >
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="100%"
                    width="100%"
                    image={props.img.url}
                    title={props.img.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.img.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.img.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
           {button()}
           
            </CardActions>
        </Card>
    );
}
