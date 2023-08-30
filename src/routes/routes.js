import DataEntry from '../pages/DataEntry';
import Results from '../pages/Results';

const routes = [
  {
    path: '/',
    component: DataEntry,
    exact: true,
    pageTitle: 'Home'
  },
  {
    path: '/results',
    component: Results,
    showBackButton: true,
    pageTitle: 'Results'
  }
];

export default routes;
