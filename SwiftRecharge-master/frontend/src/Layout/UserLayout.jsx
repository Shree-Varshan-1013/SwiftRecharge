import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const UserLayout = ({ component: Child }) => {
    return (
        <div>
            <Header />
            <Child />
            <Footer />
        </div>
    )
}

export default UserLayout
