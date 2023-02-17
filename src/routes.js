import Home from './components/Pages/Home';
import Product from './components/Pages/Product';
import Cart from './components/Pages/Cart';
import ListProduct from './components/Pages/List';
import Pay from './components/Pages/Pay';

const Public = [
    { path: '/', element: Home },
    { path: '/product/:branch/:id', element: Product },
    { path: '/list/:sex/:branch', element: ListProduct },
    { path: '/cart', element: Cart },
    { path: '/pay', element: Pay },
];

export { Public };
