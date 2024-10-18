import React from 'react';
import NavMenu from './NavMenu';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import ImageSrc from './Images/pexels-robertkso-20296315.jpg'; 

function Home() {
  return (
    <>
      <div style={styles.container}>
        <NavMenu />
        <main style={styles.mainContent}>
          <div style={styles.imageContainer}>
            <img
              src={ImageSrc}
              alt="Modern cityscape with tall buildings"
              style={styles.image}
            />

            <div style={styles.overlay}>
              <h1 style={styles.headline}>Find Your Dream Home</h1>
              <p style={styles.subheadline}>
                "Home is where love resides, memories are created, friends always belong, and laughter never ends."
              </p>
              <div style={styles.navRight}>
                
                    <button style={styles.buttonOutline}>
                        <Link to="/login" className="text-white text-lg hover:underline">Login</Link>
                    </button>

                    <button style={styles.buttonOutline}>
                        <Link to="/register" className="text-white text-lg hover:underline">Register</Link>
                    </button>

            
            </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  mainContent: {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  imageContainer: {
    width: '100%',
    height: '800px',
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // dark overlay
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    textAlign: 'center',
  },
  headline: {
    fontSize: '36px',
    fontWeight: 'bold',
    margin: 0,
  },
  subheadline: {
    fontSize: '18px',
    marginTop: '10px',
    maxWidth: '600px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    color: '#fff',
    border: '1px solid #fff',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    ':hover': {
        backgroundColor: '##007bff',
    },
  },

  navRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
};

export default Home;
