import React, { Component } from 'react'

export default class Admin extends Component {

    state = {
        username:'',
        password:''
    }

    render() {
        return (
            <div className="text-center mt-3">
            <h1>Admin Giriş</h1>
            <div className="mx-auto w-25 mt-3">
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Kullanıcı Adı</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Kullanıcı Adı"
                  value={this.state.username}
                  onChange={(e) => this.setState({ username: e.target.value })}
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="exampleFormControlInput2">Şifre</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput2"
                  placeholder="******"
                  value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </div>
              <button className="btn btn-success w-100" onClick={this.formuGonder}>
                Giriş
              </button>
            </div>
            <br/>
          </div>
        )
    }
}
