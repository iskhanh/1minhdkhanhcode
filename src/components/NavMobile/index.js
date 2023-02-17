import styles from './navMobile.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { showCart } from '../Contextt';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function NavMobile() {
    const [show, setShow] = useState([]);
    const context = useContext(showCart);
    const data = [
        {
            id: 1,
            title: 'Nữ',
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
            id: 2,
            title: 'Nam',
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
            id: 3,
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
            id: 4,
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
            id: 5,
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
            id: 6,
            title: 'Thông tin',
        },
    ];
    const handleId = (id) => {
        setShow((prev) => {
            const isShow = show.includes(id);
            if (isShow) {
                return show.filter((item) => item !== id);
            } else {
                return [...prev, id];
            }
        });
    };
    return (
        <div className={cx('wrapper', context.showNavMobile ? 'show' : '')}>
            <FontAwesomeIcon className={cx('exit')} icon={faXmark} onClick={() => context.handleHideNavMobile()} />
            <div className={cx('children')}>
                {data.map((e, index) => {
                    return (
                        <div className={cx('option')} key={index}>
                            <div className={cx('option_show')}>
                                <h3 className={cx('option_title')}>{e.title}</h3>
                                <div className={cx('wrap_icon_option')} onClick={() => handleId(e.id)}>
                                    {!show.includes(e.id) && (
                                        <FontAwesomeIcon className={cx('option_icon')} icon={faPlus} />
                                    )}
                                    {show.includes(e.id) && (
                                        <FontAwesomeIcon className={cx('option_icon')} icon={faMinus} />
                                    )}
                                </div>
                            </div>
                            <div className={cx('option_child', show.includes(e.id) ? 'show_child' : '')}>
                                {e.children &&
                                    e.children.map((c, index) => {
                                        return (
                                            <Link
                                                key={index}
                                                className={cx('option_title_child')}
                                                to={`/list/${c.sex}/${c.branch}`}
                                            >
                                                {c.titleChild}
                                            </Link>
                                        );
                                    })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default NavMobile;
