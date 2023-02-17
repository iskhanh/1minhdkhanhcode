import Header from '../Header';
import classNames from 'classnames/bind';
import styles from './defaultLayout.module.scss';
import Footer from '../Footer';
import { showCart } from '../../Contextt';
import { useContext } from 'react';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const context = useContext(showCart);
    return (
        <div className={cx('wrap')}>
            <Header />
            <div className={cx('main')}>{children}</div>
            <Footer />
        </div>
    );
}
export default DefaultLayout;
