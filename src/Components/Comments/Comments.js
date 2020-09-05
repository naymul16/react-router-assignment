import React from 'react';
import Fakeimage from '../../Fakeimage/Fakeimage';


const Comments = (props) => {
    
    const {id,name,body} = props.comment;
    const url = Fakeimage.find( data => data.id === id)
    console.log(url.link);
    return (
        <div style={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
            <div>
                <img style={{width:"40px",height:"40px",borderRadius:"50%",marginLeft:"9px"}} src={url.link} alt=""/>
            </div>
            <div style={{width:"85%",backgroundColor:"white",borderRadius:"15px",padding:"10px"}}>
              <h4 style={{textTransform:"uppercase"}}>{name}</h4>
              <h6>{body}</h6>
            </div>
        </div>
    );
};

export default Comments;