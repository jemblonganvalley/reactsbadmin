import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ModalInput from './ModalInput'

const SiswaPage = () => {

    let [show, setShow] = useState(false)
    let [ dataSiswa, setDataSiswa ] = useState([])
    let [refresh, setRefresh] = useState(false)

    useEffect( ()=>{

        fetch("http://localhost:3005/mahasiswa" , {
            method : 'GET',
            mode : 'cors',
            headers : {
                "Content-Type" : "application/json"
            }
        })
        .then(res => res.json())
        .then((data)=>{
            console.log(data)
            setDataSiswa(data)
        })

    } , [ refresh ])


  return (
      <>

      {show && (<ModalInput />)}

    <div className='container-fluid p-5'>
        
        <div className="row">

            <h1 className="pageTitle mr-auto">Siswa</h1>

            <Link as='button' className='btn btn-success btn-circle ml-1' onClick={()=>{
                setShow(!show)
            }} style={{
                zIndex : '200',
            }}>
                <i className="fa fa-plus"></i>
            </Link>

            <Link as='a' className='btn btn-primary btn-circle ml-1'>
                <i className="fa fa-edit"></i>
            </Link>

            <Link as='a' className='btn btn-danger btn-circle ml-1'>
                <i className="fa fa-trash"></i>
            </Link>

            <Link as='button' className='btn btn-secondary btn-circle ml-1' onClick={()=>{
                setRefresh(!refresh)
            }}>
                <i className="fa fa-recycle"></i>
            </Link>
        </div>

        <hr />

        <div className="row">

            <div className="card shadow col-sm-12">
                <div className="card-header">
                    <h3>Siswa Table</h3>
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
                                        <th>NIK</th>
                                        <th>Nama</th>
                                        <th>Email</th>
                                        <th>Alamat</th>
                                        <th>Telpn</th>
                                        <th>Semster</th>
                                        <th>Avatar</th>
                                    </tr>
                                </thead>

                                <tbody>

                                  { dataSiswa.map( (e)=>{
                                    return(
                                        <tr>
                                            <td>
                                                <input type="checkbox" value='all' />
                                            </td>
                                            <td>{e.nik}</td>
                                            <td>{e.nama_depan} {e.nama_belakang}</td>
                                            <td>{e.email}</td>
                                            <td>{e.alamat}</td>
                                            <td>{e.phone}</td>
                                            <td>{e.semester}</td>
                                            <td>
                                                <img src={e.avatar} alt='' width='50px' height='50px' style={{
                                                    borderRadius : '100%',
                                                }}/>
                                            </td>
                                        </tr>
                                    )})     
                                  }
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    </div>
    </>
  )
}

export default SiswaPage
