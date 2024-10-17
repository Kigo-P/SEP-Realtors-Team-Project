// import React from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import './App1.css';
// function AboutUs() {
//     return (
//     <>
//     <Header />
//         <div className="container mx-auto px-4 py-8">
//             <h1 className="text-4xl font-bold text-center mb-8">About SEP REALTORS</h1>
            
//             <div className="tabs">
            
                
//                 <div className="tab-content" data-value="history">
//                     <div className="card">
//                         <div className="card-header">
//                             <h2 className="card-title">Our History</h2>
//                         </div>
//                         <div className="card-content">
//                             <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
//                                 <img 
//                                     src="https://media.istockphoto.com/id/1175964604/photo/real-estate-houses-gold-logo-design-in-black-brick-wall-3d-rendering-illustration.jpg?b=1&s=612x612&w=0&k=20&c=jS9rGsfbwcOu6poJp3cIrW_OTo594-qNIkUSHyV2wFc=" 
//                                     alt="Founding of SEP REALTORS" 
//                                     className="rounded-lg mb-4 md:mb-0"
//                                     style={{ width: '300px', height: '200px' }}
//                                 />
//                                 <div>
//                                     <p className="text-muted">
//                                         SEP REALTORS was founded in 1985 by Sarah E. Peterson, a visionary in the real estate industry. 
//                                         What started as a small, family-owned business in downtown has grown into one of the most 
//                                         respected real estate firms in the region.
//                                     </p>
//                                 </div>
//                             </div>
//                             <div className="mt-4 space-y-4">
//                                 <span className="badge">Est. 1985</span>
//                                 <p className="text-muted">
//                                     Over the past four decades, we've helped thousands of families find their dream homes and assisted 
//                                     countless investors in making smart property decisions.
//                                 </p>
//                                 <ul className="list-disc list-inside space-y-2 text-muted">
//                                     <li>1995: Opening of our first branch office</li>
//                                     <li>2005: Launch of our commercial real estate division</li>
//                                     <li>2015: Expansion into property management services</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
                
//                 <div className="tab-content" data-value="mission">
//                     <div className="card">
//                         <div className="card-header">
//                             <h2 className="card-title">Our Mission</h2>
//                         </div>
//                         <div className="card-content">
//                             <img 
//                                 src="https://images.pexels.com/photos/4427431/pexels-photo-4427431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
//                                 alt="Team of SEP REALTORS professionals" 
//                                 className="rounded-lg mb-4"
//                                 style={{ width: '400px', height: '250px' }}
//                             />
//                             <p className="text-muted">
//                                 At SEP REALTORS, our mission is to guide our clients through the complex world of real estate 
//                                 with expertise, integrity, and personalized service. We are committed to:
//                             </p>
//                             <ul className="list-disc list-inside mt-4 space-y-2 text-muted">
//                                 <li>Providing unparalleled customer service and support throughout the entire real estate process</li>
//                                 <li>Leveraging cutting-edge technology and market insights to give our clients a competitive edge</li>
//                                 <li>Upholding the highest standards of professionalism and ethical conduct in all our dealings</li>
//                                 <li>Contributing positively to the communities we serve through active involvement and giving back</li>
//                                 <li>Continuously educating ourselves and our clients to make informed real estate decisions</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
                
//                 <div className="tab-content" data-value="vision">
//                     <div className="card">
//                         <div className="card-header">
//                             <h2 className="card-title">Our Vision</h2>
//                         </div>
//                         <div className="card-content">
//                             <div className="flex flex-col md:flex-row items-center gap-4">
//                                 <div className="flex-1">
//                                     <p className="text-muted">
//                                         At SEP REALTORS, we envision a future where every individual and family has access to their 
//                                         ideal living space. We strive to be at the forefront of innovation in real estate, leveraging 
//                                         technology and human expertise to create seamless, enjoyable property experiences.
//                                     </p>
//                                     <p className="mt-4 text-muted">
//                                         Our vision extends beyond just buying and selling properties. We aim to:
//                                     </p>
//                                     <ul className="list-disc list-inside mt-2 space-y-2 text-muted">
//                                         <li>Build sustainable communities</li>
//                                         <li>Foster long-term relationships with our clients</li>
//                                         <li>Set new standards for excellence in the real estate industry</li>
//                                     </ul>
//                                 </div>
//                                 <div className="flex-shrink-0">
//                                     <img 
//                                         src="https://media.istockphoto.com/id/511061090/photo/business-office-building-in-london-england.jpg?s=2048x2048&w=is&k=20&c=tdKe-wvhnPGrt8G632TO-1eiU0u75bTBcAfLuOBaG9A=" 
//                                         alt="Modern cityscape" 
//                                         className="rounded-lg"
//                                         style={{ width: '300px', height: '300px' }}
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
                
//                 <div className="tab-content" data-value="team">
//                     <div className="card">
//                         <div className="card-header">
//                             <h2 className="card-title">Our Team</h2>
//                         </div>
//                         <div className="card-content">
//                             <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//                                 <div className="flex flex-col items-center">
//                                     <div className="avatar">
//                                         <img src="https://images.pexels.com/photos/10417389/pexels-photo-10417389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Peter" className="avatar-image" style={{ width: '300px', height: '200px' }}/>
//                                         <span className="avatar-fallback"></span>
//                                     </div>
//                                     <h3 className="font-semibold mt-2">Peter</h3>
//                                     <p className="text-sm text-muted">Founder, CEO</p>
//                                 </div>
//                                 <div className="flex flex-col items-center">
//                                     <div className="avatar">
//                                         <img src="https://images.pexels.com/photos/15522690/pexels-photo-15522690/free-photo-of-elegant-man-in-a-suit-standing-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="James" className="avatar-image" style={{ width: '300px', height: '200px' }}/>
//                                         <span className="avatar-fallback"></span>
                                        
//                                     </div>
//                                     <h3 className="font-semibold mt-2">James</h3>
//                                     <p className="text-sm text-muted">Co-founder, COO</p>
//                                 </div>
//                                 <div className="flex flex-col items-center">
//                                     <div className="avatar">
//                                         <img 
//                                             src="https://images.pexels.com/photos/4427620/pexels-photo-4427620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
//                                             alt="Emmanuel" 
//                                             className="avatar-image w-0 h-0 object-cover rounded-full" 
//                                             style={{ width: '300px', height: '200px' }}
//                                         />
//                                         <span className="avatar-fallback"></span>
//                                     </div>
//                                     <h3 className="font-semibold mt-2">Emmanuel</h3>
//                                     <p className="text-sm text-muted">Chief Marketing Officer</p>
//                                 </div>

//                                 <div className="flex flex-col items-center">
//                                     <img 
//                                         src="https://images.pexels.com/photos/4427431/pexels-photo-4427431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
//                                         alt="The A Team" 
//                                         className="rounded-lg mb-2"
//                                         style={{ width: '300px', height: '200px' }}
//                                     />
//                                     <h3 className="font-semibold">The A Team</h3>
//                                     <p className="text-sm text-muted text-center">Agents, Secretaries, Customer Services, and many more personnel</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <Footer />
//     </>
//     );
// }

// export default AboutUs;
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App1.css';

function AboutUs() {
    return (
        <>
            <Header />
            <div className="container mx-auto px-4 py-8" style={{ maxWidth: '1200px' }}>
                <h1 className="text-4xl font-bold text-center mb-8" style={{ fontSize: '3rem', fontWeight: '700', textAlign: 'center', marginBottom: '2rem' }}>About SEP REALTORS</h1>

                <div className="tabs">
                    
                    {/* History Section */}
                    <div className="tab-content" data-value="history">
                        <div className="card" style={{ marginBottom: '2rem', border: '1px solid #ddd', padding: '1.5rem', borderRadius: '10px' }}>
                            <div className="card-header">
                                <h2 className="card-title" style={{ fontSize: '2rem', fontWeight: '600' }}>Our History</h2>
                            </div>
                            <div className="card-content">
                                <div className="flex flex-col md:flex-row items-center gap-4 mb-4" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
                                    <img 
                                        src="https://media.istockphoto.com/id/1175964604/photo/real-estate-houses-gold-logo-design-in-black-brick-wall-3d-rendering-illustration.jpg?b=1&s=612x612&w=0&k=20&c=jS9rGsfbwcOu6poJp3cIrW_OTo594-qNIkUSHyV2wFc=" 
                                        alt="Founding of SEP REALTORS" 
                                        className="rounded-lg mb-4 md:mb-0"
                                        style={{ width: '300px', height: '200px', borderRadius: '10px', objectFit: 'cover' }}
                                    />
                                    <div>
                                        <p className="text-muted" style={{ color: '#666', lineHeight: '1.6', fontSize: '1rem' }}>
                                            SEP REALTORS was founded in 1985 by Sarah E. Peterson, a visionary in the real estate industry. 
                                            What started as a small, family-owned business in downtown has grown into one of the most 
                                            respected real estate firms in the region.
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-4 space-y-4">
                                    <span className="badge" style={{ backgroundColor: '#f0c14b', padding: '0.3rem 0.6rem', borderRadius: '5px', fontSize: '0.9rem', fontWeight: '500' }}>Est. 1985</span>
                                    <p className="text-muted" style={{ color: '#666', lineHeight: '1.6', fontSize: '1rem' }}>
                                        Over the past four decades, we've helped thousands of families find their dream homes and assisted 
                                        countless investors in making smart property decisions.
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-muted" style={{ paddingLeft: '1.5rem', color: '#666', lineHeight: '1.6', fontSize: '1rem' }}>
                                        <li>1995: Opening of our first branch office</li>
                                        <li>2005: Launch of our commercial real estate division</li>
                                        <li>2015: Expansion into property management services</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Our Mission Section */}
                    <div className="tab-content" data-value="mission">
                        <div className="card" style={{ marginBottom: '2rem', border: '1px solid #ddd', padding: '1.5rem', borderRadius: '10px' }}>
                            <div className="card-header">
                                <h2 className="card-title" style={{ fontSize: '2rem', fontWeight: '600' }}>Our Mission</h2>
                            </div>
                            <div className="card-content">
                                <img 
                                    src="https://images.pexels.com/photos/4427431/pexels-photo-4427431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                    alt="Team of SEP REALTORS professionals" 
                                    className="rounded-lg mb-4"
                                    style={{ width: '400px', height: '250px', borderRadius: '10px', objectFit: 'cover' }}
                                />
                                <p className="text-muted" style={{ color: '#666', lineHeight: '1.6', fontSize: '1rem' }}>
                                    At SEP REALTORS, our mission is to guide our clients through the complex world of real estate 
                                    with expertise, integrity, and personalized service. We are committed to:
                                </p>
                                <ul className="list-disc list-inside mt-4 space-y-2 text-muted" style={{ paddingLeft: '1.5rem', color: '#666', lineHeight: '1.6', fontSize: '1rem' }}>
                                    <li>Providing unparalleled customer service and support throughout the entire real estate process</li>
                                    <li>Leveraging cutting-edge technology and market insights to give our clients a competitive edge</li>
                                    <li>Upholding the highest standards of professionalism and ethical conduct in all our dealings</li>
                                    <li>Contributing positively to the communities we serve through active involvement and giving back</li>
                                    <li>Continuously educating ourselves and our clients to make informed real estate decisions</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Our Vision Section */}
                    <div className="tab-content" data-value="vision">
                        <div className="card" style={{ marginBottom: '2rem', border: '1px solid #ddd', padding: '1.5rem', borderRadius: '10px' }}>
                            <div className="card-header">
                                <h2 className="card-title" style={{ fontSize: '2rem', fontWeight: '600' }}>Our Vision</h2>
                            </div>
                            <div className="card-content">
                                <div className="flex flex-col md:flex-row items-center gap-4" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
                                    <div className="flex-1">
                                        <p className="text-muted" style={{ color: '#666', lineHeight: '1.6', fontSize: '1rem' }}>
                                            At SEP REALTORS, we envision a future where every individual and family has access to their 
                                            ideal living space. We strive to be at the forefront of innovation in real estate, leveraging 
                                            technology and human expertise to create seamless, enjoyable property experiences.
                                        </p>
                                        <p className="mt-4 text-muted" style={{ color: '#666', lineHeight: '1.6', fontSize: '1rem' }}>
                                            Our vision extends beyond just buying and selling properties. We aim to:
                                        </p>
                                        <ul className="list-disc list-inside mt-2 space-y-2 text-muted" style={{ paddingLeft: '1.5rem', color: '#666', lineHeight: '1.6', fontSize: '1rem' }}>
                                            <li>Build sustainable communities</li>
                                            <li>Foster long-term relationships with our clients</li>
                                            <li>Set new standards for excellence in the real estate industry</li>
                                        </ul>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <img 
                                            src="https://media.istockphoto.com/id/511061090/photo/business-office-building-in-london-england.jpg?s=2048x2048&w=is&k=20&c=tdKe-wvhnPGrt8G632TO-1eiU0u75bTBcAfLuOBaG9A=" 
                                            alt="Modern cityscape" 
                                            className="rounded-lg"
                                            style={{ width: '300px', height: '300px', borderRadius: '10px', objectFit: 'cover' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Our Team Section */}
                    <div className="tab-content" data-value="team">
                        <div className="card" style={{ marginBottom: '2rem', border: '1px solid #ddd', padding: '1.5rem', borderRadius: '10px' }}>
                            <div className="card-header">
                                <h2 className="card-title" style={{ fontSize: '2rem', fontWeight: '600', textAlign: 'center' }}>Our Team</h2>
                            </div>
                            <div className="card-content">
                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                                    <div className="flex flex-col items-center">
                                        <img 
                                            src="https://images.pexels.com/photos/27022874/pexels-photo-27022874/free-photo-of-portrait-of-bald-man-in-elegant-suit-sitting-in-armchair.jpeg?auto=compress&cs=tinysrgb&w=600" 
                                            alt="Peter" 
                                            className="rounded-lg mb-2"
                                            style={{ width: '100%', height: '180px', borderRadius: '10px', objectFit: 'cover' }} 
                                        />
                                        <h3 className="font-semibold mt-2" style={{ fontWeight: '600', fontSize: '1.2rem' }}>Peter</h3>
                                        <p className="text-sm text-muted" style={{ fontSize: '1rem', color: '#666' }}>Founder, CEO</p>
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <img 
                                            src="https://images.pexels.com/photos/5648043/pexels-photo-5648043.jpeg?auto=compress&cs=tinysrgb&w=600" 
                                            alt="James" 
                                            className="rounded-lg mb-2"
                                            style={{ width: '100%', height: '180px', borderRadius: '10px', objectFit: 'cover' }} 
                                        />
                                        <h3 className="font-semibold mt-2" style={{ fontWeight: '600', fontSize: '1.2rem' }}>James</h3>
                                        <p className="text-sm text-muted" style={{ fontSize: '1rem', color: '#666' }}>Co-founder, COO</p>
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <img 
                                            src="https://images.pexels.com/photos/7841788/pexels-photo-7841788.jpeg?auto=compress&cs=tinysrgb&w=600" 
                                            alt="Emmanuel" 
                                            className="rounded-lg mb-2"
                                            style={{ width: '100%', height: '180px', borderRadius: '10px', objectFit: 'cover' }} 
                                        />
                                        <h3 className="font-semibold mt-2" style={{ fontWeight: '600', fontSize: '1.2rem' }}>Emmanuel</h3>
                                        <p className="text-sm text-muted" style={{ fontSize: '1rem', color: '#666' }}>Chief Marketing Officer</p>
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <img 
                                            src="https://images.pexels.com/photos/4427431/pexels-photo-4427431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                            alt="The A Team" 
                                            className="rounded-lg mb-2"
                                            style={{ width: '100%', height: '180px', borderRadius: '10px', objectFit: 'cover' }}
                                        />
                                        <h3 className="font-semibold mt-2" style={{ fontWeight: '600', fontSize: '1.2rem' }}>The A Team</h3>
                                        <p className="text-sm text-muted text-center" style={{ fontSize: '1rem', color: '#666', textAlign: 'center' }}>
                                            Agents, Secretaries, Customer Services, and many more personnel
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}

export default AboutUs;
