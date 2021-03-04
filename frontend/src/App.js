import React from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import Footer from "./components/Footer";
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
    <div>
      <div className="container custom_container">
        <NavBar></NavBar>
        <div
          ng-controller="UserThemeController"
          ng-init="init('aqua')"
          className="theme ng-scope"
        >
          <span ng-click="toggletheme('1','aqua')" />
          <span ng-click="toggletheme('3','purple')" />
        </div>

        <BrowserRouter>
          <Route path="/test" exact={true} component={Test} />
          <Route path="/quiz/:id" component={Quiz} />
          <Route path="/test/:id" component={TestQuiz} />
          {user && (
            <Route path="/languages" exact={true} component={Languages} />
          )}

          {user && <Route path="/adminquiz/:id" component={AdminQuiz} />}

          {user && (
            <Route path="/dashboard" exact={true} component={Dashboard} />
          )}

          <Route path="/" exact={true} component={Accueil} />
          <Route path="/login" exact={true} component={Authentification} />
        </BrowserRouter>

        <div className="all_ads bottom_ad bottom_dfp_ad">
          <div className="container-fluid">
            <div className="row">
              <div
                id="div-gpt-ad-1592979668369-0"
                style={{ display: "inline-block", textAlign: "center" }}
              >
                <div
                  id="google_ads_iframe_/21759293390/Bakequiz_468x60_btf_0__container__"
                  style={{ border: "0pt none", width: 468, height: 60 }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="all_ads bottom_ad custom_ad">
          <div className="container-fluid">
            <div className="row">
              <a
                href="https://holaquiz.com/how-strong-is-your-friendship/play/11?utm_source=Custom&utm_medium=Ad&utm_campaign=user"
                target="_blank"
              >
                <img
                  src="%PUBLIC_URL%/Who is your true friend_ Create your BakeQuiz to find out!_files/HTwo_English.jpg.jpeg"
                  alt="Ad"
                  className="img-responsive ad_center"
                />
              </a>
            </div>
          </div>
        </div>

        <Footer></Footer>
        <div className="static_ads">
          <div
            id="div-gpt-ad-1592304442869-0"
            style={{ width: 320, height: 50 }}
          >
            <div
              id="google_ads_iframe_/21759293390/bakequiz_320x50_footer_0__container__"
              style={{ border: "0pt none", width: 320, height: 50 }}
            />
          </div>
        </div>
      </div>
    </div>
  );

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
                  {user && (
                    <Route
                      path="/languages"
                      exact={true}
                      component={Languages}
                    />
                  )}

                  {user && (
                    <Route path="/adminquiz/:id" component={AdminQuiz} />
                  )}

                  {user && (
                    <Route
                      path="/dashboard"
                      exact={true}
                      component={Dashboard}
                    />
                  )}

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
