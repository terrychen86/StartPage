// @flow

import fetchIcon from 'utils/fetchIcon';
import type { IconItem } from 'types/IconItem';

const iconData: Array<IconItem> = [
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
];

export default iconData;
