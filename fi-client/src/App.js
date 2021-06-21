import React, { Component } from "react";
import axios from "axios";
import "./App.css";

export default class App extends Component {
  state = {
    tamIsim: "",
    emailAdres: "",
    fikirTuru: "Öneri",
    fikir: "",
    alertSuccessDisplay: "none",
    alertErrorDisplay: "none"
  };

  formuGonder = () => {
    //console.log(this.state);
    const { tamIsim, emailAdres, fikirTuru, fikir } = this.state;
    axios
      .post("http://localhost:5555/fikirkaydet", {
        tamIsim,
        emailAdres,
        fikirTuru,
        fikir,
      })
      .then((res) => {
        this.setState({alertSuccessDisplay:'block'})
      }).catch(err => {
        this.setState({alertErrorDisplay:'block'})
      })
  };

  render() {
    return (
      <div class="text-center mt-3">
        <h1>FI APP</h1>
        <div className="mx-auto w-25 mt-3">
          <div className="alert alert-success" role="alert" style={{display:this.state.alertSuccessDisplay}}>
            Fikriniz iletilmiştir!
          </div>

          <div className="alert alert-danger" role="alert" style={{display:this.state.alertErrorDisplay}}>
            Fikriniz iletilmiştir!
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Ad Soyad</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Ad Soyad"
              value={this.state.tamIsim}
              onChange={(e) => this.setState({ tamIsim: e.target.value })}
            />
          </div>
          <div class="form-group my-3">
            <label for="exampleFormControlInput2">Email Adresi</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput2"
              placeholder="name@example.com"
              value={this.state.emailAdres}
              onChange={(e) => this.setState({ emailAdres: e.target.value })}
            />
          </div>
          <div class="form-group m-3">
            <label for="exampleFormControlSelect1">Fikir Türü</label>
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              onChange={(e) => this.setState({ fikirTuru: e.target.value })}
            >
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
              value={this.state.fikir}
              onChange={(e) => this.setState({ fikir: e.target.value })}
            ></textarea>
          </div>
          <button className="btn btn-success" onClick={this.formuGonder}>
            Gönder
          </button>
        </div>
      </div>
    );
  }
}
//npm start
