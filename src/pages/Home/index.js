import classNames from 'classnames/bind';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div>
            <div className={cx('abc')}>HOME PAGE</div>
        </div>
    );
}

export default Home;
