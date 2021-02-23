import React from "react";
import config from "../config";

export default function Choose(props) {
  // console.log(props);

  const quiz = props.myquiz;
  const chooses = quiz.chooses;

  // border-style: solid;
  // border-color: green;

  const clickHandler = (index) => {
    // alert(index);
    props.update(props.currentStep, index);
    if (props.currentStep === props.totalSteps - 1) {
      props.sendQuiz();
    }
    props.nextStep();
    
  };
  const add_url = (url) => {
    return config.SERVER_URL+"/api/files/file/" + url;
  };

  return (
    <div>
      <div className=" row wrapper border-bottom white-bg page-heading">
        <div className="col">
          <h2>{quiz.title_q}</h2>
        </div>
        <div className="col-lg-2"></div>
      </div>

      <div className="wrapper wrapper-content animated fadeInRight "
     
      >
        <div className="row">
          {chooses.map((choose, index) => (
            <div className="col-md-4" onClick={() => clickHandler(index)}
             
            >
              <div className="ibox">
                <div className="ibox-content product-box">
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={add_url(choose.image_q)}
                    alt=""
                  />
                  <div className="product-desc">
                    <a href="#" className="product-name">
                      {choose.title_q}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Stats step={2} {...props} /> */}
    </div>
  );
}
