import React, { useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await axios.post('/api/admin/login', { adminId, password });
      // Redirect to admin dashboard or show success message
    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  return (
    <div className="admin-login">
      <h1>Admin Login</h1>
      <input
        type="text"
        placeholder="Admin ID"
        value={adminId}
        onChange={(e) => setAdminId(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default AdminDashboard;