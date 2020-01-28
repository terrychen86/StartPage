// @flow

import { values } from 'lodash';
import type { IconItem } from 'types/IconItem';

const ALL_ICON_ITEMS = {
  airbnb: {
    id: 'default-airbnb',
    name: 'Airbnb',
    url: 'https://www.airbnb.com',
    iconSrc: 'built-in-airbnb',
  },
  amazon: {
    id: 'default-amazon',
    name: 'Amazon',
    url: 'https://www.amazon.com',
    iconSrc: 'built-in-amazon',
  },
  apple: {
    id: 'default-apple',
    name: 'Apple',
    url: 'https://www.apple.com',
    iconSrc: 'built-in-apple',
  },
  baidu: {
    id: 'default-baidu',
    name: 'Baidu',
    url: 'https://www.baidu.com',
    iconSrc: 'built-in-baidu',
  },
  behance: {
    id: 'default-behance',
    name: 'Behance',
    url: 'https://www.behance.net',
    iconSrc: 'built-in-behance',
  },
  bing: {
    id: 'default-bing',
    name: 'Bing',
    url: 'https://www.bing.com',
    iconSrc: 'built-in-bing',
  },
  deviantart: {
    id: 'default-deviantart',
    name: 'DeviantArt',
    url: 'https://www.deviantart.com',
    iconSrc: 'built-in-deviantart',
  },
  dribbble: {
    id: 'default-dribbble',
    name: 'Dribbble',
    url: 'https://www.dribbble.com',
    iconSrc: 'built-in-dribbble',
  },
  dropbox: {
    id: 'default-dropbox',
    name: 'Dropbox',
    url: 'https://www.dropbox.com',
    iconSrc: 'built-in-dropbox',
  },
  ebay: {
    id: 'default-ebay',
    name: 'Ebay',
    url: 'https://www.ebay.com',
    iconSrc: 'built-in-ebay',
  },
  evernote: {
    id: 'default-evernote',
    name: 'Evernote',
    url: 'https://www.evernote.com',
    iconSrc: 'built-in-evernote',
  },
  fb: {
    id: 'default-fb',
    name: 'Facebook',
    url: 'https://www.facebook.com',
    iconSrc: 'built-in-fb',
  },
  flickr: {
    id: 'default-flickr',
    name: 'Flickr',
    url: 'https://www.flickr.com',
    iconSrc: 'built-in-flickr',
  },
  gdrive: {
    id: 'default-gdrive',
    name: 'Google Drive',
    url: 'https://www.google.com/drive/',
    iconSrc: 'built-in-gdrive',
  },
  github: {
    id: 'default-github',
    name: 'Github',
    url: 'https://www.github.com',
    iconSrc: 'built-in-github',
  },
  gmail: {
    id: 'default-gmail',
    name: 'Gmail',
    url: 'https://www.gmail.com',
    iconSrc: 'built-in-gmail',
  },
  google: {
    id: 'default-google',
    name: 'Google',
    url: 'https://www.google.com',
    iconSrc: 'built-in-google',
  },
  groupon: {
    id: 'default-groupon',
    name: 'Groupon',
    url: 'https://www.groupon.com',
    iconSrc: 'built-in-groupon',
  },
  instagram: {
    id: 'default-instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com',
    iconSrc: 'built-in-instagram',
  },
  linkedin: {
    id: 'default-linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com',
    iconSrc: 'built-in-linkedin',
  },
  netflix: {
    id: 'default-netflix',
    name: 'Netflix',
    url: 'https://www.netflix.com',
    iconSrc: 'built-in-netflix',
  },
  office: {
    id: 'default-office',
    name: 'Office',
    url: 'https://www.office.com',
    iconSrc: 'built-in-office',
  },
  pandora: {
    id: 'default-pandora',
    name: 'Pandora',
    url: 'https://www.pandora.com',
    iconSrc: 'built-in-pandora',
  },
  paypal: {
    id: 'default-paypal',
    name: 'Paypal',
    url: 'https://www.paypal.com',
    iconSrc: 'built-in-paypal',
  },
  pinterest: {
    id: 'default-pinterest',
    name: 'Pinterest',
    url: 'https://www.pinterest.com',
    iconSrc: 'built-in-pinterest',
  },
  reddit: {
    id: 'default-reddit',
    name: 'Reddit',
    url: 'https://www.reddit.com',
    iconSrc: 'built-in-reddit',
  },
  slack: {
    id: 'default-slack',
    name: 'Slack',
    url: 'https://www.slack.com',
    iconSrc: 'built-in-slack',
  },
  soundcloud: {
    id: 'default-soundcloud',
    name: 'Sound Cloud',
    url: 'https://www.soundcloud.com',
    iconSrc: 'built-in-soundcloud',
  },
  stackoverflow: {
    id: 'default-stackoverflow',
    name: 'Stackoverflow',
    url: 'https://www.stackoverflow.com',
    iconSrc: 'built-in-stackoverflow',
  },
  tripadvisor: {
    id: 'default-tripadvisor',
    name: 'Tripadvisor',
    url: 'https://www.tripadvisor.com',
    iconSrc: 'built-in-tripadvisor',
  },
  tumbler: {
    id: 'default-tumbler',
    name: 'Tumbler',
    url: 'https://www.tumbler.com',
    iconSrc: 'built-in-tumbler',
  },
  twitch: {
    id: 'default-twitch',
    name: 'Twitch',
    url: 'https://www.twitch.com',
    iconSrc: 'built-in-twitch',
  },
  twitter: {
    id: 'default-twitter',
    name: 'Twitter',
    url: 'https://www.twitter.com',
    iconSrc: 'built-in-twitter',
  },
  uber: {
    id: 'default-uber',
    name: 'Uber',
    url: 'https://www.uber.com',
    iconSrc: 'built-in-uber',
  },
  vimeo: {
    id: 'default-vimeo',
    name: 'Vimeo',
    url: 'https://www.vimeo.com',
    iconSrc: 'built-in-vimeo',
  },
  wechat: {
    id: 'default-wechat',
    name: 'Wechat',
    url: 'https://web.wechat.com/',
    iconSrc: 'built-in-wechat',
  },
  yahoo: {
    id: 'default-yahoo',
    name: 'Yahoo',
    url: 'https://www.yahoo.com/',
    iconSrc: 'built-in-yahoo',
  },
  yelp: {
    id: 'default-yelp',
    name: 'Yelp',
    url: 'https://www.yelp.com/',
    iconSrc: 'built-in-yelp',
  },
  youtube: {
    id: 'default-youtube',
    name: 'youtube',
    url: 'https://www.youtube.com/',
    iconSrc: 'built-in-youtube',
  },
};

const iconData: Array<IconItem> = values(ALL_ICON_ITEMS);
iconData.sort((a, b) => a.name.localeCompare(b.name));

export const initIconItems: Array<IconItem> = [
  ALL_ICON_ITEMS.google,
  ALL_ICON_ITEMS.gmail,
  ALL_ICON_ITEMS.youtube,
  ALL_ICON_ITEMS.fb,
  ALL_ICON_ITEMS.linkedin,
  ALL_ICON_ITEMS.github,
  ALL_ICON_ITEMS.slack,
  ALL_ICON_ITEMS.amazon,
  ALL_ICON_ITEMS.ebay,
  ALL_ICON_ITEMS.gdrive,
  ALL_ICON_ITEMS.netflix,
  ALL_ICON_ITEMS.yelp,
  ALL_ICON_ITEMS.airbnb,
  ALL_ICON_ITEMS.uber,
];

export default iconData;
