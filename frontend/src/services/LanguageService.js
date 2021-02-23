import axios from 'axios';
import authHeader from './auth-header';
import config from '../config';

const LANGUAGE_API_BASE_URL = config.SERVER_URL+"/api/v3";
class LanguageService {

    getLanguages(){
        return   axios({
            "method": "GET",
            "url": LANGUAGE_API_BASE_URL+'/languages',
            "headers": authHeader()
          });
    }

    getLanguageById(id){
        return axios.get(LANGUAGE_API_BASE_URL + '/language/' + id);
    }

    createLanguage(Language){
        return axios.post(LANGUAGE_API_BASE_URL + '/language/', Language);
    }

    updateLanguage(Language){

        return   axios({
            "method": "PUT",
            "url": LANGUAGE_API_BASE_URL+"/language",
            "data":Language,
            "headers": authHeader()
          });
    }

    deleteLanguage(LanguageId){
        return axios.delete(LANGUAGE_API_BASE_URL + "/language" + LanguageId);
    }
}

export default new LanguageService()