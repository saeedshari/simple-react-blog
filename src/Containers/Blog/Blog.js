import React from "react";
import axios from "axios";
import './Blog.css';
import Post from "../../Components/Post/Post";
import FullPost from '../../Components/FullPost/FullPost';
import NewPost from '../../Components/NewPost/NewPost'

class Blog extends React.Component {

    state = {
        posts :[],
        erorr : false,
        selectedPost:null
    }
    componentDidMount(){
        axios.get('/posts')
        .then((res)=> {
            const slicePost = res.data.slice(0,4)
            const updatedPost = slicePost.map((item)=>{
                return {...item, author: "Saeed shp"}
            })
            this.setState({ posts: updatedPost, erorr:false })
        })
        .catch((err)=> {
            this.setState({erorr : true})
        })
    }
    selectedPostHandler = (post)=> {
        this.setState({selectedPost : post})
    }
    
    render(){
        
        let posts = <p style={{textAlign: 'center'}}>Fetching Data Faild!</p>

        if(!this.state.erorr){
            posts = this.state.posts.map((item)=> {
                return <Post 
                click={()=> this.selectedPostHandler(item)} 
                key={item.id} 
                title={item.title}
                author={item.author} />
             })
        }
        
        return(
            <div>
                <section className="posts">
                    { posts }
                </section>
                <section>
                    <FullPost post={this.state.selectedPost}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        )
    }
}

export default Blog;