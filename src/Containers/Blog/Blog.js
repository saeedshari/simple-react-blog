import React from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

class Blog extends React.Component {
  render() {
    return (
      <div className="blog">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: '/new-post',
                    search: '?sort=post',
                  }}
                >
                  New Post
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/" component={Posts} exact />
          <Route path="/new-post" component={NewPost} exact />
          <Route path="/posts/:id" component={FullPost} exact />
          <Redirect from="/posts" to="/" />
          <Route
            render={() => (
              <h2 style={{ textAlign: 'center' }}>Page Not Found!</h2>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default Blog;
