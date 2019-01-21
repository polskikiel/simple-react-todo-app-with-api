import React, {Component} from 'react'
import http from 'axios'
const apiUrl = 'http://localhost:5555/';

class Registration extends Component {
    constructor() {
        super();
        this.state = {
            login: '',
            password: '',
            mail: ''
        };
        this.register = this.register.bind(this);
        this.changeLogin = this.changeLogin.bind(this);
        this.changePass = this.changePass.bind(this);
        this.changeMail = this.changeMail.bind(this);
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

    changeMail(e) {
        this.setState({
            mail: e.target.value
        })
    }

    register(e) {
        e.preventDefault();
        http.post(apiUrl + "auth/register?name=" + this.state.login + "&email=" + this.state.mail + "&password=" + this.state.password, function () {

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
            <section className='RegisterForm'>
                <form onSubmit={this.register}>
                    Login
                    <br/>
                    <input type="text"
                           onChange={this.changeLogin}
                           ref={(input) => {
                               this.fromInput = input
                           }}
                    />
                    <br/>
                    Email
                    <br/>
                    <input type="text"
                           onChange={this.changeMail}
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
                    <input type="submit" value="submit"/>
                </form>
            </section>
        )
    }
}

export default Registration;
