import React from 'react';
import './Posts.css';
import Post from '../../../Components/Post/Post';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
      erorr: false,
    };
  }

  componentDidMount() {
    if (!this.state.posts) {
      axios
        .get('/posts')
        .then((res) => {
          const slicePost = res.data.slice(0, 4);
          const updatedPost = slicePost.map((item) => {
            return { ...item, author: 'Saeed shp' };
          });
          this.setState({ posts: updatedPost, erorr: false });
        })
        .catch((err) => {
          this.setState({ erorr: true });
        });
    }
  }

  selectedPostHandler = (postId) => {
    this.props.history.push(`/posts/${postId}`);
  };

  render() {
    let posts = <p style={{ textAlign: 'center' }}>Fetching Data Faild!</p>;

    if (this.state.posts && !this.state.erorr) {
      posts = this.state.posts.map((item) => {
        return (
          <Post
            key={item.id}
            click={() => this.selectedPostHandler(item.id)}
            title={item.title}
            author={item.author}
          />
        );
      });
    }

    return <section className="posts">{posts}</section>;
  }
}
export default withRouter(Posts);
