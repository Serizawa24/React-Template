import styles from './Auth.module.scss'
import classnames from 'classnames/bind';

const cx = classnames.bind(styles)
function Login() {
  return ( 
    <div className={cx('wrapper')}>
      login
    </div>
  );
}

export default Login;