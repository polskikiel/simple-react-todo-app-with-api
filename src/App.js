import React, {Component} from 'react'
import http from 'axios'
import Routes from "./Routes";
import Header from "./Header";

const apiUrl = 'http://localhost:5555/';

class App extends Component {
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
        this.fromInput.setAttribute('disabled', '');
        http.post(apiUrl + "?login=" + this.state.login + "&pass=" + this.state.password, function () {

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
            this.fromInput.removeAttribute('disabled')
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <br/>
                <Routes/>
            </div>
        )
    }
}

export default App;
