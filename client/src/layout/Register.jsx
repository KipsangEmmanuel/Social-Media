import React from "react";
import "./Register.scss";
import { FaAnglesRight, FaAddressCard, FaLock } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import usersData from '../mockData/users.json';

const Register = () => {
    
  const [navToLogin, setNavToLogin] = useState('/register');
  const [mockUsersData, setMockUsersData] = useState({ users: [] });

  const navigate=useNavigate()


  const schema = yup.object().shape({
    fullName: yup.string().required("Full name is required"),
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .required("password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/,
        "Must Contain 4 Chars, 1 Uppercase, 1 Lowercase, 1 Number & 1 special Char"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const loginNavigation = () => {
    setNavToLogin(navToLogin);
    navigate("/");
  };

  useEffect(() => {
    const allUsers = JSON.parse(localStorage.getItem('allUsers')) || [];
    console.log("testing existing users",allUsers);
    setMockUsersData({ users: allUsers });
    console.log('Existing users:', allUsers);
  }, []);


   const RegisterUser = (data) => {
    const newUserId = mockUsersData.users.length + 1;

    const newUser = {
      id: newUserId,
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    };

    setMockUsersData(prevState => ({ users: [...prevState.users, newUser] }));

    localStorage.setItem('allUsers', JSON.stringify([...mockUsersData.users, newUser]));

    setTimeout(() => {
      console.log("User registered:", newUser);
      navigate("/");
    }, 1000);
  };

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <div className="form-head">
            <h2>Create An Account</h2>
          </div>
          <div className="register-page">
            <div className="register-img"></div>
            <form className="register" onSubmit={handleSubmit(RegisterUser)}>
              <div className="register__field">
                <FaAddressCard className="register__icon fas fa-user" />
                <input
                  type="text"
                  className="register__input"
                  {...register("fullName")}
                  placeholder="Enter your FullName"
                />
                <p>{errors.fullName?.message}</p>
              </div>
              <div className="register__field">
                <FaAddressCard className="register__icon fas fa-user" />
                <input
                  type="text"
                  className="register__input"
                  {...register("email")}
                  placeholder="Enter your Email"
                />
                <p>{errors.email?.message}</p>
              </div>
              <div className="register__field">
                <FaLock className="register__icon fas fa-lock" />
                <input
                  type="password"
                  className="register__input"
                  {...register("password")}
                  placeholder="Password"
                />
                <p>{errors.password?.message}</p>
              </div>
              <button type="submit" className="button register__submit">
                <span className="button__text">Register Now</span>
                <FaAnglesRight className="button__icon fas fa-chevron-right" />
              </button>
            </form>
          </div>
          <div class="social-register">
            <h3>Have an Account already</h3>
            <a onClick={loginNavigation}>Login Here</a>
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

export default Register;
