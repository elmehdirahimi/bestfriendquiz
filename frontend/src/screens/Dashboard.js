import React, { useCallback, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AllQuizService from "../services/AllQuizService";
import FilesService from "../services/FilesService";
import config from "../config";

function Dashboard() {
  const [path, setpath] = useState("");
  const [titre, settitre] = useState("");
  const [id, setId] = useState("");
  const [allQuiz, setallQuiz] = useState([]);

  const fetchData = useCallback(() => {
    AllQuizService.getAllQuizs().then((response) => {
      setallQuiz(response.data.allQuizs);
      console.log(response.data.allQuizs);
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const history = useHistory();
  const submitHandler = useCallback(
    () => (history.push("/adminquiz/" + id), [history])
  );

  const add_url = (url) => {
    return config.SERVER_URL+"/api/files/file/" + url;

    // return "url(" + url + ")";
  };

  const selectFile = (e) => {
    FilesService.uploadFile(e.target.files[0]).then((response) => {
      setpath(response.data.path);
    });
  };

  const addAllQuiz = (e) => {
    e.preventDefault();
    AllQuizService.createAllQuiz({
      title: titre,
      image: path,
      quizs: [],
      type: "main",
    });
    
    AllQuizService.getAllQuizs().then((response) => {
      setallQuiz(response.data.allQuizs);
    });
  };
  return (
    <div className="wrapper wrapper-content animated fadeInUp ">
      <div className="col-lg-12 animated fadeInRight">
        <div className="row">
          {allQuiz.map((dt) => (
            <div className="col-lg-4 mb-4" key={dt.id}>
              <div
                className="p-0 m-0 panel panel-primary"
                type="button"
                data-toggle="modal"
                data-target="#myModal2"
                onClick={() => setId(dt.id)}
              >
                <div className="panel-heading text-center">{dt.title}</div>
                <div className="image">
                  <img
                    alt="image"
                    className="img-fluid"
                    style={{ height: "500px" }}
                    src={add_url(dt.image)}
                  />
                </div>
              </div>
            </div>
          ))}
          {allQuiz && allQuiz.length > 0 && (
            <div className="col-lg-4 mb-4">
              <div className=" panel panel-primary">
                <div className="panel-heading text-center">Ajouter</div>
                <div className="image m-4">
                  <form onSubmit={addAllQuiz}>
                    <div className="form-group row">
                      <label className="col-lg-2 col-form-label">Titre</label>
                      <div className="col-lg-10">
                        <input
                          type="text"
                          className="form-control"
                          onChange={(e) => {
                            settitre(e.target.value);
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
                        {path && (
                          <button className="btn btn-sm btn-white" type="submit">
                            Ajouter
                          </button>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          )}
        </div>
      </div>

      <div
        className="modal inmodal"
        id="myModal2"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
        style={{ display: "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content animated flipInY">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                <span aria-hidden="true">×</span>
                <span className="sr-only">Close</span>
              </button>
              <h4 className="font-bold">
                Who Is Your True Friend? Let’s Find Out!.
              </h4>
            </div>
            <form role="form" onSubmit={submitHandler}>
              <div className="modal-body">
                <div className="form-group">
                  <label>Name</label>{" "}
                  <input
                    type="text"
                    placeholder="Enter yor name"
                    className="form-control"
                    required
                    aria-required="true"
                  />
                </div>

                <div></div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-white"
                  data-dismiss="modal"
                >
                  Close
                </button>
                {/* <Link  to="/quiz" >sddssdsd */}
                <button
                  className="btn btn-sm btn-primary m-t-n-xs"
                  data-dismiss="modal"
                  type="submit"
                  onClick={submitHandler}
                >
                  <strong>Submit</strong>
                </button>
                {/* </Link> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
