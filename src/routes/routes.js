import DataEntry from '../pages/DataEntry';
import Results from '../pages/Results';

const routes = [
  {
    path: '/',
    component: DataEntry,
    exact: true
  },
  {
    path: '/results',
    component: Results,
    showBackButton: true
  }
];

export default routes;
