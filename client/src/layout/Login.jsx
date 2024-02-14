import React, { useEffect, useState } from 'react';
import './Login.scss';
import { FaAnglesRight, FaAddressCard, FaLock } from 'react-icons/fa6';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required('Email is required'),
    password: yup
      .string()
      .required('Password is required')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/,
        'Must Contain 4 Chars, 1 Uppercase, 1 Lowercase, 1 Number & 1 special Char'
      ),
  });

  const navigate = useNavigate();
  const [storedUsers, setStoredUsers] = useState([]);
  const [loginError, setLoginError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState('');

  useEffect(() => {
    const allUsers = JSON.parse(localStorage.getItem('allUsers')) || [];
    setStoredUsers(allUsers);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const loginUser = (data) => {
    const user = storedUsers.find(
      (storedUser) => storedUser.email === data.email && storedUser.password === data.password
    );

    if (user) {
      console.log('User logged in:', user);

      localStorage.setItem('loggedInUser', JSON.stringify(user));

      
      setLoginError('');
      setLoginSuccess('Logged In successfully!');

      setTimeout(() => {
        navigate('/profile');
      }, 2000);


    } else {
        setLoginSuccess('');
        setLoginError('Invalid email or password');
    }
  };

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <div className="form-head">
            <h2>Login </h2>
          </div>
          <div className="login-page">
            <div className="login-img"></div>
            <form className="login" onSubmit={handleSubmit(loginUser)}>
            {loginError && <p className="error-message">{loginError}</p>}
            {loginSuccess && <p className="success-message">{loginSuccess}</p>}
              <div className="login__field">
                <FaAddressCard className="login__icon fas fa-user" />
                <input
                  type="email"
                  {...register('email')}
                  className="login__input"
                  placeholder="Enter your Email"
                />
                <p>{errors.email?.message}</p>
              </div>
              <div className="login__field">
                <FaLock className="login__icon fas fa-lock" />
                <input
                  type="password"
                  {...register('password')}
                  className="login__input"
                  placeholder="Password"
                />
                <p>{errors.password?.message}</p>
              </div>
              <button type="submit" className="button login__submit">
                <span className="button__text">Log In Now</span>
                <FaAnglesRight className="button__icon fas fa-chevron-right" />
              </button>
            </form>
          </div>
          <div className="social-login">
            <h3>Don't Have an Account</h3>
            <a onClick={() => navigate('/register')}>Register Here</a>
          </div>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
