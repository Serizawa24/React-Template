import styles from './Content.module.scss'
import classnames from 'classnames/bind';

const cx = classnames.bind(styles)
function Content() {
  return ( 
    <div className={cx('wrapper')}>
      Content
    </div>
  );
}

export default Content;