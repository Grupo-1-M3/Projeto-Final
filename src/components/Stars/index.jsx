import React from 'react'

const Stars = ({ contStar, star, star_yellow }) => {

    const array = [ 1, 2, 3, 4, 5, 6 ]

    return (
        array.map(x => {

            if(contStar >= x) {
            
                return <img src={ star_yellow } alt="Star" />        
            }
            
            else {
        
                return <img src={ star } alt="star" />
            }
        })
    )
}

export default Stars
