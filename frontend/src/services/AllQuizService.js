import axios from 'axios';
import authHeader from './auth-header';
import config from '../config';

const ALLQUIZ_API_BASE_URL = config.SERVER_URL+"/api/v1";
class AllQuizService {

    getAllQuizs(){
        return   axios({
            "method": "GET",
            "url": ALLQUIZ_API_BASE_URL+'/allquizs',
            "headers": authHeader()
          });
    }

    getAllQuizById(id){

        return   axios({
            "method": "GET",
            "url": ALLQUIZ_API_BASE_URL + '/allquiz/' + id,
            "headers": authHeader()
          });
    }

    createAllQuiz(allQuiz){
        return axios.post(ALLQUIZ_API_BASE_URL + '/allquiz', allQuiz);
    }

    updateAllQuiz(allQuiz){

        return   axios({
            "method": "PUT",
            "url": ALLQUIZ_API_BASE_URL+"/allquiz",
            "data":allQuiz,
            "headers": authHeader()
          });
    }

    deleteAllQuiz(allQuizId){
        return axios.delete(ALLQUIZ_API_BASE_URL + "/allquiz" + allQuizId);
    }
}

export default new AllQuizService()