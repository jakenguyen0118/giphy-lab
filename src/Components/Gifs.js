import React from 'react'

const Gifs = props => {

    return (
        <div>
            <img src={props.image.image_url} alt='' />
        </div>
    )
}

export default Gifs