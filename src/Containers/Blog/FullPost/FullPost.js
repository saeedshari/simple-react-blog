import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import './FullPost.css';

class FullPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
    };
  }
  componentDidMount() {
    if (this.props.match.params.id) {
      if (
        !this.state.post ||
        (this.state.post && this.state.post.id !== this.props.match.params.id)
      ) {
        axios
          .get(`/posts/${this.props.match.params.id}`)
          .then((res) => {
            this.setState({ post: res.data });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }
  deletePostHandler = (id) => {
    axios.delete(`posts/${id}`).then((res) => {
      console.log(res);
    });
  };

  render() {
    let post = <p style={{ textAlign: 'center' }}>Please select a post</p>;

    if (this.state.post) {
      post = (
        <div className="fullPost">
          <h2>{this.state.post.title}</h2>
          <p>{this.state.post.body}</p>
          <button onClick={() => this.deletePostHandler(this.state.post.id)}>
            Delete
          </button>
        </div>
      );
    }

    return post;
  }
}

export default withRouter(FullPost);
