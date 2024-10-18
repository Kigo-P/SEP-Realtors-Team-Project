import React from 'react';
import NavMenu from './NavMenu';
import Footer from './Footer';
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
};

export default Home;
