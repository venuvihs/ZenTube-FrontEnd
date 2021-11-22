import React from 'react'
import fetch from '../images/fetchSuccess.png'

import thumbnail from '../images/thumbnail.png'

function ResultsPromps() {
    return (
        <div className="flex flex-row justify-between items-center w-2/4 mx-auto mt-16 px-12">

            <div className="text-white flex flex-col justify-items-start">
                <img src={fetch} alt="" />
                <p>Title: <span className="text-yellow-300">ReactJS Tutorial - 9 - Props</span></p>
                <p>VideoID: <span className="text-yellow-300">m7OWXtbiXX8</span></p>
                <p>Format:  <span className="text-yellow-300">.m4a (H.264)</span></p>

                <div className="flex flex-row justify-between mt-4">

                    <div className="flex flex-row items-center bg-green-600 px-2 py-1 rounded-xl space-x-2">
                        <p className="">.mp3</p>
                        <i class="fas fa-file-audio"></i>
                    </div>

                    <p>OR</p>

                    <div className="flex flex-row items-center bg-blue-600 px-2 py-1 rounded-xl space-x-2">
                        <p>.mp4</p>
                        <i class="fas fa-file-video"></i>
                    </div>
                </div>
            </div>

            <div className=" w-64 h-42 ">
                <img src={thumbnail} alt="" className="w-full h-full" />
            </div>
        </div>
    )
}

export default ResultsPromps
