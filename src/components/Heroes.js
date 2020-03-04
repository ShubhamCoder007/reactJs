import React from 'react'

function Heroes({heroName}) {
    if(heroName === 'Joker'){
        throw new Error('Not a hero')
    }
    return (
        <h1>
            {heroName} is here !!!
        </h1>
    )
}

export default Heroes