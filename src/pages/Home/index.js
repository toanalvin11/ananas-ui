import classNames from 'classnames/bind';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div>
            <div className={cx('abc')}>abc</div>
        </div>
    );
}

export default Home;
