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
    alertErrorDisplay: "none",
  };

  alanlariTemizle = () => {
    //const { tamIsim, emailAdres, fikirTuru, fikir } = this.state
    this.setState({tamIsim:'',emailAdres:'',fikirTuru:'Öneri',fikir:''})
  }

  formValidation = () => {
    const { tamIsim, emailAdres, fikirTuru, fikir } = this.state
    if(!tamIsim||!emailAdres||!fikirTuru||!fikir) return false
    return true
  }
  
  formuGonder = () => {
    //console.log(this.state);
    const { tamIsim, emailAdres, fikirTuru, fikir } = this.state
    
    //doğrulamayı geçerse
    if(!this.formValidation()) return
    axios
      .post("http://localhost:5555/fikirkaydet", {
        tamIsim,
        emailAdres,
        fikirTuru,
        fikir,
      })
      .then((res) => {
        this.alanlariTemizle()
        this.setState({ alertSuccessDisplay: "block" });
      })
      .catch((err) => {
        this.setState({ alertErrorDisplay: "block" });
      });
  };

  render() {
    return (
      <div className="text-center mt-3">
        <h1>FI APP</h1>
        <div className="mx-auto w-25 mt-3">
          <div
            className="alert alert-success"
            role="alert"
            style={{ display: this.state.alertSuccessDisplay }}
          >
            Fikriniz iletilmiştir!
          </div>

          <div
            className="alert alert-danger"
            role="alert"
            style={{ display: this.state.alertErrorDisplay }}
          >
            Fikriniz iletilmiştir!
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Ad Soyad</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Ad Soyad"
              value={this.state.tamIsim}
              onChange={(e) => this.setState({ tamIsim: e.target.value })}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="exampleFormControlInput2">Email Adresi</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="name@example.com"
              value={this.state.emailAdres}
              onChange={(e) => this.setState({ emailAdres: e.target.value })}
            />
          </div>
          <div className="form-group m-3">
            <label htmlFor="exampleFormControlSelect1">Fikir Türü</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              onChange={(e) => this.setState({ fikirTuru: e.target.value })}
            >
              <option>Öneri</option>
              <option>Hata Bildir</option>
            </select>
          </div>

          <div className="form-group m-3">
            <label htmlFor="exampleFormControlTextarea1">İçerik</label>
            <textarea
              className="form-control"
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
