import React from 'react'
import { Link } from 'react-router-dom';

class Navigation extends React.Component {

    render() {
        return (
            <>
                <Link style={{ margin: 5 }} to="/home">Home</Link>
                <Link style={{ margin: 5 }} to="/breeds">Breeds</Link>
                <Link style={{ margin: 5 }} to="/asd">Asd</Link>
            </>
        )
    }
}


export default Navigation

