import React, { Component } from "react";
import axios from "axios";
import "./App.css";

export default class App extends Component {
  componentDidMount() {
    this.kullaniciCek();
  }

  kullaniciCek = () => {
    axios
      .get("http://localhost:5555/kullanici")
      .then((res) => console.log(res.data));
  };

  render() {
    return (
      <div class="text-center mt-3">
        <h1>FI APP</h1>
        <div className="mx-auto w-25 mt-3">
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Ad Soyad</label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Ad Soyad"
              />
            </div>
            <div class="form-group my-3">
              <label for="exampleFormControlInput2">Email Adresi</label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput2"
                placeholder="name@example.com"
              />
            </div>
            <div class="form-group m-3">
              <label for="exampleFormControlSelect1">Kategori</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Öneri</option>
                <option>Hata Bildir</option>
              </select>
            </div>
           
            <div class="form-group m-3">
              <label for="exampleFormControlTextarea1">İçerik</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button className="btn btn-success">
              Gönder
            </button>
          </form>
        </div>
      </div>
    );
  }
}
//npm start
