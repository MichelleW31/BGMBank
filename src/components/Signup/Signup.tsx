import styles from './Signup.module.scss';
import {ReactElement, useState} from 'react';
import Image from 'components/Image/Image';
import {NavLink} from 'react-router-dom';

const Signup = (): ReactElement => {
  const [user, setUser] = useState<{username: string; email: string; password: string}>({
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<{errorStatus: boolean; errorMessage: string}>({
    errorStatus: false,
    errorMessage: '',
  });

  const {username, email, password} = user;
  const {errorStatus, errorMessage} = errors;

  const errorCheck = (): void => {
    const message: string = 'Please enter a valid username and password.';

    // empty credentials error
    if (username === '' || password === '') {
      setErrors({...errors, errorStatus: true, errorMessage: message});
    } else {
      setErrors({...errors, errorStatus: false, errorMessage: ''});
    }
  };

  const signUp = (): void => {
    errorCheck();
  };

  return (
    <section className={styles.SignupContainer}>
      <Image />
      <section className={styles.SignupForm}>
        <h2 className={styles.FormHeaderCopy}>Signup</h2>
        <section>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUser({...user, username: e.target.value})}
          />
          <input
            type='text'
            placeholder='Email Address'
            value={email}
            onChange={(e) => setUser({...user, password: e.target.value})}
          />
          <input
            type='text'
            placeholder='Password'
            value={password}
            onChange={(e) => setUser({...user, password: e.target.value})}
          />
          <input type='text' placeholder='Confirm Password' />
        </section>
        {errorStatus && <p className={styles.Error}>{errorMessage}</p>}
        <button className={styles.SignupButton} onClick={() => signUp()}>
          Signup
        </button>
        <section className={styles.ExistingAccountCopy}>
          <p>Already have an account</p>
          <p>
            <NavLink to='/'>Login</NavLink>
          </p>
        </section>
      </section>
    </section>
  );
};

export default Signup;
