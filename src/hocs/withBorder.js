import React from 'react'

function withBorder(Cmp, borderColor) {

    return function (props) {
        return (
            <div style={{ border: `1px solid ${borderColor}` }}>
                <Cmp {...props} asd={8} dsa={9} />
            </div>
        )

    }
}


export default withBorder

