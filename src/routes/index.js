import config from './config';
import Home from '../pages/Home';
import Login from '../pages/Auth/Login.jsx';
import Register from '../pages/Auth/Register.jsx';
import { HeaderOnly } from '../layouts';
const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.login,
    component: Login,
    layout: HeaderOnly,
  },
  {
    path: config.routes.register,
    component: Register,
    layout: HeaderOnly,
  }

];

const privateRoutes = [];

export { privateRoutes, publicRoutes };