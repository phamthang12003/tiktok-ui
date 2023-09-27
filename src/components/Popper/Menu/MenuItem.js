import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.modules.scss';

const cx = classNames.bind(styles);
function MenuItem({ data }) {
    return (
        <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
