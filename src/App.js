import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { users: [], searchName: '', userId: '' }
    this.handleChangeState = this.handleChangeState.bind(this)
    this.handleViewAll = this.handleViewAll.bind(this)
    this.handleSearchForm = this.handleSearchForm.bind(this)
    this.handleSubmitRegister = this.handleSubmitRegister.bind(this)
    this.handleEditUser = this.handleEditUser.bind(this)
    this.handleSubmitChangeUserForm = this.handleSubmitChangeUserForm.bind(this)
    this.handleDeleteUser = this.handleDeleteUser.bind(this)
    this.handleCancelEdit = this.handleCancelEdit.bind(this)
  }

  handleChangeState(json, searchName, userId) {
    this.setState({
      users: [...json],
      searchName: searchName,
      userId: userId
    })
  }

  handleViewAll() {
    fetch('https://my-json-server.typicode.com/andreypost/db/posts')
      .then(response => response.json())
      .then(json => {
        this.handleChangeState(json, '', '')
      })
  }

  // handleSearchForm(e) {
  //   fetch('https://my-json-server.typicode.com/andreypost/db/posts')
  //     .then(response => response.json())
  //     .then(json => {
  //       let arr = []
  //       for (let key of json) {
  //         if (key.username.toLowerCase() === this.state.searchName.toLowerCase()) arr.push(key)
  //       }
  //       this.handleChangeState(arr, '', '')
  //     })
  //   e.preventDefault()
  // }

  handleSearchForm(e) {
    this.setState({ searchName: '', })
    clearInterval(this.timerId)
    e.preventDefault()
  }

  searchInput() {
    const oninputSearch = () => {
      fetch('https://my-json-server.typicode.com/andreypost/db/posts')
        .then(response => response.json())
        .then(json => {
          let arr = []
          for (let key of json) {
            if (key.username.toLowerCase() === this.state.searchName.toLowerCase()) arr.push(key)
          }
          this.handleChangeState(arr, this.state.searchName, '')
        })
    }
    oninputSearch()
    this.timerId = setTimeout(() => oninputSearch(), 250)
  }

  handleSubmitRegister(e) {
    fetch('https://my-json-server.typicode.com/andreypost/db/posts/', {
      method: 'POST',
      body: JSON.stringify({
        username: e.target.username.value,
        email: e.target.email.value,
        address: {
          city: e.target.address.value,
          street: " ",
          suite: " "
        }
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .then(() => this.handleViewAll())
    e.target.username.value = e.target.email.value = e.target.address.value = ''
    e.preventDefault()
  }

  handleEditUser(user) {
    let form = document.getElementById('editUserForm')
    form.username.value = user.username
    form.email.value = user.email
    form.address.value = user.address.city + ' ' + user.address.street + ' ' + user.address.suite
    this.handleChangeState([], '', user.id)
  }

  handleSubmitChangeUserForm(e) {
    if (!this.state.userId) {
      e.preventDefault()
      return
    }
    fetch(`https://my-json-server.typicode.com/andreypost/db/posts/${this.state.userId}`, {
      method: 'PUT',
      body: JSON.stringify({
        username: e.target.username.value,
        email: e.target.email.value,
        address: {
          city: e.target.address.value,
          street: " ",
          suite: " "
        }
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .then(() => this.handleViewAll())
    e.target.username.value = e.target.email.value = e.target.address.value = ''
    e.preventDefault()
  }


  handleDeleteUser(user) {
    fetch(`https://my-json-server.typicode.com/andreypost/db/posts/${user}`, {
      method: 'DELETE'
    })
    .then(() => this.handleViewAll())
  }

  handleCancelEdit() {
    let form = document.getElementById('editUserForm')
    form.username.value = ''
    form.email.value = ''
    form.address.value = ''
    this.handleChangeState([], '', '')
  }

  render() {

    return (
      <section className="app">
        <div className="colalignstart">
          <button className="app__view" onClick={() => this.handleViewAll()}>VIEW ALL USERS</button>
          <form id="searchByUserName" onSubmit={this.handleSearchForm} className="flexjustbet wrap">
            <button form="searchByUserName">SEARCH USER BY NAME</button>
            <input type="search"
              name="search" onInput={() => this.searchInput()} onChange={(e) => this.handleChangeState([], e.target.value)} required="username" value={this.state.searchName} autoComplete="off" placeholder="enter username" />
          </form>
          <form id="registerUser" onSubmit={(e) => this.handleSubmitRegister(e)} className="flexjustcenter wrap">
            <button form="registerUser">REGISTER</button>
            <input type="text"
              name="username" required="username" placeholder="username" autoComplete="off" />
            <input type="email"
              name="email" required="email" placeholder="email" autoComplete="off" />
            <input type="text"
              name="address" placeholder="address" autoComplete="off" />
          </form>
          <form id="editUserForm" onSubmit={(e) => this.handleSubmitChangeUserForm(e)} className="flexjustcenter wrap">
            <button form="editUserForm">EDIT</button>
            <input type="text"
              name="username" autoComplete="off" />
            <input type="email"
              name="email" autoComplete="off" />
            <input type="text"
              name="address" autoComplete="off" />
            <button id="cancel" onClick={() => this.handleCancelEdit()} className="app__cancel">CANCEL</button>
          </form>
        </div>
        <table>
          <thead>
            <tr>
              <th>USERNAME</th>
              <th>EMAIL</th>
              <th>ADDRESS: city, street, suite</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user, index) => (
              <tr key={index}><td>{user.username}</td><td>{user.email}</td><td>{user.address.city} {user.address.street} {user.address.suite}</td><td onClick={() => this.handleEditUser(user)}>edit</td><td onClick={() => this.handleDeleteUser(user.id)}>delete</td></tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }
}

