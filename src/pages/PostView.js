import axios from 'axios';
import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import '../css/PostView.css';


const authHeader = () => {
    const user = JSON.parse(JSON.parse(localStorage.getItem("user")));
    if (user && user.accessToken) {
        return {"Authorization": user.accessToken};
    } else {
        return {};
    }
};

class PostView extends Component {
    state = {
        loading: false,
        post: {},
        loading: false,
        id: window.location.href.split('/')[5],
    };


    getPostData = async () => {
        await axios.get(`/market?id=${this.state.id}`).then(({data}) => {
            this.setState({
                post: data.data
            })
            console.log(this.state.post);
        }).catch(err => {
            console.log(err);
        })
    }

    onClickBuyButton = async () => {
        await axios.post('/market/buy', {
            buy_animal_id: this.state.id
        }, {
            headers: authHeader()
        }).then(({data}) => {
            console.log(data);
        }).catch(err => {
            console.log(err);
            alert("Please login first");
        });
    }


    componentDidMount() {
        this.getPostData();
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div class="row featurette">
                    <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading">{this.state.post.animal_name}</h2>
                        <span class="text-muted">{this.state.post.username}</span>
                        <p class="lead">{this.state.post.description} Waking up for the sunrise is always epic. Or
                            that's how the pictures make it look like. Truth is waking up is a struggle but the rewards,
                            that's something else.</p>
                        <div>
                            <span class="text-muted">View : {this.state.post.view_count}</span>
                        </div>
                        <a id="buy-button" class="btn btn-secondary" onClick={this.onClickBuyButton}>Buy NFT</a>
                    </div>

                    <div class="col-md-5 order-md-1">
                        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                             width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img"
                             aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#eee"></rect>
                            <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
                        </svg>
                    </div>
                </div>
                <hr class="featurette-divider"></hr>
            </div>
        )
    }

}


export default PostView;

