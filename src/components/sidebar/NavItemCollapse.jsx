import React from 'react'

const NavItemCollapse = ({ 
    icon = 'fa-cog',
    itemName = 'Item',
    itemHeader = 'header',
    listItem = [
        {
            href : '/',
            content : 'content1'
        },
        {
            href : '/',
            content : 'content2'
        }
    ]
 }) => {

  return (
    <li className="nav-item">
    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target={ `#${itemName}` }aria-expanded="true" aria-controls={itemName}>
      <i className={`fas fa-fw ${icon}`} />
      <span> { itemName } </span>
    </a>
    <div id={itemName} className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
      <div className="bg-white py-2 collapse-inner rounded">
        <h6 className="collapse-header">{ itemHeader }</h6>

        {listItem.map( (e)=> {

            return (
                <a className="collapse-item" href={ e.href } > { e.content } </a>
            )

        } )}
     
      </div>
    </div>
  </li>
  )
}

export default NavItemCollapse
