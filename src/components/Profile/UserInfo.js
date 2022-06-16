const authHeader = () => {
    const user = JSON.parse(JSON.parse(localStorage.getItem("user")));
    if (user && user.accessToken) {
        return {"Authorization": user.accessToken};
    } else {
        return {};
    }
};

class UserInfo extends Component {
}