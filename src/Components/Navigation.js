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
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    this.setState({
                        value: newValue
                    });
                }}
                showLabels
            >
                <BottomNavigationAction component={() => <Link style = {{margin: 5 }} to="/">Home</Link>} />
                <BottomNavigationAction component={() => <Link style = {{margin: 5 }} to="/breeds">Breeds</Link>} />
                <BottomNavigationAction component={() => <Link style = {{margin: 5 }} to="/asd">Asd</Link>} />
            </BottomNavigation>
        )
    }
}


export default Navigation

