import styles from './header.module.scss';
import classNames from 'classnames/bind';
import logo from '../../assets/img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faBars, faMagnifyingGlass, faPaw, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import CartHeader from '../CartHeader';
import { showCart } from '../Contextt';
import NavMobile from '../NavMobile';
import { useSelector } from 'react-redux';
import Tippy from '@tippyjs/react/headless';
import TippyUser from './tippy';

const cx = classNames.bind(styles);

function Header() {
    const list = useSelector((state) => state.cart);
    const context = useContext(showCart);
    const local = localStorage.getItem('dataUser');
    const user = localStorage.getItem('nameUser');

    const data = [
        {
            title: 'Nữ',
            children: [
                {
                    titleChild: 'Áo thun',
                    sex: 'male',
                    branch: 'ao-thun-nu',
                },
                {
                    titleChild: 'Áo sơ mi',
                    sex: 'male',
                    branch: 'so-mi',
                },
                {
                    titleChild: 'Áo len',
                    sex: 'male',
                    branch: 'ao-len',
                },
                {
                    titleChild: 'Áo crop',
                    sex: 'male',
                    branch: 'crop',
                },
            ],
        },
        {
            title: 'Nam',
            children: [
                {
                    titleChild: 'Áo thun',
                    sex: 'man',
                    branch: 'ao-thun',
                },
                {
                    titleChild: 'Áo vest ',
                    sex: 'man',
                    branch: 'vest',
                },
                {
                    titleChild: 'Áo phao',
                    sex: 'man',
                    branch: 'ao-phao',
                },
                {
                    titleChild: 'Quần lửng',
                    sex: 'man',
                    branch: 'quan-lung',
                },
            ],
        },
        {
            title: 'Trẻ em',
            children: [
                {
                    titleChild: 'Áo thun',
                    sex: 'male',
                    branch: 'ao-thun',
                },
                {
                    titleChild: 'Áo sơ mi',
                    sex: 'male',
                    branch: 'so-mi',
                },
                {
                    titleChild: 'Áo len',
                    sex: 'male',
                    branch: 'ao-len',
                },
                {
                    titleChild: 'Áo crop',
                    sex: 'male',
                    branch: 'crop',
                },
            ],
        },
        {
            title: 'BST',
            children: [
                {
                    titleChild: 'Áo thun',
                    sex: 'male',
                    branch: 'ao-thun',
                },
                {
                    titleChild: 'Áo sơ mi',
                    sex: 'male',
                    branch: 'so-mi',
                },
                {
                    titleChild: 'Áo len',
                    sex: 'male',
                    branch: 'ao-len',
                },
                {
                    titleChild: 'Áo crop',
                    sex: 'male',
                    branch: 'crop',
                },
            ],
        },
        {
            title: 'Khẩu trang',
            children: [
                {
                    titleChild: 'Áo thun',
                    sex: 'male',
                    branch: 'ao-thun',
                },
                {
                    titleChild: 'Áo sơ mi',
                    sex: 'male',
                    branch: 'so-mi',
                },
                {
                    titleChild: 'Áo len',
                    sex: 'male',
                    branch: 'ao-len',
                },
                {
                    titleChild: 'Áo crop',
                    sex: 'male',
                    branch: 'crop',
                },
            ],
        },
        {
            title: 'Thông tin',
        },
    ];
    return (
        <div className={cx('header')}>
            {context.show && <div className={cx('overlay')} onClick={() => context.handleHide()}></div>}
            <NavMobile />
            <CartHeader />
            <div className={cx('wrap')}>
                <FontAwesomeIcon
                    className={cx('icon_menu_mobile')}
                    icon={faBars}
                    onClick={() => context.handleShowNavMobile()}
                />

                <img className={cx('wrap_logo')} src={logo} />

                <div className={cx('wrap_navbar')}>
                    {data.map((infor, index) => {
                        return (
                            <div key={index} className={cx('wrap_option')}>
                                <h2 className={cx('option')}>{infor.title}</h2>
                                <div className={cx('option_children')}>
                                    {infor.children &&
                                        infor.children.map((i2, index) => {
                                            return (
                                                <Link
                                                    key={index}
                                                    to={`/list/${i2.sex}/${i2.branch}`}
                                                    className={cx('children')}
                                                >
                                                    {i2.titleChild}
                                                </Link>
                                            );
                                        })}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className={cx('user_action')}>
                    <div className={cx('user_action_group')}>
                        <div className={cx('wrap_seach')}>
                            <input className={cx('input')} placeholder="tìm kiếm" />
                            <FontAwesomeIcon className={cx('icon_seach')} icon={faMagnifyingGlass} />
                        </div>
                        <FontAwesomeIcon className={cx('icon_action')} icon={faPaw} />
                        <div>
                            {local ? (
                                <Tippy
                                    interactive
                                    placement="bottom-end"
                                    trigger="click"
                                    offset={[60, 12]}
                                    render={(attrs) => <TippyUser></TippyUser>}
                                >
                                    <div className={cx('user_login')}>{user.slice(0, 1)}</div>
                                </Tippy>
                            ) : (
                                <Link to={'/login'} className={cx('wrap_user')}>
                                    <FontAwesomeIcon className={cx('icon_action')} icon={faUser} />
                                </Link>
                            )}
                        </div>
                    </div>
                    <div className={cx('wrap_bagshopping')}>
                        <FontAwesomeIcon
                            className={cx('icon_action')}
                            icon={faBagShopping}
                            onClick={() => {
                                context.handleShow();
                            }}
                        />
                        <div className={cx('numb_cart')}>{list.totalItem}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
