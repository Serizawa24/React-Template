import styles from './Footer.module.scss'
import classnames from 'classnames/bind';

const cx = classnames.bind(styles)
function Footer() {
  return ( 
    <footer className={cx('wrapper')}>
      footer
    </footer>
  );
}

export default Footer;