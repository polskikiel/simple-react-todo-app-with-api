import React, {Component} from 'react'
import http from 'axios'

const apiUrl = 'http://localhost:5555/';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            login: '',
            password: ''
        };
        this.login = this.login.bind(this);
        this.changeLogin = this.changeLogin.bind(this);
        this.changePass = this.changePass.bind(this);
    }

    changeLogin(e) {
        this.setState({
            login: e.target.value
        })
    }

    changePass(e) {
        this.setState({
            password: e.target.value
        })
    }

    login(e) {
        e.preventDefault();
        http.post(apiUrl + "/auth/singin?email=" + this.state.login + "&password=" + this.state.password, function () {

        }).then(res => {
            if (res.status === 200) {
                this.setState({
                    text: ''
                });
                this.props.changeData(
                    this.props.data.concat(res.data)
                )
            } else {
                alert("Wrong username or password")
            }
        })
    }

    render() {
        return (
            <section className='login-page'>
                <form onSubmit={this.login}>
                    Login
                    <br/>
                    <input type="text"
                           onChange={this.changeLogin}
                           ref={(input) => {
                               this.fromInput = input
                           }}
                    />
                    <br/>
                    Password
                    <br/>
                    <input type="password"
                           onChange={this.changePass}
                           ref={(input) => {
                               this.fromInput = input
                           }}
                    />
                    <br/>
                    <input type="submit" value="Login"/>
                    <p className="message">Not registered? <a href="/register">Create an account</a></p>
                </form>
            </section>
        )
    }
}

export default Login;
