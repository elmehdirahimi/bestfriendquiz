import React, { useCallback, useEffect, useState } from "react";
import AllQuizService from "../services/AllQuizService";
import FilesService from "../services/FilesService";
import config from "../config";

export default function AdminChoose(props) {

  const quiz = props.myquiz;
  const chooses = quiz.chooses;

  const [title_q, settitle_q] = useState("");
  const [path, setpath] = useState("");
  const [allQuizs, setallQuizs] = useState({});
  const [type, settype] = useState(1);

  const fetchData = useCallback(() => {
    AllQuizService.getAllQuizById(props.qid).then((response) => {
      setallQuizs(response.data.allQuiz);
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const addQuiz = (e) => {
    e.preventDefault();
    if (!allQuizs.quizs) allQuizs.quizs = [];
    allQuizs.quizs.push({ title_q: title_q, chooses: [], trueChoose: -1 , type : type});
    AllQuizService.updateAllQuiz(allQuizs);
    props.update();
    props.nextStep();
  };



  const selectFile = (e) => {
    FilesService.uploadFile(e.target.files[0]).then((response) => {
      setpath(response.data.path)
    });
  };

  const addChoose = (e) => {
    e.preventDefault();
    if (!allQuizs.quizs[props.currentStep - 1].chooses) allQuizs.quizs[props.currentStep - 1].chooses = [];
    allQuizs.quizs[props.currentStep - 1].chooses.push({ title_q: title_q, image_q: path });
    AllQuizService.updateAllQuiz(allQuizs);
    
    AllQuizService.getAllQuizById(props.qid).then((response) => {
      setallQuizs(response.data.allQuiz);
    });
    props.update();
 
  };

  const clickHandler = () => {
    // props.update(props.currentStep, index); 
    props.nextStep();
  };


  const add_url = (url) => {
    return config.SERVER_URL+"/api/files/file/" + url;
  };

  const myNextStep = () =>{
    props.nextStep();
  }

  const myPreviousStep = () =>{
props.previousStep();
  }
  return (
    <div>
      
 

      <div class=" row wrapper border-bottom white-bg page-heading">
        <div class="col">
          <h2>{quiz.title_q}</h2>
        </div>
        <div class="col">
        <div class="text-center pdf-toolbar">
        <div className="btn-group">
          {props.currentStep > 1 && (
            <button id="prev" className="btn btn-white" onClick={myPreviousStep}>
            <i className="fa fa-long-arrow-left" /> <span className="d-none d-sm-inline">Previous</span>
          </button>
          )}
          {(props.currentStep < props.totalSteps)&& (<button id="next" className="btn btn-white" onClick={myNextStep}>
            <i className="fa fa-long-arrow-right" /> <span className="d-none d-sm-inline">Next</span>
          </button>)}
          
        </div>
        </div>
      </div>
      </div>

      <div className="wrapper wrapper-content animated fadeInRight "

      >
        <div className="row">
          {chooses.map((choose) => (
            <div className="col-md-4" onClick={() => clickHandler()}

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




      {allQuizs.quizs && (
        <div className="col-lg-9">
          <div className="ibox ">
            <div className="ibox-title">
              <h5>Ajouter un choix</h5>
            </div>
            <div className="ibox-content">
              <form onSubmit={addChoose}>
                <div className="form-group row">
                  <label className="col-lg-2 col-form-label">Titre</label>
                  <div className="col-lg-10">
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => {
                        settitle_q(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="customFile"
                      onChange={selectFile}
                    />
                    <label className="custom-file-label" htmlFor="customFile">
                      Image
                      </label>
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-lg-offset-2 col-lg-10">
                    <button className="btn btn-sm btn-white" type="submit">
                      Ajouter
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}



      {allQuizs.quizs && (
        <div className="col-lg-9">
          <div className="ibox ">
            <div className="ibox-title">
              <h5>Ajouter nouvelle question</h5>
            </div>
            <div className="ibox-content">
              <form onSubmit={addQuiz}>
                   {/* sdadada */}
                   <div className="form-group row">
                  <label className="col-lg-2 col-form-label">type</label>
                  <div className="col-lg-10">
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => {
                        settype(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-lg-2 col-form-label">Titre</label>
                  <div className="col-lg-10">
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => {
                        settitle_q(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-lg-offset-2 col-lg-10">
                    <button className="btn btn-sm btn-white" type="submit">
                      Ajouter
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
