import React from 'react'
import { Link, withRouter } from 'react-router-dom'

function Breed(props) {
    const { breed, subBreed } = props.match.params
    console.log(props.match)
    return (
        <>
            <Link to="/breeds">
                Back to breeds
        </Link>
            <div>
                {subBreed ? `This is ${subBreed} of ${breed}` : `This is ${breed}`}

            </div>
        </>
    )
}


export default withRouter(Breed)