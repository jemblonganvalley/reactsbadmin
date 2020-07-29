import React, {useState} from 'react'
import NavItem from './NavItem'
import NavItemCollapse from './NavItemCollapse'
import {Link} from 'react-router-dom'

const SideBar = () => {

  const [hide, setHide] = useState(false)

  return (

      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      {/* Sidebar - Brand */}
      <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/dashboard">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink" />
        </div>
        <div className="sidebar-brand-text mx-3"> Jvalley </div>
      </Link>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />
      {/* Nav Item - Dashboard */}
      <li className="nav-item active">
        <Link className="nav-link" to="/dashboard">
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>Dashboard</span></Link>
      </li>
 

        {/* Divider */}
        <hr className="sidebar-divider" />

        <NavItem to='/users' itemName='Users' icon='fa-users' />
        <NavItem to='/blogs' itemName='Blogs' icon='fa-book' />


    



      <hr className="sidebar-divider d-none d-md-block" />
      {/* Sidebar Toggler (Sidebar) */}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" onClick={()=>{
          setHide(!hide)
        }}/>
      </div>
    </ul>
    
  )
}

export default SideBar
