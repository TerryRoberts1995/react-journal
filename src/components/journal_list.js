import React, { Component } from "react";
import axios from 'axios'

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
    axios.get("https://api.dailysmarty.com/posts")
      .then(response => {
          console.log(response.data)
          this.setState({
              posts: response.data.posts
          })
      })
      .catch(err => console.error("Fetch didn't work", err));
  }

  render() {
    return (
      <div>
        <h1>Daily Smarty</h1>
        {this.renderPosts()}
        <button onClick={this.clearEntries}>Clear Journal Entries</button>
        <button onClick={this.showAllEntries}>Show All Journal Entries</button>
      </div>
    );
  }
}
