import React, { useState } from 'react';
import axios from 'axios';

function Registration() {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const sendOtp = async () => {
    try {
      await axios.post('/api/send-otp', { mobile });
      setIsOtpSent(true);
    } catch (error) {
      console.error('Error sending OTP', error);
    }
  };

  const verifyOtp = async () => {
    try {
      await axios.post('/api/verify-otp', { mobile, otp });
      // Redirect to dashboard or show success message
    } catch (error) {
      console.error('Error verifying OTP', error);
    }
  };

  return (
    <div className="registration">
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      {isOtpSent && (
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
      )}
      <button onClick={isOtpSent ? verifyOtp : sendOtp}>
        {isOtpSent ? 'Verify OTP' : 'Send OTP'}
      </button>
    </div>
  );
}

export default Registration;