import React from 'react'
import Leftsidebar from '../../components/LeftSideBar/leftsidebar'
import Rightsidebar from '../../components/RightSideBar/Rightsidebar'
import Qustiondetails from './QuestionDetail'

const Displayquestion = ({slidein}) => {
  return (
    <div className="home-container-1">
      <Leftsidebar slidein={slidein}/>
      <div className="home-container-2">
        <Qustiondetails/>
        <Rightsidebar/>
      </div>
    </div>
  )
}

export default Displayquestion