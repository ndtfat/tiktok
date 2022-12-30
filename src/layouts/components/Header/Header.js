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
import {
    CoinIcon,
    EarthIcon,
    KeyboardIcon,
    LogoutIcon,
    QuestionIcon,
    SendIcon,
    SettingIcon,
    UploadIcon,
    UserIcon,
    ChatIcon,
    MoreIcon,
} from '~/components/Icon';

const cx = classNames.bind(styles);

const MENU_ITEM = [
    {
        icon: <EarthIcon />,
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
        icon: <QuestionIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    const userMenu = [
        {
            icon: <UserIcon />,
            title: 'View profile',
            to: '/@ndtfat',
        },
        {
            icon: <CoinIcon />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <SettingIcon />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEM,
        {
            icon: <LogoutIcon />,
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
                                    <UploadIcon />
                                </button>
                            </Tippy>

                            <Tippy content="Message">
                                <button className={cx('actions-btn')}>
                                    <SendIcon />
                                </button>
                            </Tippy>

                            <Tippy content="Inbox">
                                <button className={cx('actions-btn')}>
                                    <ChatIcon />
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
                                <MoreIcon />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
