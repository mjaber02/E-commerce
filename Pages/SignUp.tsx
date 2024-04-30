import React from 'react';
import styles from '../styles/contact.module.css';
import contactImage from '../svgs/contact.svg';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import google from '../svgs/google.svg';
import { NavLink } from 'react-router-dom';


interface FormData {
  contact: string;
  password: string;
  name:string;
}

const SignUp: React.FC = () => {



  const schema = yup.object().shape({
    contact: yup
      .string()
      .required('Email or Phone number is required')
      .test('contact', 'Invalid email or phone number', (value: string | undefined) => {
        return (

          yup.string().email().isValidSync(value) || /^\+?[1-9]\d{1,14}$/.test(value)
        );
      }),
    password: yup.string().min(4).max(20).required(),
    name:yup.string().required()
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  
    
  };

  return (
    <div className={styles.main}>
      <div >
        <img src={contactImage} alt="image" className={styles.phoneImage} />
      </div>
      <div className={styles.form}>
        <div className={styles.loginform}>
          <h1>Create an account</h1>
          <p>Enter your details below</p>
          <br />
          <form onSubmit={handleSubmit(onSubmit)} className={styles.customizeForm}>
          <input type="text" placeholder="Name" {...register('name')} />
            <p>{errors.name?.message}</p>
            <br />
            <input type="text" placeholder="Email or Phone Number..." {...register('contact')} />
            <p>{errors.contact?.message}</p>
            <br />
            <input type="password" placeholder="Password" {...register('password')} />
            <p>{errors.password?.message}</p>
            <br />
            <div className={styles.loginlower}>
              <div> 
              <button type="submit" className={styles.createAccount}> Create Account</button>
              </div>
              <div>
              <button type="submit" className={styles.signGoogle}> <img src={google}/>Sign up with Google </button>
              </div>
              <p> Already have account?  <span className={styles.login}><NavLink to="/login">Log in</NavLink> </span></p>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
