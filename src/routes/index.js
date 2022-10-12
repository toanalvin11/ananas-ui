import Home from '~/pages/Home';
import Products from '~/pages/Products';

//Public routes
const PublicRoutes = [
    { path: '/', component: Home },
    { path: '/products', component: Products },
];

const PrivateRoutes = [];

export { PublicRoutes, PrivateRoutes };
