import React, { Component } from "react";

export default class DailySmarty extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

    this.renderPosts = this.renderPosts.bind(this);
  }

  renderPosts(){
    return this.state.posts.map(post => {
      return (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
      );
    });
  };

  componentDidMount() {
    fetch("https://api.dailysmarty.com/posts")
      .then(response => response.json())
      .then(data => {
        this.setState({
          posts: data.posts
        });
      })
      .catch(err => console.error("Feth didn't work", err));
  }

  render() {
    return (
      <div>
        <h1>Daily Smarty</h1>
        {this.renderPosts()}
      </div>
    );
  }
}
