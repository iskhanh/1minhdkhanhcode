import Home from './components/Pages/Home';
import Product from './components/Pages/Product';
import Cart from './components/Pages/Cart';
import ListProduct from './components/Pages/List';
import Pay from './components/Pages/Pay';
import Login from './components/Pages/Login';
import SignUp from './components/Pages/signUp';

const Public = [
    { path: '/', element: Home },
    { path: '/product/:branch/:id', element: Product },
    { path: '/list/:sex/:branch', element: ListProduct },
    { path: '/cart', element: Cart },
    { path: '/pay', element: Pay },
    { path: '/login', element: Login },
    { path: '/signup', element: SignUp },
];

export { Public };
