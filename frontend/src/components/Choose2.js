import React from "react";
import config from "../config";

export default function Choose2(props) {
  // console.log(props);

  const quiz = props.myquiz;
  const chooses = quiz.chooses;

  console.log(quiz);

  const clickHandler = (index) => {
    // alert(index);
    props.update(props.currentStep, index);
    if (props.currentStep === props.totalSteps - 1) {
      props.sendQuiz();
    }
    props.nextStep();
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
