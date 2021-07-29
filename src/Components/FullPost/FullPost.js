import React from 'react';
import axios from 'axios';
import './FullPost.css'

function FullPost(props) {

    let post = <p style={{textAlign: 'center'}}>Please select a post</p>
    const selectedPost = props.post

    function deletePostHandler (id){
        axios.delete(`posts/${id}`)
        .then((res)=>{
            console.log(res);
        })
    }
    
    if(selectedPost){
        post = (
            <div className="fullPost">
                <h2>{selectedPost.title}</h2>
                <p>{selectedPost.body}</p>
                <button onClick={()=> deletePostHandler(selectedPost.id)}>Delete</button>
            </div>
        )
    }
    
    return post
}

export default FullPost;