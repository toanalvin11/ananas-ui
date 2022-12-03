import classNames from 'classnames/bind';

import styles from './Post.module.scss';

const cx = classNames.bind(styles);

function Post(props) {
    return (
        <div key={props.index} className={cx('posts-card')}>
            <img src={props.image} alt="" />
            <div className={cx('posts-card-caption')}>
                <a href={props.link}>
                    <strong className={cx('posts-card-title')}>{props.title}</strong>
                </a>
                <p className={cx('posts-card-desc')}>{props.desc}</p>
                <a href="/#">Đọc thêm</a>
            </div>
        </div>
    );
}

export default Post;
