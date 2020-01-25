// @flow

import fetchIcon from 'utils/fetchIcon';
import type { IconItem } from 'types/IconItem';

const iconData: Array<IconItem> = [
  {
    id: 'default-airbnb',
    name: 'Airbnb',
    url: 'https://www.airbnb.com',
    iconSrc: fetchIcon('airbnb'),
  },
  {
    id: 'default-amazon',
    name: 'Amazon',
    url: 'https://www.amazon.com',
    iconSrc: fetchIcon('amazon'),
  },
  {
    id: 'default-apple',
    name: 'Apple',
    url: 'https://www.apple.com',
    iconSrc: fetchIcon('apple'),
  },
  {
    id: 'default-baidu',
    name: 'Baidu',
    url: 'https://www.baidu.com',
    iconSrc: fetchIcon('baidu'),
  },
  {
    id: 'default-behance',
    name: 'Behance',
    url: 'https://www.behance.net',
    iconSrc: fetchIcon('behance'),
  },
  {
    id: 'default-bing',
    name: 'Bing',
    url: 'https://www.bing.com',
    iconSrc: fetchIcon('bing'),
  },
  {
    id: 'default-deviantart',
    name: 'DeviantArt',
    url: 'https://www.deviantart.com',
    iconSrc: fetchIcon('deviantart'),
  },
  {
    id: 'default-dribbble',
    name: 'Dribbble',
    url: 'https://www.dribbble.com',
    iconSrc: fetchIcon('dribbble'),
  },
  {
    id: 'default-dropbox',
    name: 'Dropbox',
    url: 'https://www.dropbox.com',
    iconSrc: fetchIcon('dropbox'),
  },
  {
    id: 'default-ebay',
    name: 'Ebay',
    url: 'https://www.ebay.com',
    iconSrc: fetchIcon('ebay'),
  },
  {
    id: 'default-evernote',
    name: 'Evernote',
    url: 'https://www.evernote.com',
    iconSrc: fetchIcon('evernote'),
  },
  {
    id: 'default-fb',
    name: 'Facebook',
    url: 'https://www.facebook.com',
    iconSrc: fetchIcon('fb'),
  },
  {
    id: 'default-flickr',
    name: 'Flickr',
    url: 'https://www.flickr.com',
    iconSrc: fetchIcon('flickr'),
  },
  {
    id: 'default-gdrive',
    name: 'Google Drive',
    url: 'https://www.google.com/drive/',
    iconSrc: fetchIcon('gdrive'),
  },
  {
    id: 'default-github',
    name: 'Github',
    url: 'https://www.github.com',
    iconSrc: fetchIcon('github'),
  },
  {
    id: 'default-gmail',
    name: 'Gmail',
    url: 'https://www.gmail.com',
    iconSrc: fetchIcon('gmail'),
  },
  {
    id: 'default-google',
    name: 'Google',
    url: 'https://www.google.com',
    iconSrc: fetchIcon('google'),
  },
  {
    id: 'default-groupon',
    name: 'Groupon',
    url: 'https://www.groupon.com',
    iconSrc: fetchIcon('groupon'),
  },
  {
    id: 'default-instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com',
    iconSrc: fetchIcon('instagram'),
  },
  {
    id: 'default-linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com',
    iconSrc: fetchIcon('linkedin'),
  },
  {
    id: 'default-netflix',
    name: 'Netflix',
    url: 'https://www.netflix.com',
    iconSrc: fetchIcon('netflix'),
  },
  {
    id: 'default-office',
    name: 'Office',
    url: 'https://www.office.com',
    iconSrc: fetchIcon('office'),
  },
  {
    id: 'default-pandora',
    name: 'Pandora',
    url: 'https://www.pandora.com',
    iconSrc: fetchIcon('pandora'),
  },
  {
    id: 'default-paypal',
    name: 'Paypal',
    url: 'https://www.paypal.com',
    iconSrc: fetchIcon('paypal'),
  },
  {
    id: 'default-pinterest',
    name: 'Pinterest',
    url: 'https://www.pinterest.com',
    iconSrc: fetchIcon('pinterest'),
  },
  {
    id: 'default-reddit',
    name: 'Reddit',
    url: 'https://www.reddit.com',
    iconSrc: fetchIcon('reddit'),
  },
  {
    id: 'default-slack',
    name: 'Slack',
    url: 'https://www.slack.com',
    iconSrc: fetchIcon('slack'),
  },
  {
    id: 'default-soundcloud',
    name: 'Sound Cloud',
    url: 'https://www.soundcloud.com',
    iconSrc: fetchIcon('soundcloud'),
  },
  {
    id: 'default-stackoverflow',
    name: 'Stackoverflow',
    url: 'https://www.stackoverflow.com',
    iconSrc: fetchIcon('stackoverflow'),
  },
  {
    id: 'default-tripadvisor',
    name: 'Tripadvisor',
    url: 'https://www.tripadvisor.com',
    iconSrc: fetchIcon('tripadvisor'),
  },
  {
    id: 'default-tumbler',
    name: 'Tumbler',
    url: 'https://www.tumbler.com',
    iconSrc: fetchIcon('tumbler'),
  },
  {
    id: 'default-twitch',
    name: 'Twitch',
    url: 'https://www.twitch.com',
    iconSrc: fetchIcon('twitch'),
  },
  {
    id: 'default-twitter',
    name: 'Twitter',
    url: 'https://www.twitter.com',
    iconSrc: fetchIcon('twitter'),
  },
  {
    id: 'default-uber',
    name: 'Uber',
    url: 'https://www.uber.com',
    iconSrc: fetchIcon('uber'),
  },
  {
    id: 'default-vimeo',
    name: 'Vimeo',
    url: 'https://www.vimeo.com',
    iconSrc: fetchIcon('vimeo'),
  },
  {
    id: 'default-wechat',
    name: 'Wechat',
    url: 'https://web.wechat.com/',
    iconSrc: fetchIcon('wechat'),
  },
  {
    id: 'default-yahoo',
    name: 'Yahoo',
    url: 'https://www.yahoo.com/',
    iconSrc: fetchIcon('yahoo'),
  },
  {
    id: 'default-yelp',
    name: 'Yelp',
    url: 'https://www.yelp.com/',
    iconSrc: fetchIcon('yelp'),
  },
  {
    id: 'default-youtube',
    name: 'youtube',
    url: 'https://www.youtube.com/',
    iconSrc: fetchIcon('youtube'),
  },
];

export default iconData;
