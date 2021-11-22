import React from 'react'
import Hands from '../components/Hands'
import Header from '../components/Header'
import MainSearchBar from '../components/MainSearchBar'
import ResultsPromps from '../components/ResultsPromps'
import background from '../images/background.png'

import wow_infographics from '../images/wow_infographics.png'

function Home() {
  return (
    <div className="relative">
      <img src={background} alt="" className="w-full h-screen transform absolute z-0" />
      <Hands />
      <div className=" absolute w-full flex justify-center mt-20 ">
        <img src={wow_infographics} alt="" className="pl-20" />

      </div>
      <div className="relative z-20">
        <Header />
        <MainSearchBar className="mx-auto mt-32" />
        <ResultsPromps />
      </div>

    </div>
  )

}

export default Home;
