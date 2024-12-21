import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sign_Up.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError('');
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    setPhoneError('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    // Name validation
    if (!name) {
      setNameError('Name is required');
      isValid = false;
    }

    // Phone validation
    if (!phone) {
      setPhoneError('Phone number is required');
      isValid = false;
    } else if (!/^\d{10}$/.test(phone)) {
      setPhoneError('Phone number must be 10 digits');
      isValid = false;
    }

    // Email validation
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email is invalid');
      isValid = false;
    }

    // Password validation
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    }

    if (isValid) {
      // Perform sign-up logic here (e.g., send data to server)
      console.log('Form submitted:', { name, phone, email, password });

      // Reset form fields after successful submission (optional)
      setName('');
      setPhone('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="container" style={{ marginTop: '5%' }}>
      <div className="signup-grid">
        <div className="signup-text">
          <h1>Sign Up</h1>
        </div>
        <div className="signup-text1" style={{ textAlign: 'left' }}>
          Already a member?{' '}
          <span>
            <Link to="/login" style={{ color: '#2190FF' }}>
              Login
            </Link>
          </span>
        </div>
        <div className="signup-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className={`form-control ${nameError ? 'is-invalid' : ''}`}
                placeholder="Enter your name"
                value={name}
                onChange={handleNameChange}
              />
              {nameError && <div className="invalid-feedback">{nameError}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                className={`form-control ${phoneError ? 'is-invalid' : ''}`}
                placeholder="Enter your phone number"
                value={phone}
                onChange={handlePhoneChange}
              />
              {phoneError && <div className="invalid-feedback">{phoneError}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className={`form-control ${emailError ? 'is-invalid' : ''}`}
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
              {emailError && <div className="invalid-feedback">{emailError}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                required
                className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />
              {passwordError && (
                <div className="invalid-feedback">{passwordError}</div>
              )}
            </div>
            <div className="btn-group">
              <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">
                Submit
              </button>
              <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;