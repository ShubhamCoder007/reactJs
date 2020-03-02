import React from 'react'

const heading = {
    fontSize: '72px',
    color: 'red'
}

function inline(){
    return (
        <div>
            <h1 style={heading}>in Line</h1>
        </div>
    )
}

export default inline