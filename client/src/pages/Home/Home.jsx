import React from 'react'
import Leftsidebar from '../../components/LeftSideBar/leftsidebar'
import Rightsidebar from '../../components/RightSideBar/Rightsidebar'
import Homemainbar from '../../components/HomeMainBar/homemainbar'
import '../../App.css'

const Home = ({slidein}) => {
  return (
    <div className="home-container-1">
      <Leftsidebar slidein={slidein}/>
      <div className="home-container-2">
        <Homemainbar/>
        <Rightsidebar/>
      </div>
    </div>
  )
}

export default Home