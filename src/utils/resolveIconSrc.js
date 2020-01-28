// @flow

import airbnb from 'icons/airbnb_4202033.png';
import amazon from 'icons/amazon_1220386.png';
import apple from 'icons/apple_1220384.png';
import baidu from 'icons/baidu_4202027.png';
import behance from 'icons/behance_1220383.png';
import bing from 'icons/bing_1220382.png';
import deviantart from 'icons/deviantart_1220378.png';
import dribbble from 'icons/dribbble_1220377.png';
import dropbox from 'icons/dropbox_4202113.png';
import ebay from 'icons/ebay_1220368.png';
import evernote from 'icons/evernote_1220374.png';
import fb from 'icons/fb_1220372.png';
import flickr from 'icons/flickr_1220370.png';
import gdrive from 'icons/gdrive_1220371.png';
import github from 'icons/github_1220369.png';
import gmail from 'icons/gmail_1220367.png';
import google from 'icons/google_1220387.png';
import groupon from 'icons/groupon_4202126.png';
import handout from 'icons/hangouts_4202095.png';
import instagram from 'icons/instagram_1220359.png';
import linkedin from 'icons/linkedin_1220358.png';
import netflix from 'icons/netflix_4202092.png';
import office from 'icons/office_4202103.png';
import pandora from 'icons/pandora_4202082.png';
import paypal from 'icons/paypal_1220357.png';
import pinterest from 'icons/pinterest_1220355.png';
import reddit from 'icons/reddit_1220354.png';
import skype from 'icons/skype_1220350.png';
import slack from 'icons/slack_4201997.png';
import soundcloud from 'icons/soundcloud_1220348.png';
import stackoverflow from 'icons/stackoverflow_1220346.png';
import tripadvisor from 'icons/tripadvisor_4202055.png';
import tumbler from 'icons/tumbler_1220344.png';
import twitch from 'icons/twitch_4202062.png';
import twitter from 'icons/twitter_1220342.png';
import uber from 'icons/uber_4202053.png';
import vimeo from 'icons/vimeo_1220343.png';
import wechat from 'icons/wechat_messenger_4202045.png';
import yahoo from 'icons/yahoo_1220362.png';
import yelp from 'icons/yelp_1220361.png';
import youtube from 'icons/youtube_1220360.png';

import defaultIcon from 'icons/default_3761814.png';

const ICONS = {
  airbnb,
  amazon,
  apple,
  baidu,
  behance,
  bing,
  defaultIcon,
  deviantart,
  dribbble,
  dropbox,
  ebay,
  evernote,
  fb,
  flickr,
  gdrive,
  github,
  gmail,
  google,
  groupon,
  handout,
  instagram,
  linkedin,
  netflix,
  office,
  pandora,
  paypal,
  pinterest,
  reddit,
  skype,
  slack,
  soundcloud,
  stackoverflow,
  tripadvisor,
  tumbler,
  twitch,
  twitter,
  uber,
  vimeo,
  wechat,
  yahoo,
  yelp,
  youtube,
};

const resolveIconSrc = (src: string): string => {
  if (src.startsWith('built-in-')) {
    const id: string = src.replace('built-in-', '');
    return ICONS[id] || defaultIcon;
  }

  return src;
};

export default resolveIconSrc;
