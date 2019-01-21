import React, {Component} from 'react'
import http from 'axios'
import Header from "./Header";

const apiUrl = 'http://localhost:5555/';

class List extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
        };
        this.fetch = this.fetch.bind(this);
    }

    fetch() {
        http.get(apiUrl + "events").then(res => {
            if (res.status === 200) {
                console.log(res.data);
                this.setState({
                    list: res.data.events.map((event => (
                        <li className="list-group-item">
                            <div>
                                {event.resolved}
                                {event.id}
                                {event.description}
                                {event.author}
                                {event.title}
                                {event.created}
                            </div>
                        </li>
                    ))),
                });
            } else {
                alert("Login again")
            }
        })
    }

    componentDidMount() {
        this.fetch()
    }

    render() {

        this.fetch();

        this.state.list.push({resolved: "", id: "1", description: "", author: "ja", title: "title", created: "2012"});
        this.state.list.push({
            resolved: "bang2",
            id: "2",
            description: "",
            author: "ja",
            title: "title",
            created: "2012"
        });

        return (
            <table id="mytable" className="table">

                <thead>
                <th>Rozwiązane</th>
                <th>Identyfikator</th>
                <th>Opis</th>
                <th>Autor</th>
                <th>Tytuł</th>
                <th>Data stworzenia</th>
                <th>Usuń</th>
                </thead>
                <tbody>
                {this.state.list.map(function (event) {
                    return <tr>
                        <td>{event.resolved}</td>
                        <td>{event.id}</td>
                        <td>{event.description}</td>
                        <td>{event.author}</td>
                        <td>{event.title}</td>
                        <td>{event.created}</td>
                        <td>
                            <p data-placement="top" data-toggle="tooltip" title="Delete">
                                <button className="btn btn-danger btn-xs" data-title="Delete"
                                        data-toggle="modal"
                                        data-target="#delete">
                                    <a href={"http://localhost:5050/delete?id=" + event.id}>
                                        <span className="glyphicon glyphicon-trash"/>
                                    </a>
                                </button>
                            </p>
                        </td>
                    </tr>;
                })}
                </tbody>
            </table>
        )
    }
}

export default List;
