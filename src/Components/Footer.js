import React from 'react'
import verified from '../images/verified.png'
import gdpr from '../images/gdpr.png'
import status from '../images/status.png'


function Footer() {
    return (
        <div className="w-10/12 flex flex-row justify-between mx-auto py-3 mt-8">
            <div className="flex flex-row justify-center items-center">
                <img src={status} alt="" />
                <p className="text-white">Server Connected 200 OK</p>

            </div>

            <p className="text-gray-500">
                ZenTube © 2021 |  All rights reserved.
            </p>

            <div className="flex flex-row">
                <img src={verified} alt="" />
                <img src={gdpr} alt="" />
            </div>
        </div>
    )
}

export default Footer
