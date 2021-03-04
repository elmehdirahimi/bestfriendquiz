import React, { useCallback, useEffect, useState } from "react";
import StepWizard from "react-step-wizard";
import Choose from "../components/Choose";
import ScoreQuiz from "../components/ScoreQuiz";
import TestChoose1 from "../components/TestChoose1";
import TestChoose2 from "../components/TestChoose2";
import TestChoose3 from "../components/TestChoose3";

import AllQuizService from "../services/AllQuizService";

export default function TestQuiz(props) {

  const [quizs, setquizs] = useState([]);
  const [score, setscore] = useState(0)

  const fetchData = useCallback(() => {

    AllQuizService.getAllQuizById(props.match.params.id).then((response) => {
      setquizs(response.data.allQuiz.quizs);
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);




  const updateForm = () => {
    setscore(score + 1);
  };

  const sendQuiz = () => {

  };

  
  return (
    <div className="w-100">
      <StepWizard>
        {/* <First update={updateForm} /> */}
        {quizs &&
          quizs.map((quiz) => (
            quiz.type == 1 ? (
              <TestChoose1 sendQuiz={sendQuiz} update={updateForm} myquiz={quiz} />
            ) : quiz.type == 2 ? (
              <TestChoose2 sendQuiz={sendQuiz} update={updateForm} myquiz={quiz} />
            ) : (
              <TestChoose3 sendQuiz={sendQuiz} update={updateForm} myquiz={quiz} />
            )
          ))}
        {quizs && quizs.length > 0 && (
          <ScoreQuiz score={score} />
        )}

      </StepWizard>
    </div>
  );
}
