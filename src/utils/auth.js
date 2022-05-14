

const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
        return null;
    }
};

const authHeader = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.accessToken) {
        return { "Authorization": user.accessToken };
    } else {
        return {};
    }
};

const saveAuth = (data) => {
    data = JSON.stringify({accessToken : data.access_token});
    console.log(data);
    localStorage.setItem("user", JSON.stringify(data));
    console.log(localStorage.getItem("user"));
};
