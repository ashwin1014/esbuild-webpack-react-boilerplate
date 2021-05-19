// import { lazy } from '@loadable/component'
import { Home } from '@pages';
import prerenderedLoadable from './preRenderedLoadable';

const Settings = prerenderedLoadable(() => import('@pages/Settings/Settings'));

export const ROUTES = [
  {
    path: '/',
    key: 'Home',
    exact: true,
    isPrivate: false,
    component: Home
  },
  {
    path: '/settings',
    key: 'Settings',
    exact: true,
    isPrivate: true,
    component: Settings
  }
];
