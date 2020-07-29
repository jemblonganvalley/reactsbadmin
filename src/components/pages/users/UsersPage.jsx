import React, { useState } from 'react'
import ButtonDropDown from '../../button/ButtonDropDown'
import { Link } from 'react-router-dom'

const UsersPage = () => {

    let [ tableData, setTableData ] = useState([
        {
            select : true,
            no : 1,
            username : 'fadliselaz',
            email : 'fadliselaz@gmail.com',
            password : '********',
            avatar : 'https://picsum.photos/seed/montains/200'
        },
        {
            select : false,
            no : 2,
            username : 'dedi',
            email : 'dedi@gmail.com',
            password : '********',
            avatar : 'https://picsum.photos/seed/river/200'

        },
        {
            select : false,
            no : 3,
            username : 'cepot',
            email : 'cepot@gmail.com',
            password : '********',
            avatar : 'https://picsum.photos/seed/grass/200'
        },
    ])


  return (
    <div className='container-fluid p-5'>
      
        <div className="row">

            <h1 className="pageTitle mr-auto">Users</h1>

            <Link as='a' className='btn btn-success btn-circle ml-1'>
                <i className="fa fa-plus"></i>
            </Link>

            <Link as='a' className='btn btn-primary btn-circle ml-1'>
                <i className="fa fa-edit"></i>
            </Link>

            <Link as='a' className='btn btn-danger btn-circle ml-1'>
                <i className="fa fa-trash"></i>
            </Link>
        </div>

        <hr />

        <div className="row">

            <div className="card shadow col-sm-12">
                <div className="card-header">
                    <h3>Users Table</h3>
                </div>

                <div className="card-body ">
                    <div className="table-responsive">
                        <div className="row">
                            <table className="table table-bordered dataTable">
                                <thead>
                                    <tr>
                                        <th>
                                            <input type="checkbox" value='all'/>
                                        </th>
                                        <th>No</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                        <th>Avatar</th>
                                    </tr>
                                </thead>

                                <tbody>

                                  { tableData.map( (e)=>{
                                    return(
                                        <tr>
                                            <td>
                                                <input type="checkbox" value='all' checked={e.select}/>
                                            </td>
                                            <td>{e.no}</td>
                                            <td>{e.username}</td>
                                            <td>{e.email}</td>
                                            <td>{e.password}</td>
                                            <td>
                                                <img src={e.avatar} alt='' width='50px' height='50px' style={{
                                                    borderRadius : '100%',
                                                }}/>
                                            </td>
                                        </tr>
                                    )
                                  } )     
                                  
                                  }

                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    </div>
  )
}

export default UsersPage
