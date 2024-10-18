import React, { useState } from 'react';
import NavMenu from './NavMenu';

function Register() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    contact: '',
    role: ''
  });

  const [isAdminRegistered, setIsAdminRegistered] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.role) {
      alert('Please select a user role.');
      return;
    }
    
    if (formData.role === 'admin') {
      if (isAdminRegistered) {
        alert('An admin has already been registered.');
        return;
      } else {
        setIsAdminRegistered(true);
      }
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          first_name: formData.firstname,
          last_name: formData.lastname,
          email: formData.email,
          password: formData.password,
          contact: formData.contact,
          user_role: formData.role
        })
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        alert(`Registration Successful!\nName: ${formData.firstname} ${formData.lastname}\nRole: ${formData.role}`);
        
        // Reset the form
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          password: '',
          contact: '',
          role: ''
        });
      } else {
        // Display error message if registration fails
        setError(data.error || 'Registration failed. Please try again.');
      }
    } catch (error) {
      setLoading(false);
      setError('Something went wrong. Please try again.');
      console.error('Error registering:', error);
    }
  };

  return (
    
    <div className="form-container">
      <NavMenu />
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          value={formData.firstname}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={formData.lastname}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="contact"
          placeholder="Contact"
          value={formData.contact}
          onChange={handleChange}
          required
        />
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="">Select User Role</option>
          <option value="admin" disabled={isAdminRegistered}>Admin</option>
          <option value="buyer">Buyer</option>
        </select>
        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>

      {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
    </div>
  );
}

export default Register;
