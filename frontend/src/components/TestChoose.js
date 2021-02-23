import React, { useState } from "react";
import config from "../config";

export default function TestChoose(props) {
  const quiz = props.myquiz;
  const chooses = quiz.chooses;
  const [borderColor, setborderColor] = useState([]);
  const [solidBorder, setsolidBorder] = useState([]);

  const clickHandler = (index) => {

    solidBorder[quiz.trueChoose] = "solid";
    borderColor [quiz.trueChoose] = "green";

    if (quiz.trueChoose !== index) {
      
      solidBorder[index] = "solid";
      borderColor [index] = "#ff0000";
      setsolidBorder({...solidBorder});
      setborderColor({...borderColor});
    }
    else {
      props.update();
    }

    setsolidBorder({...solidBorder});
    setborderColor({...borderColor});
    setTimeout(() => { props.nextStep(); }, 500);


  };

  const add_url = (url) => {
    return config.SERVER_URL+"/api/files/file/" + url;
  };

  return (
    <div className="w-100">
      <div className="row wrapper border-bottom white-bg page-heading w-100">
        <div className="col">
          <h2>{quiz.title_q}</h2>
        </div>
      </div>

      <div className="wrapper wrapper-content animated fadeInRight">
        <div className="row">
          {chooses.map((choose, index) => (
            <div
              className="col-md-4 m-2"
              onClick={() => clickHandler(index)}
              style={{
                borderStyle: solidBorder[index],
                borderColor: borderColor[index],
              }}
              id={"quiz" + index}
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
