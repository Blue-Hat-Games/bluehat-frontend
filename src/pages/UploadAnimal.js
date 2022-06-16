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

class UploadAnimal extends Component {
    state = {
        loading: false,
        post: {},
        loading: false,
        id: window.location.href.split('/')[5],
        inputPrice: 0
    };


    getPostData = async () => {
        await axios.get(`/api/nft/user/animal/${this.state.id}`, {
            headers: authHeader()
        }).then(({data}) => {
            console.log(data)
            this.setState({
                post: data
            })
            console.log(this.state.post);
        }).catch(err => {
            console.log(err);
        })
    }

    onClickSellButton = async () => {
        await axios.post('/api/market/sell', {
            "animal_id": this.state.id,
            "price": 11,
            "seller_private_key": "adsfasdf"
        }, {
            headers: authHeader()
        }).then(({data}) => {
            console.log(data);
            alert('Sell Success');
        }).catch(err => {
            console.log(err);
        });
    }

    handlePriceChange = (event) => {
        this.setState({
            inputPrice: event.target.value
        })
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
                        <h2 class="featurette-heading">{this.state.post.name}</h2>
                        <span class="text-muted">{this.state.post.username}</span>
                        <p class="lead"> nft_hash : {this.state.post.nft_hash}</p>
                        <input placeholder="Price" type="text" name='input_price' value={this.inputPrice}
                               onChange={this.handlePriceChange}/>
                        <a id="buy-button" class="btn btn-secondary" onClick={this.onClickSellButton}>Sell</a>
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


export default UploadAnimal;
