import React, { useState } from 'react'
import ButtonDropDown from '../../button/ButtonDropDown'
import { Link } from 'react-router-dom'

const BlogsPage = () => {

    let [ tableData, setTableData ] = useState([
        {
            select : true,
            id : 1,
            title: 'Blogs-Content',
            image : 'https://picsum.photos/seed/montains/200',
            postingdate : 'Friday , jully 24th 2020',
            author: 'mpri'
        },
        {
            select : true,
            id : 2,
            title: 'Blogs-Content',
            image : 'https://picsum.photos/seed/montains/200',
            postingdate : 'Monday ,Jully 25th 2020',
            author: 'bangeja'
        },
        {
            select : true,
            id : 3,
            title: 'Blogs-Content',
            image : 'https://picsum.photos/seed/montains/200',
            postingdate : 'Sunday , Jully 26th 2020',
            author: 'Uta'
        },
       
      
    ])


  return (
    <div className='container-fluid p-5'>
      
        <div className="row">

            <h1 className="pageTitle mr-auto">Blogs-Content</h1>

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
                    <h3>Blogs Table</h3>
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
                                        <th>Id</th>
                                        <th>Title</th>
                                        <th>Image</th>
                                        <th>PostingDate</th>
                                        <th>Author</th>
                                    </tr>
                                </thead>

                                <tbody>

                                  { tableData.map( (e)=>{
                                    return(
                                        <tr>
                                            <td>
                                                <input type="checkbox" value='all' checked={e.select}/>
                                            </td>
                                            <td>{e.id}</td>
                                            <td>{e.title}</td>
                                            <td>
                                                <img src={e.image} alt="" style={{
                                                    width : '50px',
                                                    height:'50px',
                                                    borderRadius : '100%'
                                                }}/>
                                            </td>
                                            <td>{e.postingdate}</td>
                                            <td>
                                                {e.author}
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

export default BlogsPage
