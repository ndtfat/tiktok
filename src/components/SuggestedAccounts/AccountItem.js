import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import Tippy from '@tippyjs/react/headless';

import images from '~/assets/images';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => (
        <div tabIndex="-1" {...props}>
            <PopperWrapper className={cx('preview')}>
                <AccountPreview />
            </PopperWrapper>
        </div>
    );

    return (
        <div>
            <Tippy interactive placement="bottom-start" offset={[-2, 0]} delay={[1000, 0]} render={renderPreview}>
                <div className={cx('account-item')}>
                    <Image className={cx('avatar')} src={images.userAvatar} alt="" />

                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>ndt fat</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('fullname')}>nguyễn dương tiến phát</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
