import axios from 'axios';
import authHeader from './auth-header';
import config from '../config';

const QUIZ_API_BASE_URL = config.SERVER_URL+"/api/v2";
class QuizService {

    getQuizs(){
        return   axios({
            "method": "GET",
            "url": QUIZ_API_BASE_URL+'/quizs',
            "headers": authHeader()
          });
    }

    getQuizById(id){
        return axios.get(QUIZ_API_BASE_URL + '/quiz/' + id);
    }

    createQuiz(Quiz){
        return axios.post(QUIZ_API_BASE_URL + '/quiz/', Quiz);
    }

    updateQuiz(Quiz){

        return   axios({
            "method": "PUT",
            "url": QUIZ_API_BASE_URL+"/quiz",
            "data":Quiz,
            "headers": authHeader()
          });
    }

    deleteQuiz(QuizId){
        return axios.delete(QUIZ_API_BASE_URL + "/quiz" + QuizId);
    }
}

export default new QuizService()