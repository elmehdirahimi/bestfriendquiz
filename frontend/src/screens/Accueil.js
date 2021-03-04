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
    <div className="main_sec">
          
          {allQuiz.map((dt) => (
            <div key={dt.id} className="main_area">
            <div className="main_box">
              <h2>🤩Best Friend Tag Challenge🤩</h2>
              <img src={add_url(dt.image)} />
              <a
                onclick="return gtmEventTracking('select_cat',64);"
                className="btn btn-danger home-btn nowrap"
                href={"/quiz/" + dt.id}
              >
                Start!
              </a>
            </div>
            </div>
          ))}
        
        </div>
  );
}

export default Accueil;
