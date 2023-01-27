import { AppProperties } from '../models';
import { App } from '../enums';

export const AppList: Array<AppProperties> = [
  { key: App.Firefly, link: 'https://firefly.im' },
  {
    key: App.Alexandria,
    link: 'https://alexandriaclub.org',
  },
  { key: App.Art, iconExtension: 'jpg' },
  { key: App.Movies, link: 'https://letterboxd.com/helaku/lists/by/name' },
];
