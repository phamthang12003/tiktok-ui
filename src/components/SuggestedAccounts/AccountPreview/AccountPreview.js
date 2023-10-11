import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/387092712_1006314840483339_5656741325793385984_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=668d3b&_nc_ohc=mQrS64Etc3wAX-J7Mhv&_nc_ht=scontent.fhan2-3.fna&oh=00_AfA5fsAvGIKNDffBTruc006WbJXmAfMS1PtO-qvYDNTH4A&oe=652AEE3C"
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>

            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>vuhoaithuy</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Vũ Hoài Thùy</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
