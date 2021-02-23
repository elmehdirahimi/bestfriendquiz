import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from "react-share";

export default function ScoreQuiz(props) {
  return (
    <div className="text-center pdf-toolbar">
      <div className="col">
        <div className="widget-head-color-box yellow-bg p-lg text-center">
          <div className="m-b-md">
            <h1 className="font-bold text-center">
              Your Quiz is Ready!
            </h1>

            <h3 className="font-bold text-center ">Share your quiz-link with your friends!</h3>
            <small className="font-bold text-center ">
              They will try to guess your answers & get a score out of 10.
            </small>

          </div>
          <div className="panel-body p-4 text-center">
            <div className="row mb-4">
              <h3 class="col text-navy  font-bold p-2" id="copytext">
                http://localhost:3000/test/{props.newId}
              </h3>
              
              <button class="col btn btn-dark" data-clipboard-target="#copytext">
                <i class="fa fa-copy"></i> Copy
            </button>
            </div>

            <FacebookShareButton
              url={"http://localhost:3000/test/" + props.newId}
            // quote={"CampersTribe - World is yours to explore"}
            // hashtag="#quiz"
            >
              <FacebookIcon className="p-2" size={90} round={true} />
            </FacebookShareButton>

            <EmailShareButton url={"http://localhost:3000/test/" + props.newId}>
              <EmailIcon className="p-2" size={90} round={true} />
            </EmailShareButton>


            <InstapaperShareButton
              url={"http://localhost:3000/test/" + props.newId}
            >
              <InstapaperIcon className="p-2" size={90} round={true} />
            </InstapaperShareButton>

            <LineShareButton url={"http://localhost:3000/test/" + props.newId}>
              <LineIcon className="p-2" size={90} round={true} />
            </LineShareButton>

            <LinkedinShareButton
              url={"http://localhost:3000/test/" + props.newId}
            >
              <LinkedinIcon className="p-2" size={90} round={true} />
            </LinkedinShareButton>

            <LivejournalShareButton
              url={"http://localhost:3000/test/" + props.newId}
            >
              <LivejournalIcon className="p-2" size={90} round={true} />
            </LivejournalShareButton>

            <MailruShareButton url={"http://localhost:3000/test/" + props.newId}>
              <MailruIcon className="p-2" size={90} round={true} />
            </MailruShareButton>

            <OKShareButton url={"http://localhost:3000/test/" + props.newId}>
              <OKIcon className="p-2" size={90} round={true} />
            </OKShareButton>
            <PinterestShareButton
              url={"http://localhost:3000/test/" + props.newId}
            >
              <PinterestIcon className="p-2" size={90} round={true} />
            </PinterestShareButton>

            <PocketShareButton url={"http://localhost:3000/test/" + props.newId}>
              <PocketIcon className="p-2" size={90} round={true} />
            </PocketShareButton>

            <RedditShareButton url={"http://localhost:3000/test/" + props.newId}>
              <RedditIcon className="p-2" size={90} round={true} />
            </RedditShareButton>

            <TelegramShareButton
              url={"http://localhost:3000/test/" + props.newId}
            >
              <TelegramIcon className="p-2" size={90} round={true} />
            </TelegramShareButton>

            <TumblrShareButton url={"http://localhost:3000/test/" + props.newId}>
              <TwitterIcon className="p-2" size={90} round={true} />
            </TumblrShareButton>

            <TwitterShareButton url={"http://localhost:3000/test/" + props.newId}>
              <TwitterIcon className="p-2" size={90} round={true} />
            </TwitterShareButton>

            <ViberShareButton url={"http://localhost:3000/test/" + props.newId}>
              <ViberIcon className="p-2" size={90} round={true} />
            </ViberShareButton>

            <VKShareButton url={"http://localhost:3000/test/" + props.newId}>
              <VKIcon className="p-2" size={90} round={true} />
            </VKShareButton>

            <WhatsappShareButton
              url={"http://localhost:3000/test/" + props.newId}
            >
              <WhatsappIcon className="p-2" size={90} round={true} />
            </WhatsappShareButton>

            <WorkplaceShareButton
              url={"http://localhost:3000/test/" + props.newId}
            >
              <WorkplaceIcon className="p-2" size={90} round={true} />
            </WorkplaceShareButton>
          </div>
        </div>
      </div>

    </div>

  );
}


