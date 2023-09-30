import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/0734aa53fbd2851d0bee26f47217f308.jpeg?x-expires=1696057200&x-signature=OhSM7YvEY4okupSlxlMvdL%2FFWPo%3D"
                alt="Mai Nhật Ánh"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>mnasnh</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>ʚɞ</span>
            </div>
        </div>
    );
}

export default AccountItem;
