import axios from 'axios';

const AUTH_API_BASE_URL = "http://localhost:8080/api/v1/auth";

class Authentication {
    login(email, password) {
        return axios.post(AUTH_API_BASE_URL + "/login", {
            userName: email,
            userPassword: password,
        });
    }

    register(data) {
        return axios.post(AUTH_API_BASE_URL + "/register", data);
    }
}

export default new Authentication();