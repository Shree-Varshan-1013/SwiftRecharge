import axios from "axios";

const ADMIN_API_BASE_URL = "http://127.0.0.1:8080/api/v1/admin";

class AdminService {
  getUsersInfos(token) {
    return axios.get(
      ADMIN_API_BASE_URL + "/get-all-users",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
  registerNewAdmin(token, data) {
    return axios.post(
      ADMIN_API_BASE_URL + "/register-new-admin",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }


  addPlan(plan, token) {
    return axios.post(ADMIN_API_BASE_URL + "/plan", plan, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }

  getPlans(token) {
    return axios.get(ADMIN_API_BASE_URL + "/plan", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  getPlanById(id, token) {
    return axios.get(ADMIN_API_BASE_URL + "/plan/" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  deletePlanById(id, token) {
    return axios.delete(ADMIN_API_BASE_URL + "/plan/" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  updatePlan(id, data, token) {
    return axios.put(ADMIN_API_BASE_URL + "/plan/" + id, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getAddon(token) {
    return axios.get(ADMIN_API_BASE_URL + "/getAddons", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getAddOnById(id, token) {
    return axios.get(ADMIN_API_BASE_URL + "/addon/" + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getRecharges(token) {
    return axios.get(ADMIN_API_BASE_URL + "/get-recharges", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }


}

export default new AdminService();
