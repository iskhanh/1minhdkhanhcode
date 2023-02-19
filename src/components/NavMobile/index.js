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
            title: 'Nữ',
            id: 1,
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
            id: 2,
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
            id: 3,
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
            id: 4,
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
            id: 5,
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
                                                onClick={() => context.handleHideNavMobile()}
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
