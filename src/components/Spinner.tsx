import React from 'react'
import spinner from '../assets/gifs/spinner.gif'

const Spinner = ({ size = 100 }) => {
    return (
        <div className="text-center my-5">
            <img src={spinner} alt="spinner" width={`${size}px`} />
        </div>
    )
}

export default Spinner