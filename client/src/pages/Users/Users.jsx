import React from 'react'
import Leftsidebar from '../../components/LeftSideBar/leftsidebar'
import './User.css'
import Userslist from './Userlist'

const Users = ({slidein}) => {
  return (
    <div className="home-container-1">
    <Leftsidebar slidein={slidein}/>
    <div className="home-container-2" style={{marginTop:"30px"}}>
        <h1 style={{fontWeight:"400"}}>Users</h1>
        <Userslist/>
        </div>
        </div>
  )
}

export default Users