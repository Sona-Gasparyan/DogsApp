import React from 'react'
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { CircularProgress } from '@material-ui/core';

class BreedList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            breeds: null,
        }
    }

    async componentDidMount() {
        const response = await fetch('https://dog.ceo/api/breeds/list/all')
        const data = await response.json()
        this.setState({
            breeds: data.message,
        })
    }

    render() {
        const { breeds } = this.state;
        return (
            <div className="breeds">
                {!!breeds ? (
                    <TreeView
                        defaultCollapseIcon={<ExpandMoreIcon />}
                        defaultExpandIcon={<ChevronRightIcon />}
                    >
                        {Object.keys(breeds).map((breed, index) => {
                            return (
                                <TreeItem key={breed} nodeId={index + ""} label={breed}>
                                    {
                                        breeds[breed].map((subBreed) => (
                                            <TreeItem key={subBreed} nodeId={subBreed} label={subBreed} />
                                        )
                                        )
                                    }
                                </TreeItem>
                            )
                        })}


                    </TreeView>
                ) : (
                    <CircularProgress />
                )}

            </div>
        )
    }
}



export default BreedList