import React, { useState } from "react";
import config from "../config";

export default function TestChoose3(props) {
  const quiz = props.myquiz;
  const chooses = quiz.chooses;
  const [borderColor, setborderColor] = useState([]);
  const [solidBorder, setsolidBorder] = useState([]);

  const clickHandler = (index) => {
    solidBorder[quiz.trueChoose] = "solid";
    borderColor[quiz.trueChoose] = "green";

    if (quiz.trueChoose !== index) {
      solidBorder[index] = "solid";
      borderColor[index] = "#ff0000";
      setsolidBorder({ ...solidBorder });
      setborderColor({ ...borderColor });
    } else {
      props.update();
    }

    setsolidBorder({ ...solidBorder });
    setborderColor({ ...borderColor });
    setTimeout(() => {
      props.nextStep();
    }, 500);
  };

  const add_url = (url) => {
    return config.SERVER_URL + "/api/files/file/" + url;
  };

  return (
    <div id="quizDiv">
      <div className="content_area">
        <h2 className="ng-binding">{quiz.title_q}</h2>
      </div>
      <div className="photos_area">
        {chooses.map((choose, index) => (
          <div
            className="optionDiv option-div ng-scope"
            ng-repeat="option in currentQuestion.options"
          >
            <a
              onClick={() => clickHandler(index)}
              href="javascript:void(0)"
              ng-click="choosenOption(option.questionOptionId, option);showNextQuestion();"
              ng-bind-html="option.content"
              className="ng-binding"
              style={{
                borderStyle: solidBorder[index],
                borderColor: borderColor[index],
              }}
              id={"quiz" + index}
            >
              <div className="left-div">
                <div className="image-div">
                <img alt  src={add_url(choose.image_q)} />

                </div>
                <div className="card-body">{choose.title_q}</div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <button ng-click="changeQuestion()" className="question_skip_btn">
        Skip Question
      </button>
    </div>
  );
}
