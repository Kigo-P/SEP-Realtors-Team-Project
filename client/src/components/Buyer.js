import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'; // Import Header
import Footer from './Footer'; // Import Footer

const BuyerPage = ({ buyerName }) => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [boughtProperties, setBoughtProperties] = useState([]);
    const [availableProperties, setAvailableProperties] = useState([]);

    useEffect(() => {
        if (activeTab === 'boughtProperties') {
            fetch('/api/bought-properties')
                .then((response) => response.json())
                .then((data) => setBoughtProperties(data))
                .catch((error) => console.error('Error fetching bought properties:', error));
        }
    }, [activeTab]);

    useEffect(() => {
        if (activeTab === 'properties') {
            fetch('/api/properties')
                .then((response) => response.json())
                .then((data) => setAvailableProperties(data))
                .catch((error) => console.error('Error fetching available properties:', error));
        }
    }, [activeTab]);

    const handleBuyProperty = (propertyId) => {
        fetch(`/api/buy-property/${propertyId}`, {
            method: 'POST',
        })
            .then(response => response.json())
            .then(data => {
                console.log('Property bought successfully:', data);
            })
            .catch(error => console.error('Error buying property:', error));
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'boughtProperties':
                return (
                    <div>
                        <h2>List of Bought Properties</h2>
                        <ul>
                            {boughtProperties.length > 0 ? (
                                boughtProperties.map((property) => (
                                    <li key={property.id}>
                                        {property.name} - {property.location} (${property.price})
                                    </li>
                                ))
                            ) : (
                                <p>No properties bought yet.</p>
                            )}
                        </ul>
                    </div>
                );
            case 'properties':
                return (
                    <div>
                        <h2>Available Properties</h2>
                        <ul>
                            {availableProperties.length > 0 ? (
                                availableProperties.map((property) => (
                                    <li key={property.id}>
                                        <Link to={`/property/${property.id}`}>
                                            {property.name} - {property.location} (${property.price})
                                        </Link>
                                        <button onClick={() => handleBuyProperty(property.id)}>
                                            Buy
                                        </button>
                                    </li>
                                ))
                            ) : (
                                <p>No available properties at the moment.</p>
                            )}
                        </ul>
                    </div>
                );
            default:
                return <div>Welcome, {buyerName}!</div>;
        }
    };

    return (
        <div className="buyer-page">
            <Header /> 
            <div className="content">
                <div className="sidebar">
                    <ul>
                        <li onClick={() => setActiveTab('dashboard')}>Dashboard</li>
                        <li onClick={() => setActiveTab('boughtProperties')}>List of Bought Properties</li>
                        <li onClick={() => setActiveTab('properties')}>Properties</li>
                    </ul>
                </div>
                <div className="dashboard">
                    {renderContent()}
                </div>
            </div>
            <Footer /> 
            <style jsx>{`
                .buyer-page {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                }
                .content {
                    display: flex;
                    flex: 1;
                }
                .sidebar {
                    width: 250px;
                    background-color: #333;
                    color: white;
                    padding: 20px;
                    height: 100vh;
                }
                .sidebar ul {
                    list-style: none;
                    padding: 0;
                }
                .sidebar li {
                    margin: 20px 0;
                    cursor: pointer;
                }
                .sidebar li:hover {
                    background-color: #444;
                    padding: 10px;
                }
                .dashboard {
                    flex: 1;
                    padding: 20px;
                }
                .dashboard div {
                    background-color: #f9f9f9;
                    padding: 20px;
                    border-radius: 8px;
                }
                header {
                    background-color: #007BFF;
                    color: white;
                    padding: 10px;
                    text-align: center;
                }
                footer {
                    background-color: #007BFF;
                    color: white;
                    padding: 10px;
                    text-align: center;
                    position: relative;
                    bottom: 0;
                    width: 100%;
                }
            `}</style>
        </div>
    );
};

export default BuyerPage;
