import React from 'react'

const Button = props => {

    const handleSubmit = () => {
        return (
            props.onSubmit()
        )
    }

    return (
        <button onClick={handleSubmit}>
            Random Gif
        </button>
    )
}

export default Button