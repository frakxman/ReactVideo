import React, { useState, useEffect } from 'react';

// Components 
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

// Hooks 
import useInitiaState from '../hooks/useInitialState'

// Styles 
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState'

const Home = () => {
    const initialState = useInitiaState( API )

    return  initialState.length === 0 ? <h1>Loading...</h1> : (
        <div className="App">
            <Header />
            <Search />
            
            { initialState.mylist.length > 0 &&
                <Categories title="My List">
                    <Carousel>
                        { initialState.trends !== undefined && initialState.mylist.map( item => (
                            <CarouselItem key={item.id} {...item} />
                        ))}
                    </Carousel>
                </Categories>
            }

            <Categories title="Trends">
                <Carousel>
                    { initialState.trends !== undefined && initialState.trends.map( item => (
                        <CarouselItem key={item.id} {...item} />
                    ))}
                </Carousel>
            </Categories>

            <Categories title="Originals">
                <Carousel>
                { initialState.trends !== undefined && initialState.originals.map( item => (
                    <CarouselItem key={item.id} {...item} />
                ))}
                </Carousel>
            </Categories>

            <Footer />
        </div>
    )
}

export default Home;