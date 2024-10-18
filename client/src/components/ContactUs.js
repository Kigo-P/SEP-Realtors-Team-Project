import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

function ContactUs() {
  const [formData, setFormData] = useState({
    date: '',
    name: '',
    email: '',
    phone: '',
    hearAboutUs: '',
    apartmentType: '',
    message: '',
    agreeToComms: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Header />
      <div style={{ padding: '40px 0', background: 'linear-gradient(to right, #1e3c72, #ff5f6d)', color: '#fff', textAlign: 'center' }}>
        <h1 style={{ margin: '0', fontSize: '3rem' }}>Contact Us</h1>
      </div>
      <div style={{ maxWidth: '800px', margin: '40px auto', padding: '30px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '20px', color: '#ff5f6d' }}>Reach Out To Us</h2>
        <p style={{ textAlign: 'center', marginBottom: '30px', color: '#666' }}>All fields marked with * are mandatory</p>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="date" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333' }}>Date*</label>
            <input
              type="date"
              id="date"
              name="date"
              required
              value={formData.date}
              onChange={handleInputChange}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333' }}>Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
            />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
            <div>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333' }}>Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
              />
            </div>
            <div>
              <label htmlFor="phone" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333' }}>Phone number*</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
              />
            </div>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="hearAboutUs" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333' }}>How Did You Hear About Us*</label>
            <select
              name="hearAboutUs"
              value={formData.hearAboutUs}
              onChange={handleInputChange}
              required
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
            >
              <option value="">Please Select</option>
              <option value="search">Search Engine</option>
              <option value="social">Social Media</option>
              <option value="friend">Friend Referral</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="apartmentType" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333' }}>What Type Of Property Are You Looking For*</label>
            <select
              name="apartmentType"
              value={formData.apartmentType}
              onChange={handleInputChange}
              required
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
            >
              <option value="">Please Select</option>
              <option value="studio">Studio</option>
              <option value="1bed">1 Bedroom</option>
              <option value="2bed">2 Bedrooms</option>
              <option value="3bed">3+ Bedrooms</option>
            </select>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#333' }}>Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', minHeight: '100px', resize: 'vertical' }}
            />
          </div>
          <div style={{ textAlign: 'center' }}>
            <button type="submit" style={{ backgroundColor: '#e94b4b', color: '#fff', padding: '12px 24px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', width: '100%' }}>
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;

