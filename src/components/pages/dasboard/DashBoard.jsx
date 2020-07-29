import React from 'react'
import SideBar from '../../sidebar/SideBar'
import TopBar from '../../topbar/TopBar'

const DashBoard = ({children}) => {

  return (
    <div id="wrapper">
      
        <SideBar />

        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">

                <TopBar />

                {children}
                 

            </div>
        </div>


    </div>
  )
}

export default DashBoard
