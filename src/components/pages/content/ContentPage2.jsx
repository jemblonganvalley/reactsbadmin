import React from 'react'
import Card from '../../card/Card'
import ButtonDropDown from '../../button/ButtonDropDown'

const ContentPage2 = ({nm}) => {
  return (
    <div classnm="container-fluid">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
  <h1 className="h3 mb-0 text-gray-800">{nm}</h1>
      <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50" /> Generate Report</a>
    </div>


    <h1>{nm}</h1>
   
    </div>
  )
}

export default ContentPage2
