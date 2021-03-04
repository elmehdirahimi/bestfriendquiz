import React, { useState } from 'react'

export default function ScoreQuiz(props) {
 

  return (
    <div className="middle_conatainer_yellow">
      <div className="middle_conatainer">
        <div className="result_div">
          <h2>
            Congrats! You have scored {props.score}/{props.totalSteps - 1} in
            this quiz about wew
          </h2>
          <div className="result_meter">
            <span>Good Friend</span>
            <div className="triangle-up" />
            <div
              className="result_meter_outer ng-scope"
              ng-controller="QuizController"
              ng-init="initResultUi(9,10);"
            >
              <div
                id="result_meter_inner"
                className="result_meter_inner"
                style={{ width: ((props.score.toFixed(2) /  (props.totalSteps.toFixed(2) - 1 - 0).toFixed(2)) * 100.0).toFixed(0)+"%" }}
              />
            </div>
            <div className="down_area">
              <div className="triangle-down">
                <div className="triangle-down_txet">Friend</div>
              </div>
              <div className="triangle-down2">
                <div className="triangle-down_txet2">Best Friend</div>
              </div>
            </div>
          </div>
          <h3>Now, it’s your turn. Create your own Quiz</h3>
          <h3 />
        </div>
      </div>
      <div className="middle_div share_div">
        <div className="continue_btn_div">
          <button
            onclick="return gtmEventTracking('create_quiz');"
            className="scoreboard_btn create_quiz"
            data-toggle="modal"
            id="change_lang"
            data-target="#language_popup"
            data-href="/create/{CATID}?utm_site_source=UFresult&utm_site_medium=create-new&utm_site_campaign=user-friend"
          >
            Create Your Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
