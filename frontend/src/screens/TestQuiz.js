import React, { useCallback, useEffect, useState } from "react";
import StepWizard from "react-step-wizard";
import Choose from "../components/Choose";
import ScoreQuiz from "../components/ScoreQuiz";
import TestChoose from "../components/TestChoose";
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
            <TestChoose sendQuiz={sendQuiz} update={updateForm} myquiz={quiz} />
          ))}
        {quizs && quizs.length > 0 && (
          <ScoreQuiz score={score} />
        )}

      </StepWizard>
    </div>
  );
}
