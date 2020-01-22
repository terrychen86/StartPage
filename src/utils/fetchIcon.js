// @flow

import amazon from 'icons/amazon_1220386.png';
import apple from 'icons/apple_1220384.png';
import behance from 'icons/behance_1220383.png';
import bing from 'icons/bing_1220382.png';
import deviantart from 'icons/deviantart_1220378.png';
import dribbble from 'icons/dribbble_1220377.png';
import ebay from 'icons/ebay_1220368.png';
import evernote from 'icons/evernote_1220374.png';
import fb from 'icons/fb_1220372.png';
import flickr from 'icons/flickr_1220370.png';
import gdrive from 'icons/gdrive_1220371.png';
import github from 'icons/github_1220369.png';
import gmail from 'icons/gmail_1220367.png';
import google from 'icons/google_1220387.png';
import instagram from 'icons/instagram_1220359.png';
import linkedin from 'icons/linkedin_1220358.png';
import paypal from 'icons/paypal_1220357.png';
import pinterest from 'icons/pinterest_1220355.png';
import reddit from 'icons/reddit_1220354.png';
import skype from 'icons/skype_1220350.png';
import soundcloud from 'icons/soundcloud_1220348.png';
import stackoverflow from 'icons/stackoverflow_1220346.png';
import tumbler from 'icons/tumbler_1220344.png';
import twitter from 'icons/twitter_1220342.png';
import vimeo from 'icons/vimeo_1220343.png';
import yahoo from 'icons/yahoo_1220362.png';
import yelp from 'icons/yelp_1220361.png';
import youtube from 'icons/youtube_1220360.png';

import defaultIcon from 'icons/default_3761814.png';

const ICONS = {
  amazon,
  apple,
  behance,
  bing,
  defaultIcon,
  deviantart,
  dribbble,
  ebay,
  evernote,
  fb,
  flickr,
  gdrive,
  github,
  gmail,
  google,
  instagram,
  linkedin,
  paypal,
  pinterest,
  reddit,
  skype,
  soundcloud,
  stackoverflow,
  tumbler,
  twitter,
  vimeo,
  yahoo,
  yelp,
  youtube,
};

const fetchIcon = (name: $Keys<typeof ICONS>): string => ICONS[name];

export default fetchIcon;
