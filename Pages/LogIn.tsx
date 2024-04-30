import React from 'react';
import styles from '../styles/contact.module.css';
import contactImage from '../svgs/contact.svg';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Swal from 'sweetalert2';

interface FormData {
  contact: string;
  password: string;
}

const LogIn: React.FC = () => {

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
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    hanldeLogin(); // Directly call hanldeLogin since this will only execute if there are no errors
    reset(); // Reset form after successful login
  };

  const hanldeLogin = () => {
    Swal.fire({
      title: "Your have been logged in !",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
  }

  return (
    <div className={styles.main}>
      <div>
        <img src={contactImage} alt="image" className={styles.phoneImage} />
      </div>
      <div className={styles.form}>
        <div className={styles.loginform}>
          <h1>Log in to Exclusive</h1>
          <p>Enter your details below</p>
          <br />
          <form onSubmit={handleSubmit(onSubmit)} className={styles.customizeForm}>
            <input type="text" placeholder="Email or Phone Number..." {...register('contact')} />
            <p>{errors.contact?.message}</p>
            <br />
            <input type="password" placeholder="Password" {...register('password')} />
            <p>{errors.password?.message}</p>
            <br />
            <div className={styles.lowerForm}>
              <button type="submit"> Log in </button>
              <div> <p> Forget Password?</p> </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
