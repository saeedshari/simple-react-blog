import React from 'react';
import './Post.css'

function Post(props) {

    return(
        <div onClick={props.click} className="singlePost">
            <h3>{props.title}</h3>
            <p>{props.author}</p>
        </div>
    )
}

export default Post;