import styles from './Login.module.scss';
import Image from 'components/Image/Image';
import {useState} from 'react';

const Login = () => {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorStatus, setErrorStatus] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  return (
    <section className={styles.LoginContainer}>
      <Image />
      <section className={styles.LoginForm}>
        <h2 className={styles.FormHeaderCopy}>Login</h2>
        <input type='text' placeholder='Username' value={userName} onChange={(e) => setUserName(e.target.value)} />
        <input type='text' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        {errorStatus && <p className={styles.Error}>{error}</p>}
        <button className={styles.LoginButton}>Login</button>
        <p className={styles.ForgotPasswordCopy}>Forgot Password</p>
      </section>
    </section>
  );
};

export default Login;
