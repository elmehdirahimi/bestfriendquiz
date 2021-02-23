import axios from "axios";
import authHeader from "./auth-header";
import config from "../config";

const FILES_API_BASE_URL = config.SERVER_URL+"/api/files";
class FilesService {

  uploadFile(file) {
      const data = new FormData();
      data.append("file", file);
      return  axios({
        method: 'post',
        url: FILES_API_BASE_URL+"/upload",
        data: data,
        headers: {
            "Content-Type": "multipart/form-data"
          },
      })
  }

  getFile(filename)
  {

    return axios({
      method: "GET",
      url: FILES_API_BASE_URL + "/file/" + filename,
      headers: authHeader(),
    });

  }
}

export default new FilesService();
