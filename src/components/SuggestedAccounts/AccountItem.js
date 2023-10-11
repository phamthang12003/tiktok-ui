import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[500, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/387092712_1006314840483339_5656741325793385984_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=668d3b&_nc_ohc=mQrS64Etc3wAX-J7Mhv&_nc_ht=scontent.fhan2-3.fna&oh=00_AfA5fsAvGIKNDffBTruc006WbJXmAfMS1PtO-qvYDNTH4A&oe=652AEE3C"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>vuhoaithuy</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Vũ Hoài Thùy</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
