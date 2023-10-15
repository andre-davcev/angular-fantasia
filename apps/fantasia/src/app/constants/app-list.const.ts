import { AppProperties } from '../models';
import { App } from '../enums';

export const AppList: Array<AppProperties> = [
  {
    key: App.Resume,
    link: '/assets/docs/Andre Davcev - Senior Software Engineer - Resume.docx',
  },
  { key: App.Github, link: 'https://github.com/andre-davcev' },
  {
    key: App.LinkedIn,
    link: 'http://www.linkedin.com/in/andre-davcev-566912b',
  },
  { key: App.Firefly, link: 'https://firefly.im' },
  // {
  //   key: App.Alexandria,
  //   link: 'https://alexandriaclub.org',
  // },
  // { key: App.Art, iconExtension: 'jpg' },
  { key: App.Movies, link: 'https://letterboxd.com/helaku/lists/by/name' },
];
