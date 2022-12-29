import 'remixicon/fonts/remixicon.css';
import Tippy from '@tippyjs/react'; // different import path!
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

import config from '~/config';
import Button from '~/components/Button';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import Search from '../Search';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const MENU_ITEM = [
    {
        icon: <i className="ri-earth-line"></i>,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'EN',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'VI',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <i className="ri-question-line" />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <i className="ri-keyboard-box-line" />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = false;

    const userMenu = [
        {
            icon: <i className="ri-user-line" />,
            title: 'View profile',
            to: '/@ndtfat',
        },
        {
            icon: <i className="ri-copper-coin-line" />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <i className="ri-settings-2-line" />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEM,
        {
            icon: <i className="ri-logout-box-r-line" />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // handle onChange language
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <Link to={config.routes.home}>
                    <Image src={images.logo.default} alt="logo"></Image>
                </Link>

                {/* Search */}
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload Video">
                                <button className={cx('actions-btn')}>
                                    <i className="ri-upload-cloud-line" />
                                </button>
                            </Tippy>

                            <Tippy content="Message">
                                <button className={cx('actions-btn')}>
                                    <i className="ri-send-plane-line" />
                                </button>
                            </Tippy>

                            <Tippy content="Inbox">
                                <button className={cx('actions-btn')}>
                                    <i className="ri-chat-3-line" />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button bl_wh>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEM} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img className={cx('user-avatar')} alt="fat" src={images.userAvatar} />
                        ) : (
                            <button className={cx('more-btn')}>
                                <i className="ri-more-2-fill"></i>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
