import React, { useState, useEffect } from 'react';
import NewPropertyForm from './NewPropertyForm';
import Register from './Register';
import Header from './Header';  // Import Header component
import Footer from './Footer';  // Import Footer component

const AdminPage = ({ adminName }) => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [buyers, setBuyers] = useState([]);
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        if (activeTab === 'buyerList') {
            fetch('/api/buyers') 
                .then((response) => response.json())
                .then((data) => setBuyers(data))
                .catch((error) => console.error('Error fetching buyers:', error));
        } else if (activeTab === 'updateProperty' || activeTab === 'deleteProperty') {
            fetch('/api/properties') 
                .then((response) => response.json())
                .then((data) => setProperties(data))
                .catch((error) => console.error('Error fetching properties:', error));
        }
    }, [activeTab]);

    const handleUpdateProperty = (propertyId) => {
        console.log('Update property with ID:', propertyId);
    };

    const handleDeleteProperty = (propertyId) => {
        fetch(`/api/properties/${propertyId}`, {
            method: 'DELETE',
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Property deleted:', data);
            setProperties((prevProperties) => prevProperties.filter(property => property.id !== propertyId));
        })
        .catch((error) => console.error('Error deleting property:', error));
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'postProperty':
                return (
                    <div>
                        <h2>Post a Property</h2>
                        <NewPropertyForm />
                    </div>
                );
            case 'updateProperty':
                return (
                    <div>
                        <h2>Update Property</h2>
                        {properties.map((property) => (
                            <div key={property.id}>
                                <h3>{property.name}</h3>
                                <p>Location: {property.location}</p>
                                <p>Price: ${property.price}</p>
                                <p>Description: {property.description}</p>
                                <button onClick={() => handleUpdateProperty(property.id)}>Update Property</button>
                            </div>
                        ))}
                    </div>
                );
            case 'deleteProperty':
                return (
                    <div>
                        <h2>Delete Property</h2>
                        {properties.map((property) => (
                            <div key={property.id}>
                                <h3>{property.name}</h3>
                                <p>Location: {property.location}</p>
                                <p>Price: ${property.price}</p>
                                <p>Description: {property.description}</p>
                                <button onClick={() => handleDeleteProperty(property.id)}>Delete Property</button>
                            </div>
                        ))}
                    </div>
                );
            case 'addAdmin':
                return (
                    <div>
                        <h2>Add Admin</h2>
                        <Register defaultRole="add admin" /> {/* Pass default role */}
                    </div>
                );
            case 'buyerList':
                return (
                    <div>
                        <h2>Buyer List</h2>
                        <ul>
                            {buyers.map((buyer) => (
                                <li key={buyer.id}>
                                    {buyer.name}: {buyer.email}
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            default:
                return <div><h2>Welcome, {adminName}!</h2></div>;
        }
    };

    return (
        
        <div className="admin-page">
            <Header /> 
            <div className="main-content">
                <div className="sidebar">
                    <ul>
                        <li onClick={() => setActiveTab('dashboard')}>Dashboard</li>
                        <li onClick={() => setActiveTab('postProperty')}>Post a Property</li>
                        <li onClick={() => setActiveTab('updateProperty')}>Update Property</li>
                        <li onClick={() => setActiveTab('deleteProperty')}>Delete Property</li>
                        <li onClick={() => setActiveTab('addAdmin')}>Add Admin</li>
                        <li onClick={() => setActiveTab('buyerList')}>View Buyer List</li>
                    </ul>
                </div>
                <div className="dashboard">
                    {renderContent()}
                </div>
            </div>
            <Footer /> 
            
            <style jsx>{`
                .admin-page {
                    display: flex;
                    flex-direction: column;
                    height: 100vh;
                    justify-content: space-between;
                }
                .main-content {
                    display: flex;
                    flex: 1;
                }
                .sidebar {
                    width: 250px;
                    background-color: #333;
                    color: white;
                    padding: 20px;
                    height: calc(100vh - 60px); /* Adjust for header height */
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
                    display: flex;
                    flex-direction: column;
                }
                .dashboard div {
                    background-color: #f9f9f9;
                    padding: 20px;
                    border-radius: 8px;
                    margin-bottom: 20px;
                }
                header {
                    background-color: #333;
                    color: white;
                    padding: 20px;
                    text-align: center;
                }
                footer {
                    background-color: #333;
                    color: white;
                    padding: 20px;
                    text-align: center;
                }
            `}</style>
        </div>
    );
};

export default AdminPage;
