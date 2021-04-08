import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0
        }
    }

    render() {
        const { value } = this.state;
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

