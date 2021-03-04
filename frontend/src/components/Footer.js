import React from 'react'
import face from "../img/face.png";
import insta from "../img/insta.png";
import twit from "../img/twit.png";

export default function Footer() {
    return (
       
        <div className="footer theme-color">
          <div className="footer_button_img">
            <ul>
              <li>
                <a href="https://www.facebook.com/Bakequizz/" target="_blank">
                  <img src={face} />
                </a>
              </li>
              <li className="footer_button_cover">
                <a href="https://www.instagram.com/bakequiz" target="_blank">
                  <img src={insta} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/BakeQuiz" target="_blank">
                  <img src={twit} />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer_menu">
            <ul>
              <li>
                <a href="https://localhost/backequiz/about-us">About Us </a>
              </li>
              <li>
                <a href="https://localhost/backequiz/privacy-policy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://localhost/backequiz/terms-of-use">
                  Terms Of Use
                </a>
              </li>
              <li>
                <a href="https://localhost/backequiz/faq">FAQs </a>
              </li>
            </ul>
            <p>
              <b>Disclaimer:</b> All content is provided for fun and
              entertainment purposes only
            </p>
            <p>© 2021 Bake Quiz All rights Reserved</p>
          </div>
        </div>
   
    )
}
