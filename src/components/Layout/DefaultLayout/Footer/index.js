import classNames from 'classnames/bind';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('findstore')}>
                <img src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Store.svg" alt="" />
                <a href="#">
                    <button>Tim cua hang</button>
                </a>
            </div>
            <div className={cx('right')}>Con lai</div>
        </footer>
    );
}

export default Footer;
