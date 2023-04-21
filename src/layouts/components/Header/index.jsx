import styles from './Header.module.scss'
import classnames from 'classnames/bind';

const cx = classnames.bind(styles)
function Header() {
  return ( 
    <header className={cx('wrapper')}>
      header
    </header>
  );
}

export default Header;