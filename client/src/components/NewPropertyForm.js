import React, { useState, useEffect } from 'react';
import "./App3.css";

function NewPropertyForm() {
    // Initializing form data state to match the Property model schema
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        location: '',
        propertyType: '',
        features: [], // Array to hold features for the property
        images: [], // Array to hold image URLs for the property
        infrastructures: [], // Array to hold infrastructure details for the property
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Function to handle input changes for basic property details
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: name === 'price' ? Math.max(0, Number(value)).toString() : value // Ensure price is a non-negative number
        }));
    };

    // Function to handle changes to feature inputs
    const handleFeatureChange = (index, value) => {
        const newFeatures = [...formData.features];
        newFeatures[index] = { name: value }; // Update feature name
        setFormData(prevState => ({
            ...prevState,
            features: newFeatures
        }));
    };

    // Function to handle changes to image URL inputs
    const handleImageChange = (index, value) => {
        const newImages = [...formData.images];
        newImages[index] = { name: value }; // Update image URL
        setFormData(prevState => ({
            ...prevState,
            images: newImages
        }));
    };

    // Function to handle changes to infrastructure inputs
    const handleInfrastructureChange = (index, value) => {
        const newInfrastructures = [...formData.infrastructures];
        newInfrastructures[index] = { name: value }; // Update infrastructure name
        setFormData(prevState => ({
            ...prevState,
            infrastructures: newInfrastructures
        }));
    };

    // Function to add a new feature input field
    const addFeatureField = () => {
        setFormData(prevState => ({
            ...prevState,
            features: [...prevState.features, { name: '' }] // Add a new feature object
        }));
    };

    // Function to add a new image URL input field
    const addImageField = () => {
        setFormData(prevState => ({
            ...prevState,
            images: [...prevState.images, { name: '' }] // Add a new image object
        }));
    };

    // Function to add a new infrastructure input field
    const addInfrastructureField = () => {
        setFormData(prevState => ({
            ...prevState,
            infrastructures: [...prevState.infrastructures, { name: '' }] // Add a new infrastructure object
        }));
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    };

    // Using useEffect to submit data to the backend when the form is being submitted
    useEffect(() => {
        if (isSubmitting) {
            const timer = setTimeout(() => {
                fetch("http://127.0.0.1:5555/properties", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData), // Send the structured form data
                })
                .then((r) => r.json())
                .then((data) => {
                    console.log("Property submitted:", data);
                    setIsSubmitting(false);
                    // Reset form or show success message here
                })
                .catch((error) => {
                    console.error("Error submitting property:", error);
                    setIsSubmitting(false);
                    // Show error message here
                });
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [isSubmitting, formData]);

    return (
        <div className="form-container">
            <h2>Property Listing Form</h2>
            <form onSubmit={handleSubmit}>
                {/* Title, Description, Price, Location, Property Type Fields */}
                <div className="form-group">
                    <label htmlFor="title">Title <span className="required-star">*</span></label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description <span className="required-star">*</span></label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price <span className="required-star">*</span></label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        min="0"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="location">Location <span className="required-star">*</span></label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="propertyType">Property Type <span className="required-star">*</span></label>
                    <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select type</option>
                        <option value="Apartments">Apartments</option>
                        <option value="Bedsitters">Bedsitters</option>
                        <option value="Block of Flats">Block of Flats</option>
                        <option value="Bungalow">Bungalow</option>
                        <option value="House">House</option>
                        <option value="Mansion">Mansion</option>
                        <option value="Penthouse">Penthouse</option>
                        <option value="Studio Apartment">Studio Apartment</option>
                        <option value="Villa">Villa</option>
                    </select>
                </div>

                {/* Features Section */}
                <div className="form-group">
                    <label>Features <span className="required-star">*</span></label>
                    {formData.features.map((feature, index) => (
                        <div key={index} className="feature-group">
                            <input
                                type="text"
                                value={feature.name}
                                onChange={(e) => handleFeatureChange(index, e.target.value)}
                                placeholder="Feature Name"
                                required
                            />
                        </div>
                    ))}
                    <button type="button" onClick={addFeatureField} style={{ marginTop: '10px', padding: '5px' }}>
                        + Add Feature
                    </button>
                </div>

                {/* Images Section */}
                <div className="form-group">
                    <label>Add Image URLs <span className="required-star">*</span></label>
                    {formData.images.map((image, index) => (
                        <div key={index} className="image-url-group">
                            <input
                                type="url"
                                value={image.name}
                                onChange={(e) => handleImageChange(index, e.target.value)}
                                placeholder="Image URL"
                                required
                            />
                        </div>
                    ))}
                    <button type="button" onClick={addImageField} style={{ marginTop: '10px', padding: '5px' }}>
                        + Add Image URL
                    </button>
                </div>

                {/* Infrastructures Section */}
                <div className="form-group">
                    <label>Infrastructures <span className="required-star">*</span></label>
                    {formData.infrastructures.map((infra, index) => (
                        <div key={index} className="infrastructure-group">
                            <input
                                type="text"
                                value={infra.name}
                                onChange={(e) => handleInfrastructureChange(index, e.target.value)}
                                placeholder="Infrastructure Name"
                                required
                            />
                        </div>
                    ))}
                    <button type="button" onClick={addInfrastructureField} style={{ marginTop: '10px', padding: '5px' }}>
                        + Add Infrastructure
                    </button>
                </div>

                <button type="submit" className="submit-button" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Post Property'}
                </button>
            </form>
        </div>
    );
}

export default NewPropertyForm;
