import React from "react";
import config from "../config";

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

export default function Last(props) {
  return (
    <div className="col p-4 ">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h1 className="font-bold text-center ">
            Your Quiz is Ready!
            </h1>
          <br />

          <small className="font-bold text-center ">Share your quiz-link with your friends!</small>
          <br />
          <small className="font-bold text-center ">
            They will try to guess your answers & get a score out of 10.
            </small>

        </div>
        <div className="panel-body p-4">
          <div className="row">
            <p class="col-sm-4 text-navy  font-bold p-2" id="copytext">
              {config.SERVER_URL}/test/{props.newId}
            </p>
            <button class="col-sm-1 btn btn-primary" data-clipboard-target="#copytext">
              <i class="fa fa-copy"></i> Copy
            </button>
          </div>

          <FacebookShareButton
            url={config.SERVER_URL+"/test/" + props.newId}
          >
            <FacebookIcon className="p-2" size={90} round={true} />
          </FacebookShareButton>

          <EmailShareButton url={config.SERVER_URL+"/test/" + props.newId}>
            <EmailIcon className="p-2" size={90} round={true} />
          </EmailShareButton>

         
          <InstapaperShareButton
            url={config.SERVER_URL+"/test/" + props.newId}
          >
            <InstapaperIcon className="p-2" size={90} round={true} />
          </InstapaperShareButton>

          <LineShareButton url={config.SERVER_URL+"/test/" + props.newId}>
            <LineIcon className="p-2" size={90} round={true} />
          </LineShareButton>

          <LinkedinShareButton
            url={config.SERVER_URL+"/test/" + props.newId}
          >
            <LinkedinIcon className="p-2" size={90} round={true} />
          </LinkedinShareButton>

          <LivejournalShareButton
            url={config.SERVER_URL+"/test/" + props.newId}
          >
            <LivejournalIcon className="p-2" size={90} round={true} />
          </LivejournalShareButton>

          <MailruShareButton url={config.SERVER_URL+"/test/" + props.newId}>
            <MailruIcon className="p-2" size={90} round={true} />
          </MailruShareButton>

          <OKShareButton url={config.SERVER_URL+"/test/" + props.newId}>
            <OKIcon className="p-2" size={90} round={true} />
          </OKShareButton>
          <PinterestShareButton
            url={config.SERVER_URL+"/test/" + props.newId}
          >
            <PinterestIcon className="p-2" size={90} round={true} />
          </PinterestShareButton>

          <PocketShareButton url={config.SERVER_URL+"/test/" + props.newId}>
            <PocketIcon className="p-2" size={90} round={true} />
          </PocketShareButton>

          <RedditShareButton url={config.SERVER_URL+"/test/" + props.newId}>
            <RedditIcon className="p-2" size={90} round={true} />
          </RedditShareButton>

          <TelegramShareButton
            url={config.SERVER_URL+"/test/" + props.newId}
          >
            <TelegramIcon className="p-2" size={90} round={true} />
          </TelegramShareButton>

          <TumblrShareButton url={config.SERVER_URL+"/test/" + props.newId}>
            <TwitterIcon className="p-2" size={90} round={true} />
          </TumblrShareButton>

          <TwitterShareButton url={config.SERVER_URL+"/test/" + props.newId}>
            <TwitterIcon className="p-2" size={90} round={true} />
          </TwitterShareButton>

          <ViberShareButton url={config.SERVER_URL+"/test/" + props.newId}>
            <ViberIcon className="p-2" size={90} round={true} />
          </ViberShareButton>

          <VKShareButton url={config.SERVER_URL+"/test/" + props.newId}>
            <VKIcon className="p-2" size={90} round={true} />
          </VKShareButton>

          <WhatsappShareButton
            url={config.SERVER_URL+"/test/" + props.newId}
          >
            <WhatsappIcon className="p-2" size={90} round={true} />
          </WhatsappShareButton>

          <WorkplaceShareButton
            url={config.SERVER_URL+"/test/" + props.newId}
          >
            <WorkplaceIcon className="p-2" size={90} round={true} />
          </WorkplaceShareButton>
        </div>
      </div>
    </div>
  );
}
