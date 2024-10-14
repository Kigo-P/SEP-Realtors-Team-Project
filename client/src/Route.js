import React, { Fragment } from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'

const router = createBrowserRouter(
    createRoutesFromElements(
    <>
    <Route
    path="/about-us"
    element={<AboutUs />}
    />
    <Route
    path="/contact-us"
    element={<ContactUs />}
    />

    </>
    )
)

const Routes = () => {
return (
<Fragment>
    <RouterProvider router={router} />
</Fragment>
)
}

export default Routes
