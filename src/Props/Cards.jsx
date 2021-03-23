import React from 'react';
import ReactDOM from 'react-dom';

function Card(props){

return(
<>
<div style={{width:'30% ', height:'40vh', margin:'10px' ,display:'inline-block'
 }}>
    <img src={props.img_src} style={{width:'100%',height:'30vh',    objectFit: 'cover'}} />
    <h3>{props.title}</h3>
    <button><a href={props.link}> Check out </a></button>
</div>
</>
)};
export default Card;