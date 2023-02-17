import styles from './header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Tippy() {
    return (
        <div className={cx('option_children')}>
            <Link className={cx('children')}>Hàng mới về</Link>
            <Link className={cx('children')}>Collection</Link>
            <Link className={cx('children')}> Áo sơ mi </Link>
            <Link className={cx('children')}>Áo len</Link>
            <Link className={cx('children')}>Áo khoác </Link>
            <Link className={cx('children')}>Quần Jeans </Link>
        </div>
    );
}
export default Tippy;
