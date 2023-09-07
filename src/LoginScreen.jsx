import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from './firebase'; 
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!email || !pass) {
      setErrorMsg('Fill in all fields');
      return;
    }
    setErrorMsg('');

    setSubmitButtonDisabled(true);
    
    createUserWithEmailAndPassword(auth, email, pass)
      .then(() => {
        setSubmitButtonDisabled(false);
        navigate('/Timer');
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className='bg-[url(./assets/tomato1.png)] h-4/6 w-4/6 flex items-center mt-4 m-auto bg-center bg-cover bg-no-repeat max-h-96 max-w-md overflow-visible'>
      <div className='h-56 w-60 flex items-center justify-center flex-col m-auto mb-12 rounded-md'>
        <h3 className='text-2xl font-bold'>Email</h3>
        <input
          type='email'
          className='bg-red-500 m-2 h-8 w-44 text-lg rounded-md text-white border border-solid hover:bg-white hover:text-red-500'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <h3 className='text-2xl font-bold'>Password</h3>
        <input
          type='password'
          className='bg-red-500 m-2 h-8 w-44 text-lg rounded-md text-white border border-solid hover:bg-white hover:text-red-500'
          value={pass}
          onChange={(event) => setPass(event.target.value)}
        />
        <button
          disabled={submitButtonDisabled}
          onClick={() => handleSubmission()}
          className='bg-red-600 w-32 rounded-md hover:bg-white hover:text-red-500 text-lg font-bold'
        >
          Log In
        </button>
        {errorMsg && <p className='text-red-500'>{errorMsg}</p>}
      </div>
    </div>
  );
};


























