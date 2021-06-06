import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import {Avatar, Badge, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton} from "@material-ui/core";
import { makeStyles} from "@material-ui/core/styles";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import SendIcon from '@material-ui/icons/Send';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

const useStyles =makeStyles((theme) => ({
    card:{
        margin:theme.spacing(5)
    },
    end:{
         flexGrow:3
    }
}))

function CardItem({item}) {
    const classes =useStyles();
    return (
        <>
          <Card className={classes.card}>
              <CardHeader action={<IconButton><MenuIcon /></IconButton>} avatar={<Avatar>H</Avatar>} title={item.title}/>
              <CardContent>
                  <img src={item.img} />
              </CardContent>
              <CardActions>
                   <IconButton><FavoriteBorderIcon /></IconButton>
                   <IconButton><ChatBubbleIcon /></IconButton>
                   <IconButton><SendIcon /></IconButton>
                   <LocalOfferIcon className={classes.end}/>
              </CardActions>
         </Card>  
        </>
    );
}

export default CardItem;