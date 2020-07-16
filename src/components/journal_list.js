import React, { Component } from "react";
import axios from 'axios'
import Post from './journal_post'

export default class DailySmarty extends Component {
  constructor(props) {
    super();

    this.state = {
      posts: [],
      viewPost: [],
      isOpen: true
    };

    this.renderPosts = this.renderPosts.bind(this);
    this.clearEntries = this.clearEntries.bind(this)
    this.showAllEntries = this.showAllEntries.bind(this)
    this.toggleStatus = this.toggleStatus.bind(this)
    this.delete = this.delete.bind(this)
  }

  delete(post) {
    const index = this.state.posts.indexOf(post);

    this.state.posts.splice(index, 1);

    this.setState({
      posts: this.state.posts
    })
    console.log(this.state.posts);



  }
  renderPosts() {
    return this.state.posts.map(post => {
      console.log(this.state.posts.content)
      return (
        <div key={post.title}>
          <Post
            title={post.title}
            post={post}
          />
          <button onClick={() => this.delete(post)}>delete</button>
        </div>
      );
    });
  };

  clearEntries() {
    let view = this.state.posts;
    this.setState({
      viewPost: view
    })
    this.setState({ posts: [], isOpen: false });
  };

  showAllEntries() {
    this.setState({ posts: this.state.viewPost, isOpen: true });
  };

  toggleStatus() {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    } else {
      this.setState({ isOpen: true });
    }
  };

  componentDidMount() {
    axios.get("https://api.dailysmarty.com/posts")
      .then(response => {
        console.log(response)
        this.setState({
          posts: response.data.posts,
          viewPost: this.state.posts
        })
      })
      .catch(err => console.error("Fetch didn't work", err));
  }

  render() {
    return (
      <div className="journal-list-wrapper">
        <div className="journal-list-items">
          {this.renderPosts()}
          <div className="btns">
            <button className="clear-entries" onClick={this.clearEntries}>Clear</button>
            <button className="show-entires" onClick={this.showAllEntries}>Show</button></div>
        </div>
      </div>
    );
  }
}
