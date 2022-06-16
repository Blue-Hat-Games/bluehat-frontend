import React, {Component} from 'react';
import axios from 'axios';
import '../css/Market.css';
import {Button, Nav} from 'react-bootstrap';
import Navbar from '../components/Navbar';
import {Link} from 'react-router-dom';

class Market extends Component {
    state = {
        loading: false,
        ItemList: [],
        img: ['images/bird.webp', 'images/cow.webp', 'images/duck.webp'],
        count: 0,
        limit: 20,
        page: 1,
        order: 'Newest'
    };

    getItemCount = async () => {
        axios.get('/market/counts').then(({data}) => {
            this.setState({
                count: data.data.totalCount
            })
        }).catch(err => {
            console.log(err);
        })
    }

    loadItem = async () => {
        axios.get(`/market/list?order=${this.state.order}&limit=${this.state.limit}&page=${this.state.page}`).then(({data}) => {
                this.setState({ItemList: data});
            }
        ).catch(err => {
            console.log(err);
            this.setState({loading: false});
        })
    }

    setPage = async (page) => {
        await this.setState({page: page})
        this.loadItem();
    }

    Pagenation({total, limit, page, setPage}) {
        const numPages = Math.ceil(total / limit);
        return (
            <>
                <Nav class='Pagenation'>
                    <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
                        &lt;
                    </Button>
                    {Array(numPages)
                        .fill()
                        .map((_, i) => (
                            <Button
                                key={i + 1}
                                onClick={() => setPage(i + 1)}
                                aria-current={page === i + 1 ? "page" : null}
                            >
                                {i + 1}
                            </Button>
                        ))}
                    <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
                        &gt;
                    </Button>
                </Nav>
            </>
        )
    }

    componentDidMount() {
        this.getItemCount();
        this.loadItem();
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className="item-list">
                    <div className="item-container" class='card-group'>
                        <div className="item-list-title" class='row row-cols-6'>
                            {this.state.ItemList.map(item => (
                                <div className="item-wrap" class="card col">
                                    <Link to={{
                                        pathname: `/market/detail/${item.id}`
                                    }}>
                                        <img src={this.state.img[0]} class="card-img-top" alt="..."></img>
                                        <div className="item-info" class="card-body">
                                            <div className="item-user">{item.username}</div>
                                            <div className="item-title">{item.animal_name}</div>
                                            <table>
                                                <tr>
                                                    <td>
                                                        <div className="item-price">Price : {item.price}</div>
                                                    </td>
                                                    <td className='td-end'>
                                                        <div className="item-view">View : {item.view_count}</div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <this.Pagenation total={this.state.count} limit={this.state.limit} page={this.state.page}
                                 setPage={this.setPage}/>
            </div>

        )
    }

}


export default Market;