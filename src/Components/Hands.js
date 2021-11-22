import React from 'react'
import lefthand from '../images/lefthand.png'
import righthand from '../images/righthand.png'

function Hands() {
    return (
        <div className="flex flex-row items-center justify-between w-full fixed bottom-0 px-24">
            <img src={lefthand} alt="" />
            <img src={righthand} alt="" />

        </div>
    )
}

export default Hands
