import classNames from 'classnames/bind';

import styles from './SearchResult.module.scss';

const cx = classNames.bind(styles);

function SearchResult() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('image')} src="/#" alt="" />
            <div className={cx('info')}>
                <p className={cx('name')}>Tên</p>
                <span className={cx('category')}>Thể loại</span>
            </div>
            <p className={cx('price')}>Giá</p>
        </div>
    );
}

export default SearchResult;
