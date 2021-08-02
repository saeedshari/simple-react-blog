import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import './NewPost.css';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      author: 'Saeed shp',
      errorForm: false,
      submitted: false,
    };
    this.submitPostHandler = this.submitPostHandler.bind(this);
  }

  submitPostHandler = (eve) => {
    const newPost = {
      title: this.state.title,
      body: this.state.body,
      author: this.state.author,
    };
    if (this.state.title || this.state.body) {
      axios.post('/posts', newPost).then((res) => {
        console.log(res);
        this.setState({ errorForm: false, submitted: true });
      });
    } else {
      this.setState({ errorForm: true });
    }
    eve.preventDefault();
  };

  render() {
    let redirect = null;
    if (this.state.submitted) {
      redirect = <Redirect to="/" />;
    }

    return (
      <div className="newPost">
        {redirect}
        <h2>Add New Post</h2>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={this.state.title}
            onChange={(eve) => this.setState({ title: eve.target.value })}
          ></input>
        </div>

        <div>
          <label>Content</label>
          <textarea
            rows="4"
            value={this.state.body}
            onChange={(eve) => this.setState({ body: eve.target.value })}
          />
        </div>

        <div>
          <label>Author</label>
          <select
            value={this.state.author}
            onChange={(eve) => this.setState({ author: eve.target.value })}
          >
            <option>Saeed shp</option>
          </select>
        </div>
        {this.state.errorForm ? <p>Please Fill the Form</p> : null}
        <button onClick={this.submitPostHandler}>Submit</button>
      </div>
    );
  }
}

export default NewPost;
