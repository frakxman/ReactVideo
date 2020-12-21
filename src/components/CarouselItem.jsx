import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFavorite, deleteFavorite } from '../actions/index';

import '../assets/styles/components/CarouselItem.scss';

// Icons 
import play from '../assets/icons/play-icon.png';
import plus from '../assets/icons/plus-icon.png';
import remove from '../assets/icons/remove-icon.png';

const CarouselItem = ( props ) => {
    const { id, cover, title, year, contentRating, duration, isList } = props;
    const handleSetFavorite = () => {
        props.setFavorite({
            id, cover, title, year, contentRating, duration
        })
    }
    const handleDeleteFavorite = ( itemId ) => {
        props.deleteFavorite( itemId )
    }
    return (
        <div className="carousel-item">
            <img className="carousel-item__img" src={ cover } alt={ title }  />
            <div className="carousel-item__details">
                <div>
                    <img className="carousel-item__details--img" src={ play } alt="Play Icon" />
                    { isList ? 
                        <img 
                            className="carousel-item__details--img"
                            src={ remove }
                            alt="Remove Icon"
                            onClick={ () => handleDeleteFavorite( id ) }
                        /> 
                        :
                        <img 
                            className="carousel-item__details--img"
                            src={ plus }
                            alt="Plus Icon"
                            onClick={ handleSetFavorite }
                        />
                    }
                </div>
                <p className="carousel-item__details--title">{ title }</p>
                <p className="carousel-item__details--subtitle">{`${ year } ${ contentRating } ${ duration }`}</p>
            </div>
        </div>
    )
};

CarouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
}

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite,
}

export default connect( null, mapDispatchToProps )( CarouselItem );