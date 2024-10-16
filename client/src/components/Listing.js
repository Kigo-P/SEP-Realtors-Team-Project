import React, { useState, useEffect } from 'react';
import SearchAndFilter from './SearchAndFilter';

const Listing = ({ comparison = false, property = '' }) => {
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [filters, setFilters] = useState({
        bedrooms: '',
        location: '',
        minPrice: '',
        maxPrice: '',
        propertyType: '',
    });
    const [searchTerm, setSearchTerm] = useState(''); // New state for search term

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
                setFilteredProperties(data); // Initialize filtered properties
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        // Apply filters
        const filtered = properties.filter(property => {
            const matchesBedrooms = filters.bedrooms ? property.features.bedrooms === parseInt(filters.bedrooms) : true;
            const matchesLocation = filters.location ? property.location.toLowerCase().includes(filters.location.toLowerCase()) : true;
            const matchesMinPrice = filters.minPrice ? property.price >= parseFloat(filters.minPrice) : true;
            const matchesMaxPrice = filters.maxPrice ? property.price <= parseFloat(filters.maxPrice) : true;
            const matchesPropertyType = filters.propertyType ? property.type === filters.propertyType : true;
            const matchesSearchTerm = property.title.toLowerCase().includes(searchTerm.toLowerCase()); // Search term match

            return matchesBedrooms && matchesLocation && matchesMinPrice && matchesMaxPrice && matchesPropertyType && matchesSearchTerm;
        });

        setFilteredProperties(filtered);
    }, [filters, properties, searchTerm]); // Add searchTerm as a dependency

    // Handler to update filters
    const updateFilters = (newFilters) => {
        setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
    };

    // Handler for search input
    const handleSearchChange = (term) => {
        setSearchTerm(term);
    };

    return (
        <div className="listing-container">
            <SearchAndFilter filters={filters} updateFilters={updateFilters} onSearchChange={handleSearchChange} /> {/* Pass search handler */}
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
                                    <h2>{item.title}</h2>
                                    <p>{item.price}</p>
                                    <p>{item.location}</p>
                                    <p>{item.features.bedrooms} bedrooms</p>
                                    <p>{item.description}</p>
                                    <a href={comparison ? `/compare?p=${item.slug}&r=${property}` : `/property/${item.slug}?id=${item.id}`}>View Details</a>
                                </div>
                            ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Listing;

