import React from 'react'
import Hero from '../../components/Hero/Hero'
import Featured from '../../components/Featured/Featured'
import Collection from '../../components/Collection/Collection'
import Stay from '../../components/Stayhome/Stay'


const Home = () => {
    return (
        <>
            <Hero/>
            <Featured/>
            <Stay/>
            <Collection/>
        </>
    )
}

export default Home