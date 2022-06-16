import Navbar from '../components/Navbar';
import React, {Component} from 'react';
import axios from 'axios';
import '../css/Market.css';
import {Button, Nav} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import Footer from '../components/Footer';

const authHeader = () => {
    const user = JSON.parse(JSON.parse(localStorage.getItem("user")));
    if (user && user.accessToken) {
        return {"Authorization": user.accessToken};
    } else {
        return {};
    }
};

class Profile extends Component {
    state = {
        loading: false,
        ItemList: [],
        img: ['images/bird.webp', 'images/cow.webp', 'images/duck.webp'],
        count: 0,
        limit: 10,
        page: 1,
        order: 'Newest',
        login: false,
        headers: {},
        username: '',
        usercoin: 0
    };

    checkLogin = async () => {
        const user = JSON.parse(JSON.parse(localStorage.getItem("user")));
        if (user && user.accessToken) {
            this.setState({login: true});
        } else {
            alert('Please login first');
            const navigate = useNavigate();
            navigate("/login");
        }
    }

    getUserInfo = async () => {
        axios.get('/api/users', {
            headers: authHeader()
        }).then(({data}) => {
            this.setState({
                username: data.username,
                usercoin: data.coin
            })
        }).catch(err => {
            console.log(err);
        })
    }

    getUserItemCount = async () => {
        axios.get('/api/nft/user/animal/count', {
            headers: authHeader()
        }).then(({data}) => {
            this.setState({
                count: data.data.totalCount
            })
        }).catch(err => {
            console.log(err);
        })
    }

    loadUserItem = async () => {
        axios.get(`/api/nft/user/animal?order=${this.state.order}&limit=${this.state.limit}&page=${this.state.page}`, {
            headers: authHeader()
        }).then(({data}) => {
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

    logout = async () => {
        localStorage.removeItem('user');
        alert('logout');
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
        this.checkLogin();
        this.getUserInfo();
        this.getUserItemCount();
        this.loadUserItem();
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className="user-info">
                    <h3 className='user-name'>{this.state.username}</h3>
                    <h6>Joined 4 month ago</h6>
                    <h6>4 items</h6>
                    <h6>Coin : {this.state.usercoin}</h6>
                    <h6></h6>
                    <Button onClick={this.logout}>Logout</Button>
                </div>
                <div className="item-list">
                    <div className="item-container" class='container'>
                        <div className="item-list-title" class='row row-cols-6'>
                            {this.state.ItemList.map(item => (
                                <div className="item-wrap" class="card col">
                                    <Link to={{
                                        pathname: `/market/upload/${item.id}`
                                    }}>
                                        <img src={this.state.img[0]} class="card-img-top" alt="..."></img>
                                        <div className="item-info" class="card-body">
                                            <div className="item-user">{item.name}</div>
                                            <div className="item-title">{item.id}</div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <this.Pagenation total={this.state.count} limit={this.state.limit} page={this.state.page}
                                 setPage={this.setPage}/>
                <Footer/>


            </div>

        )
    }

}


export default Profile;