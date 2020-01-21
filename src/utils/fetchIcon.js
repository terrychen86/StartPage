// @flow

import amazon from 'icons/amazon_1220386.png';
import apple from 'icons/apple_1220384.png';
import bing from 'icons/bing_1220382.png';
import defaultIcon from 'icons/default_3761814.png';

const ICONS = {
  amazon,
  apple,
  bing,
  defaultIcon,
};

const fetchIcon = (name: $Keys<typeof ICONS>): string => ICONS[name];

export default fetchIcon;
