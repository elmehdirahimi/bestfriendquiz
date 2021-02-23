import React, { useCallback, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AllQuizService from "../services/AllQuizService";
import config from "../config";
// import quiz from "../data";

function Accueil() {
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
    () => (history.push("/quiz/" + id), [history])
  );

  const add_url = (url) => {
    return config.SERVER_URL+"/api/files/file/" + url;
  };

  // const { data } = quiz;
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

export default Accueil;
