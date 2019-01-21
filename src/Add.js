import React, {Component} from 'react'
import http from 'axios'

const apiUrl = 'http://localhost:5555/';
class Add extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            img: ''

        };
        this.add = this.add.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.changeDesc = this.changeDesc.bind(this);
    }

    changeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    changeDesc(e) {
        this.setState({
            description: e.target.value
        })
    }

    changeImg(e) {
        this.setState({
            img: e.target.value
        })
    }

    add(e) {
        e.preventDefault();
        http.post(apiUrl + "/events?title=" + this.state.title + "&description=" + this.state.description + "&image=" + this.state.img, function () {

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
                <form onSubmit={this.add}>
                    Title
                    <br/>
                    <input type="text"
                           onChange={this.changeTitle}
                           ref={(input) => {
                               this.fromInput = input
                           }}
                    />
                    <br/>
                    Description
                    <br/>
                    <input type="text"
                           onChange={this.changeDesc}
                           ref={(input) => {
                               this.fromInput = input
                           }}
                    />
                    <br/>
                    Image
                    <br/>
                    <input type="text"
                           onChange={this.changeImg}
                           ref={(input) => {
                               this.fromInput = input
                           }}
                    />
                    <br/>
                    <input type="submit" value="submit"/>
                </form>
        )
    }
}

export default Add;
