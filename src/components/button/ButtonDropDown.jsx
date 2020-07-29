import React from 'react'

const ButtonDropDown = ({name='dropdown', gColor='primary', items=[] }) => {
  return (
    <div className="dropdown col-xl-3 mb-3">
    <button className={`btn  dropdown-toggle btn-sm bg-gradient-${gColor} text-light`} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
        {name}
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {items.map((e)=>{
            return(
                <li><a className="dropdown-item" href={e.to}>{e.item}</a></li>
            )
        })}
        
    </ul>
    </div>

  )
}

export default ButtonDropDown
