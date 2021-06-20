import React, { Component } from 'react'
import axios from 'axios'
import './App.css';

export default class App extends Component {

  componentDidMount(){
    this.kullaniciCek()
  }
  
  kullaniciCek = () => {
    axios.get('http://localhost:5555/kullanici').then(res => console.log(res.data))
  }

  render() {
    return (
      <div>
        <h1>FI APP</h1>
      </div>
    )
  }
}
//npm start