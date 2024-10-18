import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      style={{
        position: 'relative',
        padding: '40px 0',
        backgroundColor: '#0A1A2F',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 16px',
        }}
      >
        <div style={{ textAlign: 'left', color: '#fff' }}>
          <h3>Contact Us</h3>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ marginRight: '8px' }}>📍</span>
            <span>The Nest Business Park</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ marginRight: '8px' }}>📞</span>
            <span>0745712570</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '8px' }}>📧</span>
            <span>sep-realtors.co.ke</span>
          </div>
        </div>

        <div style={{ textAlign: 'left', color: '#fff' }}>
          <h3>Related Links</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
                Find your home
              </Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
                Search
              </Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
                All Properties
              </Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
                Recommended for you
              </Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
                About Us
              </Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div
          style={{
             backgroundColor: '#f5f5f5',
            color: '#333',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center',
            alignSelf: 'center',
          }}
        >
          <h4 style={{ marginBottom: '10px' }}>Contact Us:</h4>
          <p style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>0740 712 579</p>
        </div>
      </div>

      <div
        style={{
          marginTop: '40px',
          textAlign: 'center',
          fontSize: '14px',
          color: '#fff',
        }}
      >
        Achieving your home ownership dream is easier when you work with SEP REALTORS.
      </div>

      <div
        style={{
          marginTop: '40px',
          textAlign: 'center',
          fontSize: '12px',
          backgroundColor: '#003366',
          width: '100%',
          padding: '10px 0',
        }}
      >
        <p style={{ margin: 0 }}>© SEP REALTORS - All rights reserved</p>
        <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
          <a href="/" style={{ color: '#fff', marginRight: '15px', textDecoration: 'none' }}>
            <i className="fab fa-facebook-f" />
          </a>
          <a href="/" style={{ color: '#fff', marginRight: '15px', textDecoration: 'none' }}>
            <i className="fab fa-twitter" />
          </a>
          <a href="/" style={{ color: '#fff', marginRight: '15px', textDecoration: 'none' }}>
            <i className="fab fa-whatsapp" />
          </a>
          <a href="/" style={{ color: '#fff', marginRight: '15px', textDecoration: 'none' }}>
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="/" style={{ color: '#fff', textDecoration: 'none' }}>
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
