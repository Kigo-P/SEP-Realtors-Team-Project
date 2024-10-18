import React, { useState, useEffect } from 'react';
import SearchAndFilter from './SearchAndFilter';

const Listing = ({ comparison = false, property = '' }) => {
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [filters, setFilters] = useState({
        location: '',
        minPrice: '',
        maxPrice: '',
        propertyType: '',
    });
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setIsLoading(true);
        fetch("http://127.0.0.1:5555/properties")
            .then(r => {
                if (r.ok) {
                    return r.json();
                }
                throw r;
            })
            .then(data => {
                setProperties(data);
                setFilteredProperties(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        const filtered = properties.filter(property => {
            const matchesLocation = filters.location ? property.location.toLowerCase().includes(filters.location.toLowerCase()) : true;
            const matchesMinPrice = filters.minPrice ? property.price >= parseFloat(filters.minPrice) : true;
            const matchesMaxPrice = filters.maxPrice ? property.price <= parseFloat(filters.maxPrice) : true;
            const matchesPropertyType = filters.propertyType ? property.type === filters.propertyType : true;
            const matchesSearchTerm = property.title.toLowerCase().includes(searchTerm.toLowerCase());

            return matchesLocation && matchesMinPrice && matchesMaxPrice && matchesPropertyType && matchesSearchTerm;
        });

        setFilteredProperties(filtered);
    }, [filters, properties, searchTerm]);

    const updateFilters = (newFilters) => {
        setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
    };

    const handleSearchChange = (term) => {
        setSearchTerm(term);
    };

    return (
        <div className="listing-container">
            <SearchAndFilter filters={filters} updateFilters={updateFilters} onSearchChange={handleSearchChange} />
            <div className="property-list">
                {!isLoading && properties.length === 0 ? (
                    <div className="no-properties">No Property Listing Yet!</div>
                ) : !isLoading && filteredProperties.length === 0 ? (
                    <div className="no-properties">No Property Matching the Filter Yet!</div>
                ) : (
                    <div className="property-grid">
                        {isLoading
                            ? Array.from({ length: 8 }).map((_, index) => (
                                <div key={index} className="property-card loading">Loading...</div>
                            ))
                            : filteredProperties.map((item, i) => (
                                <div key={i} className="property-card">
                                    <img
                                        src={`${item.images[0]}?id=${Math.floor(Math.random() * 11)}` || `https://picsum.photos/200/300?id=${item.id}`}
                                        alt=""
                                    />
                                    <div className="property-info">
                                        <h2>{item.title}</h2>
                                        <p className="price">{item.price}</p>
                                        <div className="features">
                                            <span>{item.location}</span>
                                            <span>{item.type}</span>
                                        </div>
                                        <p className="description">{item.description}</p>
                                        <a href={comparison ? `/compare?p=${item.slug}&r=${property}` : `/property/${item.slug}?id=${item.id}`} className="view-details">View Details</a>
                                    </div>
                                </div>
                            ))}
                    </div>
                )}
            </div>

            <style jsx>{`
                .listing-container {
                    font-family: Arial, sans-serif;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 20px;
                }

                .property-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 20px;
                }

                .property-card {
                    background-color: #fff;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                .property-card img {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                }

                .property-info {
                    padding: 15px;
                }

                .property-info h2 {
                    margin: 0 0 10px;
                    font-size: 18px;
                    color: #333;
                }

                .price {
                    font-size: 20px;
                    font-weight: bold;
                    color: #4CAF50;
                    margin-bottom: 10px;
                }

                .features {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin-bottom: 10px;
                    font-size: 14px;
                    color: #666;
                }

                .description {
                    font-size: 14px;
                    color: #666;
                    margin-bottom: 15px;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .view-details {
                    display: inline-block;
                    padding: 8px 16px;
                    background-color: #4CAF50;
                    color: white;
                    text-decoration: none;
                    border-radius: 4px;
                    font-size: 14px;
                    transition: background-color 0.3s;
                }

                .view-details:hover {
                    background-color: #45a049;
                }

                .no-properties {
                    text-align: center;
                    color: #666;
                    font-size: 18px;
                    margin-top: 50px;
                }

                .loading {
                    height: 300px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #f0f0f0;
                    color: #666;
                }

                @media (max-width: 768px) {
                    .property-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default Listing;
