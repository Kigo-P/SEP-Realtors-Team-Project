import React, { useState, useEffect } from 'react'
import "./App3.css"

function NewPropertyForm() {
    // setting the use state of the initial from to be an empty string
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        images: [], 
        price: '',
        location: '',
        infrastructure: '',
        bedrooms: '0',
        washrooms: '0',
        powderRooms: 'No',
        propertyType: '',
        additionalFeatures: [], 
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);

    //  creating a function called handle change that detects the changes on the input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: name === 'price' ? Math.max(0, Number(value)).toString() : value
        }));
    };

    //  creating a function called handleImageChange that detects the changes on the input fields for the image
    const handleImageChange = (index, value) => {
        const newImages = [...formData.images];
        newImages[index] = value;
        setFormData(prevState => ({
            ...prevState,
            images: newImages
        }));
    };

    //  creating a function called handleFeatureChange that detects the changes on the input fields
    const handleFeatureChange = (index, value) => {
        const newFeatures = [...formData.additionalFeatures];
        newFeatures[index] = value;
        setFormData(prevState => ({
            ...prevState,
            additionalFeatures: newFeatures
        }));
    };

    const addImageField = () => {
        setFormData(prevState => ({
            ...prevState,
            images: [...prevState.images, '']
        }));
    };

    const addFeatureField = () => {
        setFormData(prevState => ({
            ...prevState,
            additionalFeatures: [...prevState.additionalFeatures, '']
        }));
    };
    //  creating a function called handleSubmit that is responsible for submitting the form
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    };

    // using use effect to post data to the database
    useEffect(() => {
        if (isSubmitting) {
            const timer = setTimeout(() => {
                fetch("/properties", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
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
                    <label>Add Image URLs <span className="required-star">*</span></label>
                    {formData.images.map((image, index) => (
                        <div key={index} className="image-url-group">
                            <input
                                type="url"
                                value={image}
                                onChange={(e) => handleImageChange(index, e.target.value)}
                                required
                            />
                        </div>
                    ))}
                    <button type="button" onClick={addImageField} style={{ marginTop: '10px' }}>
                        Add Another Image URL
                    </button>
                </div>

                <div className="form-row">
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
                </div>

                <div className="form-group">
                    <label htmlFor="infrastructure">Infrastructure <span className="required-star">*</span></label>
                    <input
                        type="text"
                        id="infrastructure"
                        name="infrastructure"
                        value={formData.infrastructure}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="bedrooms">Bedrooms <span className="required-star">*</span></label>
                        <select
                            id="bedrooms"
                            name="bedrooms"
                            value={formData.bedrooms}
                            onChange={handleChange}
                            required
                        >
                            {[...Array(7)].map((_, i) => (
                                <option key={i} value={i}>{i}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="washrooms">Washrooms <span className="required-star">*</span></label>
                        <select
                            id="washrooms"
                            name="washrooms"
                            value={formData.washrooms}
                            onChange={handleChange}
                            required
                        >
                            {[...Array(7)].map((_, i) => (
                                <option key={i} value={i}>{i}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="powderRooms">Powder Rooms <span className="required-star">*</span></label>
                        <select
                            id="powderRooms"
                            name="powderRooms"
                            value={formData.powderRooms}
                            onChange={handleChange}
                            required
                        >
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </div>
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

                <div className="form-group">
                    <label>Additional Features</label>
                    {formData.additionalFeatures.map((feature, index) => (
                        <div key={index} className="feature-group">
                            <input
                                type="text"
                                value={feature}
                                onChange={(e) => handleFeatureChange(index, e.target.value)}
                            />
                        </div>
                    ))}
                    <button type="button" onClick={addFeatureField} style={{ marginTop: '10px' }}>
                        Add Another Feature
                    </button>
                </div>

                <button type="submit" className="submit-button" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Post Property'}
                </button>
            </form>
        </div>
    );
}

export default NewPropertyForm
