import React, { useCallback, useEffect, useState } from "react";
import StepWizard from "react-step-wizard";
import Choose from "../components/Choose";
import AllQuizService from "../services/AllQuizService";
import QuizsServices from "../services/QuizsServices";
import Last from "./Last";
import FilesService from "../services/FilesService";
import AdminChoose from "../components/AdminChoose";

function AdminQuiz(props) {
  const [title_q, settitle_q] = useState("");
  const [path, setpath] = useState("");
  const [allQuizs, setallQuizs] = useState({});

  const fetchData = useCallback(() => {
    AllQuizService.getAllQuizById(props.match.params.id).then((response) => {
      setallQuizs(response.data.allQuiz);
    });
  }, []);


  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const sendQuiz = () => {
    // newQuizs.type = "test";
    // AllQuizService.createAllQuiz(quizs).then((response) => {
    // setnewID(response.data.savedAllQuiz);
    // alert("DSsd");
    // });;
    // console.log(newId);
  };

  const addQuiz = (e) => {
    e.preventDefault();
    if (!allQuizs.quizs) allQuizs.quizs = [];
    allQuizs.quizs.push({ title_q: title_q, chooses: [], trueChoose: -1 });

    AllQuizService.updateAllQuiz(allQuizs);
    
    AllQuizService.getAllQuizById(props.match.params.id).then((response) => {
      setallQuizs(response.data.allQuiz);
    });
  };



  const selectFile = (e) => {
    FilesService.uploadFile(e.target.files[0]).then((response) => {
      setpath(response.data.path)
    });
  };

  const addChoose = (e) => {
    e.preventDefault();
    if (!allQuizs.quizs[0].chooses) allQuizs.quizs[0].chooses = [];
    allQuizs.quizs[0].chooses.push({ title_q: title_q, image_q: path});
    AllQuizService.updateAllQuiz(allQuizs);
    AllQuizService.getAllQuizById(props.match.params.id).then((response) => {
      setallQuizs(response.data.allQuiz);
    });
  };
  const updateq = () => {
    AllQuizService.getAllQuizById(props.match.params.id).then((response) => {
      setallQuizs(response.data.allQuiz);
      
    });
  }

  
  return (
    <div className="col-lg-12">
      <StepWizard>
        {allQuizs.quizs &&
          allQuizs.quizs.map((quiz) => (
            <AdminChoose sendQuiz={sendQuiz} myquiz={quiz} update={updateq}  qid={allQuizs.id}/>
          ))}
      </StepWizard>
      {allQuizs.quizs && !allQuizs.quizs[0] && (
        <div className="col-lg-9">
          <div className="ibox ">
            <div className="ibox-title">
              <h5>Ajouter</h5>
            </div>
            <div className="ibox-content">
              <form onSubmit={addQuiz}>
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

      {!allQuizs.quizs && (
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
    </div>
  );
}

export default AdminQuiz;
