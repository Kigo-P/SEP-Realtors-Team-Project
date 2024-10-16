import React, { useState } from 'react';

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
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
        alert('Admin registered successfully.');
      }
    }
    
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
  };

  return (
    <div className="form-container">
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
