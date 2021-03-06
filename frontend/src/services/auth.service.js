import axios from "axios";
import config from "../config";

const API_URL = config.SERVER_URL+"/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username,nom,prenom,roles,email,password) {
 console.log(username+" "+nom+" "+prenom+" "+roles+" "+email+" "+password);
    return axios.post(API_URL + "signup", {
      username,nom,prenom,roles,email,password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
