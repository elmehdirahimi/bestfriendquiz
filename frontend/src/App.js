import React from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import ScoreQuiz from "./components/ScoreQuiz";
import Accueil from "./screens/Accueil";
import AdminQuiz from "./screens/AdminQuiz";
import Dashboard from "./screens/Dashboard";
import Languages from "./screens/Languages";
import Last from "./screens/Last";
import Quiz from "./screens/Quiz";
import TestQuiz from "./screens/TestQuiz";
import Test from "./screens/test";
import Authentification from "./screens/Authentification";
import authService from "./services/auth.service";

function App() {

  const user = authService.getCurrentUser();


  return (
    <body id="page-top" className="landing-page no-skin-config">
      <div id="wrapper">
        <div
          id="page-wrapper"
          className="gray-bg dashbard-1"
          style={{ width: "100%" }}
        >
         <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
            <NavBar></NavBar>
            <div style={{ paddingTop: "80px" }}>
              <BrowserRouter>
                

                <Route path="/test" exact={true} component={Test} />
                <Route path="/quiz/:id" component={Quiz} />
                <Route path="/test/:id" component={TestQuiz} />
                {user &&(<Route path="/languages" exact={true} component={Languages} />)}
                
                {user &&(<Route path="/adminquiz/:id" component={AdminQuiz} />)}
                
                {user &&(<Route path="/dashboard" exact={true} component={Dashboard} />)}
                

                <Route path="/" exact={true} component={Accueil} />
                <Route
                  path="/login"
                  exact={true}
                  component={Authentification}
                />
              </BrowserRouter>
            </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
