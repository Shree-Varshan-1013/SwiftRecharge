import axios from "axios";

const CUSTOMER_API_BASE_URL = "http://localhost:8080/api/v1/customer/";

class CustomerService {
  getUserData(username, token) {
    return axios.get(CUSTOMER_API_BASE_URL + username, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  UpdateUserData(username, email, operator, location, token) {
    return axios.get(CUSTOMER_API_BASE_URL + username + "/" + email + "/" + operator + "/" + location, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  getPlans(operatorName, token) {
    return axios.get(CUSTOMER_API_BASE_URL + "plan/" + operatorName, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getAddon(operatorName, token) {
    return axios.get(CUSTOMER_API_BASE_URL + "getAddons/" + operatorName, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  makeRecharge(username, token, data) {
    return axios.post(CUSTOMER_API_BASE_URL + "make-recharge/" + username, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getPayments(username, token) {
    return axios.get(CUSTOMER_API_BASE_URL + "get-payments/" + username, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getOnePayment(username, token) {
    return axios.get(CUSTOMER_API_BASE_URL + "get-latest-plan/" + username, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

}

export default new CustomerService();
