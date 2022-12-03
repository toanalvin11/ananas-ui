import classNames from 'classnames/bind';

import styles from './Collection.module.scss';

const cx = classNames.bind(styles);

function Collection(props) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('collection-advertisement')}>
                <div className={cx('collection-img')}>
                    <img src={props.image} alt="" />
                </div>
                <div className={cx('collection-content')}>
                    <h3>
                        <a href="/#">{props.title}</a>
                    </h3>
                    <p>{props.desc}</p>
                </div>
            </div>
        </div>
    );
}

export default Collection;
