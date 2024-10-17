import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Property = () => {
  const [property, setProperty] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  
  let { id } = useParams()  // Get the id from the URL params

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        setIsLoading(true)
        const res = await fetch(`/properties/${id}`)  // Fetch property by id
        if (!res.ok) {
          console.log('Error fetching Property')
        }
        const data = await res.json()
        setProperty(data)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        setIsLoading(false)
      }
    }
    fetchProperty()
  }, [id])

  return (
    <>
      <header style={{ padding: '20px', backgroundColor: '#f8f8f8' }}>
        <h1>Property Details</h1>
      </header>
      <div style={{ padding: '20px', minHeight: 'calc(100vh - 56px)' }}>
        {isLoading ? (
          <div style={{ textAlign: 'center', color: 'gray' }}>Loading...</div>
        ) : property ? (
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ flex: '1', marginRight: '20px' }}>
              {property.images && property.images.length > 0 ? (
                <div style={{ width: '100%', height: '300px', backgroundColor: '#ddd' }}>
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              ) : (
                <div style={{ width: '100%', height: '300px', backgroundColor: '#ddd', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <span style={{ color: 'gray' }}>No Image Available</span>
                </div>
              )}
            </div>
            <div style={{ flex: '1' }}>
              <h2>{property.title}</h2>
              <p>{property.description}</p>
              <div>
                <strong>Price: </strong>
                {property.price}
              </div>
              <div>
                <strong>Location: </strong>
                {property.location}
              </div>
              
              <div>
                <strong>Features: </strong>
                <ul>
                  <li>Bedrooms: {property.features.bedrooms}</li>
                  <li>Washrooms: {property.features.washrooms}</li>
                </ul>
              </div>
              {property?.additional_features?.length > 0 && (
                <div>
                  <strong>Additional Features: </strong>
                  <ul>
                    {property.additional_features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center', color: 'gray' }}>Property not found</div>
        )}
      </div>
    </>
  )
}

export default Property