import React, { useEffect } from 'react'

import TopCategory from '../components/TopCategory'
import HeroSlider from '../components/Slider'
import Aboutus from './Aboutus'
import CustomerReview from '../components/CustomerReview'
import LatestUpdates from '../components/LatestUpdates'
import Translates from '../components/Translates'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../redux/slice/CategoriesSlice'


const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCategories())
    }, [])
    return (
        <div>

            <HeroSlider />

            <Aboutus />
            <TopCategory />
            <CustomerReview />
            <LatestUpdates />

        </div>
    )
}

export default Home

