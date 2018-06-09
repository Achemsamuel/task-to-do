import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import ListCard from './components/ListCard';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      itemDetails: {
        title: 'Read for my tests',
        body: 'Read all the books there are in the library'
      }
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onAddItem = this.onAddItem.bind(this);
  }

  componentDidMount() {
    axios
      .get('http://vps124703.vps.ovh.ca/todos')
      .then((result) => {
        console.log(result);
        if (result) {
          this.setState({
            list: result
          })
        }
      });
  }

  onTitleChange(event) {
    event.preventDefault();
    this.setState({
      title: event.target.value
    });
    console.log(this.state);
  }
  onDescriptionChange(event) {
    event.preventDefault();
    this.setState({
      body: event.target.value
    });
  }
  onAddItem(event) {
    event.preventDefault();
    axios
      .post('http://vps124703.vps.ovh.ca/todos', this.state)
      .then((result) => {
        window.location.reload();
      });
  }

  showItem(itemId) {

  }

  render() {
    const items = [{ id: 1, title: 'Wash the plates' }, { id: 2, title: 'Clean the louvres' }, { id: 3, title: 'Dust the chairs carefully' }, { id: 4, title: 'Wash all the cloths in the wardrobe' }];
    return (
      <div className="main">
        <Header />
        <div className="main-app">
          <div className="add-box">
            <h1>Add a new item</h1>
            <form action="">
              <label htmlFor="">Title</label>
              <input type="text" onChange={this.onTitleChange} />

              <label htmlFor="">Description</label>
              <textarea name="" id="" cols="30" rows="2" onChange={this.onDescriptionChange}></textarea>

              <div className="bttn-wrapper">
                <button onClick={this.onAddItem}>Add Item</button>
              </div>
            </form>
          </div>

          <div className="list-box">
            <h1>My List</h1>
            {
              items.map((item) => {
                return (
                  <ListCard key={item.id} title={item.title} onClick={this.showItem.bind(item.id)} />
                );
              })
            }
          </div>

          <div className="details-box">
            <h1>Item Details</h1>
            <h3>{this.state.itemDetails.title}</h3>
            <p>{this.state.itemDetails.body}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
