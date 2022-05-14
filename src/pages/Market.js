import React, { Component } from 'react';
import axios from 'axios';
import '../css/Market.css';

class Market extends Component {
    state = {
        loading: false,
        ItemList: [],
        img: ['images/bird.webp', 'images/cow.webp', 'images/duck.webp']
    };
    loadItem = async () => {
        axios.get('/market?order=Oldest&limit=20&page=1').then(({ data }) => {
            console.log(data);
            this.setState({ ItemList: data });
        }
        ).catch(err => {
            console.log(err);
            this.setState({ loading: false });
        })
    }

    componentDidMount() {
        this.loadItem();
    }

    render() {
        return (
            <div>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="true">
                        Dropdown
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <li><button class="dropdown-item" type="button">Action</button></li>
                        <li><button class="dropdown-item" type="button">Another action</button></li>
                        <li><button class="dropdown-item" type="button">Something else here</button></li>
                    </ul>
                </div>
                <div className="item-list">
                    <div className="item-container" class='container'>
                        <div className="item-list-title" class='row row-cols-5'>
                            {this.state.ItemList.map(item => (
                                <div className="item-wrap" class="card col">
                                    <img src={this.state.img[Math.floor(Math.random() * this.state.img.length)]} class="card-img-top" alt="..."></img>
                                    <div className="item-info" class="card-body">
                                        <div className="item-user">{item.user_id}</div>
                                        <div className="item-title" class="card-title">{item.name}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <nav aria-label="Page navigation">
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
                            <a class="page-link">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="/market?page=1">1</a></li>
                        <li class="page-item"><a class="page-link" href="/market?page=2">2</a></li>
                        <li class="page-item"><a class="page-link" href="/market?page=3">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>

        )
    }

}



export default Market;