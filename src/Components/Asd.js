import React from 'react'
import withBorder from '../hocs/withBorder'


function Asd(props) {
    return <div> {props.asd} {props.dsa} {props.qwe} This is asdCmp </div>
}


export default withBorder(Asd, "green")