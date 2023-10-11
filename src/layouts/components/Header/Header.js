import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import config from '~/config';
import Button from '~/components/Button/Button';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

function Header() {
    const currentUser = true;

    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    {
                        type: 'language',
                        code: 'es',
                        title: 'Español',
                    },
                    {
                        type: 'language',
                        code: 'fr',
                        title: 'Français',
                    },
                    {
                        type: 'language',
                        code: 'de',
                        title: 'Deutsch',
                    },
                    {
                        type: 'language',
                        code: 'ja',
                        title: '日本語',
                    },
                    {
                        type: 'language',
                        code: 'ko',
                        title: '한국어',
                    },
                    {
                        type: 'language',
                        code: 'ar',
                        title: 'العربية',
                    },
                    {
                        type: 'language',
                        code: 'ru',
                        title: 'Русский',
                    },
                    {
                        type: 'language',
                        code: 'zh',
                        title: '中文',
                    },
                    {
                        type: 'language',
                        code: 'pt',
                        title: 'Português',
                    },
                    {
                        type: 'language',
                        code: 'it',
                        title: 'Italiano',
                    },
                    {
                        type: 'language',
                        code: 'nl',
                        title: 'Nederlands',
                    },
                    {
                        type: 'language',
                        code: 'sv',
                        title: 'Svenska',
                    },
                    {
                        type: 'language',
                        code: 'pl',
                        title: 'Polski',
                    },
                    {
                        type: 'language',
                        code: 'tr',
                        title: 'Türkçe',
                    },
                    {
                        type: 'language',
                        code: 'th',
                        title: 'ไทย',
                    },
                    {
                        type: 'language',
                        code: 'hi',
                        title: 'हिन्दी',
                    },
                    {
                        type: 'language',
                        code: 'id',
                        title: 'Bahasa Indonesia',
                    },
                    {
                        type: 'language',
                        code: 'el',
                        title: 'Ελληνικά',
                    },
                    {
                        type: 'language',
                        code: 'cs',
                        title: 'Čeština',
                    },
                    {
                        type: 'language',
                        code: 'hu',
                        title: 'Magyar',
                    },
                    {
                        type: 'language',
                        code: 'fi',
                        title: 'Suomi',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedback and help',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shortcuts',
        },
    ];

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@mnasnh',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/387143713_3584773951735661_4016148991590619483_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=5614bc&_nc_ohc=Q5uMVgn1paAAX9nXBY7&_nc_ht=scontent.fhan2-3.fna&oh=00_AfDF7wEq_25URZu7qI7TuDRrr4BTWEFVu31TdodP0jg8pw&oe=6526E522"
                                alt="Mai Nhật Ánh"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
