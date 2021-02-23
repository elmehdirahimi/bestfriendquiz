import React, { useCallback, useEffect, useState } from "react";
import StepWizard from "react-step-wizard";
import Choose from "../components/Choose";
import AllQuizService from "../services/AllQuizService";
import QuizsServices from "../services/QuizsServices";
import Last from "./Last";

function Quiz(props) {


  // const {data} = mydata;
  // const quizs = data.find(quiz => quiz._id == quizId).quizs;
  const [quizs, setquizs] = useState([]);
  const [newId, setnewID] = useState("");
  const [newQuizs, setnewQuizs] = useState([])

  const fetchData = useCallback(() => {

    AllQuizService.getAllQuizById( props.match.params.id).then((response) => {
      setquizs(response.data.allQuiz.quizs);
      setnewQuizs({...response.data.allQuiz});
      // console.log(response.data.allQuiz.quizs);
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  


  const updateForm = (key, value) => {
    // console.log(newQuizs);
    newQuizs.quizs[key - 1].trueChoose = value;
    // console.log(key + " " + value);
  };

  const sendQuiz = () => {
    delete newQuizs.id;
    newQuizs.type = "test";
    AllQuizService.createAllQuiz(newQuizs).then((response) => {
      setnewID(response.data.savedAllQuiz);

      // alert("DSsd");
    });;

    // console.log(newId);
  };

  return (
    
    <div className="col-lg-12">
      <StepWizard>
        {/* <First update={updateForm} /> */}
        {quizs && quizs.map((quiz)=> (

          <Choose sendQuiz={sendQuiz} update={updateForm} myquiz={quiz} />
        ))}
         {quizs && quizs.length > 0 && (
 <Last newId={newId}/>
         )}
       
      </StepWizard>
    </div>
  );
}

export default Quiz;
