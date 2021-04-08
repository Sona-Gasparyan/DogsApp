import React from 'react'


function CarouselItem(props) {

    return (
        <div className="carouselItem">
            <img className="carouselItemImg" alt="dog" src={props.url} />
        </div>
    )
}


export default CarouselItem