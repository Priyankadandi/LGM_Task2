import Users from './component/info';
import './App.css';
import logo from './img/logo.png';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user_data : [],
      loading : true
    }
    this.displayUsers = this.displayUsers.bind(this)
  }

  displayUsers() {
    document.getElementById("main").style.display = 'flex';
    const link = "https://reqres.in/api/users?page=1";
    fetch(link)
    .then(response => response.json())
    .then((users) => {
      this.setState({
        user_data : users.data,
        loading : false
      })
    })
    .catch((error) => {
      console.error(error)
    })
  }

  render() {
    return (
      <>

<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
      <img
        src={logo}
        class="me-2"
        height="70"
        alt="LGM-logo"
        loading="lazy"
      />
      <small>Team Members</small>
      <button onClick={this.displayUsers} users={this.state.user_data}>
              Get Users
            </button>
  </div>
</nav>
        <Users loading = {this.state.loading} users = {this.state.user_data} />
      </>
    )
  }
}

export default App;