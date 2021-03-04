import React, { useCallback, useEffect, useState } from "react";
import StepWizard from "react-step-wizard";
import Choose1 from "../components/Choose1";
import Choose2 from "../components/Choose2";
import Choose3 from "../components/Choose3";
import AllQuizService from "../services/AllQuizService";
import QuizsServices from "../services/QuizsServices";
import Last from "./Last";

function Quiz(props) {
  const [quizs, setquizs] = useState([]);
  const [newId, setnewID] = useState("");
  const [newQuizs, setnewQuizs] = useState([]);

  const fetchData = useCallback(() => {
    AllQuizService.getAllQuizById(props.match.params.id).then((response) => {
      setquizs(response.data.allQuiz.quizs);
      setnewQuizs({ ...response.data.allQuiz });
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const updateForm = (key, value) => {
    newQuizs.quizs[key - 1].trueChoose = value;
  };

  const sendQuiz = () => {
    delete newQuizs.id;
    newQuizs.type = "test";
    AllQuizService.createAllQuiz(newQuizs).then((response) => {
      setnewID(response.data.savedAllQuiz);
    });
  };

  return (
    <div className="">
      <StepWizard>
        {quizs &&
          quizs.map((quiz) =>
            quiz.type == 1 ? (
              <Choose1 sendQuiz={sendQuiz} update={updateForm} myquiz={quiz} />
            ) : quiz.type == 2 ? (
              <Choose2 sendQuiz={sendQuiz} update={updateForm} myquiz={quiz} />
            ) : (
              <Choose3 sendQuiz={sendQuiz} update={updateForm} myquiz={quiz} />
            )
          )}
        {quizs && quizs.length > 0 && <Last newId={newId} />}
      </StepWizard>
    </div>
  );
}

export default Quiz;
