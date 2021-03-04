import React, { useState } from "react";
import config from "../config";

export default function TestChoose2(props) {
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
    <div className="ng-scope">
      <div className="middle_conatainer">
        <div className="qusetion_div" id="question_number_border">
          <h2 className="ng-binding">{quiz.title_q}</h2>
        </div>
      </div>
      <div className="hlist_main">
        {/* ngRepeat: option in currentQuestion.options */}
        {chooses.map((choose, index) => (
          <div className="hlist" ng-repeat="option in currentQuestion.options">
            <div
              onClick={() => clickHandler(index)}
              onmouseover="addHoverClass(this)"
              onmouseout="removeHoverClass(this)"
              ontouchstart="addHoverClass(this)"
              ontouchend="removeHoverClass(this)"
              href="javascript:void(0)"
              ng-click="choosenOption(option.questionOptionId, option,1000);"
              style={{
                borderStyle: solidBorder[index],
                borderColor: borderColor[index],
              }}
              id={"quiz" + index}
            >
              <a ng-bind-html="option.content" className="ng-binding">
                {choose.title_q}
              </a>
            </div>
          </div>
        ))}
      </div>
      <button ng-click="changeQuestion()" className="question_skip_btn">
        Skip Question
      </button>
    </div>
  );
}
