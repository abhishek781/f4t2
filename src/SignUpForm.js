// SignUpForm.js
import React, { useState } from 'react';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(newEmail));
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsPasswordValid(newPassword.length >= 8);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setIsConfirmPasswordValid(newConfirmPassword === password);
  };

  const handleSubmit = () => {
    if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      alert('Form submitted successfully');
    } else {
      alert('Can\'t submit the form. Please check your inputs.');
    }
  };

  return (
    <div>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        style={{ borderColor: isEmailValid ? 'green' : 'red' }}
      />
      {!isEmailValid && <p>Email is not valid</p>}

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        style={{ borderColor: isPasswordValid ? 'green' : 'red' }}
      />
      {!isPasswordValid && <p>Password must be at least 8 characters long</p>}

      <label>Confirm Password:</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        style={{ borderColor: isConfirmPasswordValid ? 'green' : 'red' }}
      />
      {!isConfirmPasswordValid && <p>Passwords do not match</p>}

      <button onClick={handleSubmit}>Sign up</button>
    </div>
  );
};

export default SignUpForm;
