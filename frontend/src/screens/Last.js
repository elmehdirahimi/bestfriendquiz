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
    <div className="middle_conatainer_yellow">
      <div className="middle_conatainer">
        <div className="link_div">
          <h2>Your Quiz is Ready! </h2>
          <h4>Share your quiz-link with your friends!</h4>
          <h4>
            They will try to guess your answers &amp; get a score out of 10.
          </h4>
          <div className="copy_link">
            <div className="copy_link_area">
              <div className="copy_text">
                <div className="link"  id="copytext">
                {config.SERVER_URL}/test/{props.newId}
                </div>
                <button onclick="copy_share_url();" className="copy_btn"  data-clipboard-target="#copytext">
                  Copy Link
                </button>
              </div>
              <div className="link-copied copy defaultHide">Link Copied</div>
            </div>
          </div>
        </div>
      </div>
      <div className="share-btn">
        <a
          href="whatsapp://send?text=🤩 *_wew’s_*%0A👭 *_Best_*%0A👬 *_Friend_*%0A🏷 *_Tag_*%0A😍 Accept now! 😍%0A⏬⏬⏬⏬⏬%0Ahttps://bakequiz.com/b/match/37rLt"
          data-toggle="tooltip"
          data-placement="top"
          title
          data-original-title="Whatsapp"
        >
          <div
            onclick="socialButton(this,'whatsapp')"
            className="btn whatsapp-btn share_btn_whatsapp"
          >
            <img src="https://bakequiz.com/public/images/baketheme1/wats.png" />{" "}
            Set Status{" "}
          </div>
        </a>
        <div className="share-btn-area">
          <a
            href="javascript:void(0)"
            onclick="fb_share('https://bakequiz.com/b/match/37rLt?utm_site_source=share&utm_site_medium=facebook&utm_site_campaign=facebook-shares')"
            data-toggle="tooltip"
            data-placement="top"
            title
            data-original-title="Facebook"
          >
            <div
              onclick="socialButton(this,'fb_share')"
              className="btn facebook-btn"
            >
              {" "}
              <img
                src="https://bakequiz.com/public/images/baketheme1/facebook.png"
                alt
              />
              Share{" "}
            </div>
          </a>
          <a
            href="fb-messenger://share?link=https://bakequiz.com/b/match/37rLt?utm_site_source=share-facebook-messenger"
            data-toggle="tooltip"
            data-placement="top"
            title
            data-original-title="messanger"
          >
            <div
              onclick="socialButton(this,'messenger_share')"
              className="btn messenger-btn"
            >
              <img
                src="https://bakequiz.com/public/images/baketheme1/messanger.png"
                alt
              />{" "}
              Share
            </div>
          </a>
        </div>
        <div className="share-btn-area">
          <a
            onclick="socialButton(this,'snap_share')"
            href="#"
            className="btn snapchat-btn snapchat-share-button btn-lg btn-block onl_btn-bell stroke snapchat-share-button"
            data-share-url="https://bakequiz.com/b/match/37rLt?utm_site_source=share&utm_site_medium=snapchat&utm_site_campaign=snapchat-shares"
          >
            <img src="https://bakequiz.com/public/images/baketheme1/snapchat.png" />{" "}
            <span className="share_text_page_que_share">Share</span>
          </a>
          <a
            onclick="socialButton(this,'twitter_share')"
            className="btn twitter-btn"
            target="_blank"
            href="http://twitter.com/share?text=%F0%9F%A4%A9+wew%E2%80%99s+%F0%9F%91%AD+Best+%F0%9F%91%AC+Friend+%F0%9F%8F%B7+Tag+%F0%9F%98%8D+Accept+now%21+%F0%9F%98%8D+%E2%8F%AC%E2%8F%AC%E2%8F%AC%E2%8F%AC%E2%8F%AC&url=https%3A%2F%2Fbakequiz.com%2Fb%2Fmatch%2F37rLt%3Futm_site_source%3Dshare%26utm_site_medium%3Dtwitter%26utm_site_campaign%3Dtwitter-shares"
            data-toggle="tooltip"
            data-placement="top"
            title
            data-original-title="Twitter"
          >
            <img
              src="https://bakequiz.com/public/images/baketheme1/twitter.png"
              alt
            />{" "}
            Share
          </a>
        </div>
        <div className="share-btn-area">
          <a
            onclick="socialButton(this,'insta_share')"
            data-target="#myModalInsta"
            className="btn instagram-btn"
            data-toggle="modal"
            data-placement="top"
            title
            data-original-title="Instagram"
          >
            <img src="https://bakequiz.com/public/images/baketheme1/insta.png" />{" "}
            Add to Bio
          </a>
          <a
            onclick="socialButton(this,'line_share')"
            className="btn Line-btn"
            href="line://msg/text/?%F0%9F%A4%A9%20wew%E2%80%99s%20%F0%9F%91%AD%20Best%20%F0%9F%91%AC%20Friend%20%F0%9F%8F%B7%20Tag%20%F0%9F%98%8D%20Accept%20now%21%20%F0%9F%98%8D%20%E2%8F%AC%E2%8F%AC%E2%8F%AC%E2%8F%AC%E2%8F%AChttps%3A%2F%2Fbakequiz.com%2Fb%2Fmatch%2F37rLt%3Futm_site_source%3Dshare-lineit"
          >
            <img src="https://bakequiz.com/public/images/baketheme1/line.png" />{" "}
            Share
          </a>
        </div>
        <div className="share-btn-area">
          <a
            onclick="socialButton(this,'kakao_share')"
            href="#"
            className="btn kakao-btn"
            data-toggle="tooltip"
            data-placement="top"
            title
            data-original-title="Kakao"
            id="kakao-link-btn"
            data-url="https://bakequiz.com/b/match/37rLt?utm_site_source=share-kakao"
          >
            <img
              src="https://bakequiz.com/public/images/baketheme1/kakao.png"
              alt
              className="center"
            />{" "}
            Share
          </a>
          <a
            onclick="socialButton(this,'vk_share')"
            href="http://vk.com/share.php?url=https://bakequiz.com/b/match/37rLt?utm_site_source=share-vk&title=wew%E2%80%99s+Best+Friend+Tag%21+Accept+my+challenge+now.&description=Accept+my+Best+Friend+Tag+Challenge+and+answer+my+questions+honestly.&image=https://img.bakequiz.com/public/site_content/quiz/ck_editor/images/Meta/English/Bake_New_Meta.jpeg"
            className="btn vk-btn"
            data-toggle="tooltip"
            data-placement="top"
            title
            data-original-title="VK"
          >
            <img
              src="https://bakequiz.com/public/images/share-btn-vk.png"
              alt
              className="center"
            />{" "}
            Share
          </a>
        </div>
      </div>{" "}


      <div className="all_ads bottom_ad custom_ad">
        <div className="container-fluid">
          <div className="row">
            <a href="https://holaquiz.com/bff-club/play/571" target="_blank">
              <img
                src="https://img.bakequiz.com/public/site_content/quiz/ck_editor/images/Ads/New_Ads/bff_english_cad.jpg"
                alt="Ad"
                className="img-responsive ad_center"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                <span className="glyphicon glyphicon-remove-circle" />
              </button>
              <h4 className="modal-title">How to share on Snapchat?</h4>
            </div>
            {/* Modal body */}
            <div className="modal-body instagram_share_popup">
              <p className="step_text">
                Step 1: Add a snap and mention to swipe up!
              </p>
              <br />
              <img
                className="snapchat_ss"
                src="https://img.bakequiz.com/public/site_content/quiz/ck_editor/images/meta/Bakequiz2/Socialmedia/New_Socialmedia/english_snapchat_Step_1.jpg"
                style={{ border: "solid", borderWidth: 2 }}
              />
              <div style={{ marginTop: 20 }} />
              <span className="step_text" id="snap_step_2">
                Step 2: Tap the paper clip
              </span>
              <br />
              <img
                className="snapchat_ss"
                src="https://img.bakequiz.com/public/site_content/quiz/ck_editor/images/meta/Bakequiz2/Socialmedia/New_Socialmedia/english_snapchat_Step_2.jpg"
                style={{ border: "solid", borderWidth: 2 }}
              />
              <div style={{ marginTop: 20 }} />
              <span className="step_text" id="snap_step_3">
                Step 3: Paste your quiz link
              </span>
              <br />
              <img
                className="snapchat_ss"
                src="https://img.theshookers.com/public/site_content/quiz/ck_editor/images/meta/Anonymous_Confession/Socialmedia/snapchat_Step_3.jpg"
                style={{ border: "solid", borderWidth: 2 }}
              />
              <div style={{ marginTop: 20 }} />
              <span className="step_text" id="snap_step_4">
                Step 4: Add to your story
              </span>
              <br />
              <img
                className="snapchat_ss"
                src="https://img.theshookers.com/public/site_content/quiz/ck_editor/images/meta/Anonymous_Confession/Socialmedia/snapchat_Step_4.jpg"
                style={{ border: "solid", borderWidth: 2 }}
              />
              <div style={{ marginTop: 20 }} />
              <span className="step_text" id="snap_thatsit">
                That's it!
              </span>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
   </div>
  );

  return (
    <div className="col p-4 ">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h1 className="font-bold text-center ">Your Quiz is Ready!</h1>
          <br />

          <small className="font-bold text-center ">
            Share your quiz-link with your friends!
          </small>
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
            <button
              class="col-sm-1 btn btn-primary"
              data-clipboard-target="#copytext"
            >
              <i class="fa fa-copy"></i> Copy
            </button>
          </div>

          <FacebookShareButton url={config.SERVER_URL + "/test/" + props.newId}>
            <FacebookIcon className="p-2" size={90} round={true} />
          </FacebookShareButton>

          <EmailShareButton url={config.SERVER_URL + "/test/" + props.newId}>
            <EmailIcon className="p-2" size={90} round={true} />
          </EmailShareButton>

          <InstapaperShareButton
            url={config.SERVER_URL + "/test/" + props.newId}
          >
            <InstapaperIcon className="p-2" size={90} round={true} />
          </InstapaperShareButton>

          <LineShareButton url={config.SERVER_URL + "/test/" + props.newId}>
            <LineIcon className="p-2" size={90} round={true} />
          </LineShareButton>

          <LinkedinShareButton url={config.SERVER_URL + "/test/" + props.newId}>
            <LinkedinIcon className="p-2" size={90} round={true} />
          </LinkedinShareButton>

          <LivejournalShareButton
            url={config.SERVER_URL + "/test/" + props.newId}
          >
            <LivejournalIcon className="p-2" size={90} round={true} />
          </LivejournalShareButton>

          <MailruShareButton url={config.SERVER_URL + "/test/" + props.newId}>
            <MailruIcon className="p-2" size={90} round={true} />
          </MailruShareButton>

          <OKShareButton url={config.SERVER_URL + "/test/" + props.newId}>
            <OKIcon className="p-2" size={90} round={true} />
          </OKShareButton>
          <PinterestShareButton
            url={config.SERVER_URL + "/test/" + props.newId}
          >
            <PinterestIcon className="p-2" size={90} round={true} />
          </PinterestShareButton>

          <PocketShareButton url={config.SERVER_URL + "/test/" + props.newId}>
            <PocketIcon className="p-2" size={90} round={true} />
          </PocketShareButton>

          <RedditShareButton url={config.SERVER_URL + "/test/" + props.newId}>
            <RedditIcon className="p-2" size={90} round={true} />
          </RedditShareButton>

          <TelegramShareButton url={config.SERVER_URL + "/test/" + props.newId}>
            <TelegramIcon className="p-2" size={90} round={true} />
          </TelegramShareButton>

          <TumblrShareButton url={config.SERVER_URL + "/test/" + props.newId}>
            <TwitterIcon className="p-2" size={90} round={true} />
          </TumblrShareButton>

          <TwitterShareButton url={config.SERVER_URL + "/test/" + props.newId}>
            <TwitterIcon className="p-2" size={90} round={true} />
          </TwitterShareButton>

          <ViberShareButton url={config.SERVER_URL + "/test/" + props.newId}>
            <ViberIcon className="p-2" size={90} round={true} />
          </ViberShareButton>

          <VKShareButton url={config.SERVER_URL + "/test/" + props.newId}>
            <VKIcon className="p-2" size={90} round={true} />
          </VKShareButton>

          <WhatsappShareButton url={config.SERVER_URL + "/test/" + props.newId}>
            <WhatsappIcon className="p-2" size={90} round={true} />
          </WhatsappShareButton>

          <WorkplaceShareButton
            url={config.SERVER_URL + "/test/" + props.newId}
          >
            <WorkplaceIcon className="p-2" size={90} round={true} />
          </WorkplaceShareButton>
        </div>
      </div>
    </div>
  );
}
