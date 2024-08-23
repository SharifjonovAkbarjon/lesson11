import React from 'react'
import Hero from '../../components/Hero/Hero'
import Featured from '../../components/Featured/Featured'
import Collection from '../../components/Collection/Collection'
import Stay from '../../components/Stayhome/Stay'
import Product from '../../components/Product/Product'


const Home = () => {
    return (
        <>
            <Hero/>
            <Featured/>
            <Product/>
            <Stay/>
            <Collection/>
        </>
    )
}

export default Home