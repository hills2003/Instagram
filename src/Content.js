import React, { useState } from 'react';
import "./Content.css";
import CardItem from "./CardItem";
import instagram2 from "./assets/instagram2.png";
import fullpanda from "./panda/fullpanda.jpg";
import AddIcon from '@material-ui/icons/Add';
import {Avatar, Card, IconButton, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, ListSubheader} from "@material-ui/core";
function Content(props) {

    const [item ,setItem]=useState([
        {id:1,img:instagram2,title:"Hillary victor"},
        {id:1,img:fullpanda,title:"Hillary victor"},
        {id:1,img:instagram2,title:"Hillary victor"},
        {id:1,img:instagram2,title:"Hillary victor"},
        {id:1,img:instagram2,title:"Hillary victor"},
        {id:1,img:instagram2,title:"Hillary victor"},
        {id:1,img:instagram2,title:"Hillary victor"},
        {id:1,img:instagram2,title:"Hillary victor"},
        {id:1,img:instagram2,title:"Hillary victor"},
        {id:1,img:instagram2,title:"Hillary victor"},
        {id:1,img:instagram2,title:"Hillary victor"},
    ])

    const[follow,setFollow] =useState([
        {id:2,image:instagram2,primary:'Felipe alves',secondary:"follows you and 2 others"},
        {id:2,image:instagram2,primary:'Felipe alves',secondary:"follows you and 2 others"},
        {id:2,image:instagram2,primary:'Felipe alves',secondary:"follows you and 2 others"},
        {id:2,image:instagram2,primary:'Felipe alves',secondary:"follows you and 2 others"},
        {id:2,image:instagram2,primary:'Felipe alves',secondary:"follows you and 2 others"}
    ])
    return (
        <div className="position">
            <div className="left-content">
                <div className="carousel">

                </div>

                <div className="bottom-content">
                     {item.map(individual =>{
                         return(
                             <CardItem key={individual.id} item={individual} />
                         )
                     })}
                </div>
            </div>

            <div className="right-content">
                     <List>
                         {follow.map(following =>(
                             <ListItem>
                                 <ListItemAvatar><Avatar src={following.image}/></ListItemAvatar>
                                 <ListItemText primary={following.primary} secondary={following.secondary} />
                                 <ListItemIcon><IconButton><AddIcon /></IconButton></ListItemIcon>
                             </ListItem>
                         ))}
                     </List>
            </div>
        </div>
    );
}

export default Content;