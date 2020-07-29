import React, { useState } from 'react'

const ModalInput = () => {

    let [avatar, setAvatar] = useState('beruk')

    let [inputData, setInputData] = useState({
        nik : '',
        nama_depan : '',
        nama_belakang : '',
        email : '',
        alamat : '',
        phone : '',
        semester : 0,
        avatar : ''
    })

    let handleChange = (e)=>{
        e.preventDefault()
        setInputData({
            ...inputData,
            [e.target.id] : e.target.value
        })

        console.log(inputData)
    }

    const handleSubmit = ()=>{
        fetch('http://localhost:3005/mahasiswa', {
            method : 'POST',
            mode : 'cors',
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(inputData)
        })
        .then((res) => {
            if(res.status == 201 ){
                alert('data berhasil dimasukan')
            }
        })
    }

  return (
    <div className='container-fluid' style={{
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        position : 'fixed',
        left : '0',
        top : '0',
        zIndex : '100',
        // backgroundColor : 'rgba(0,0,0,0.800)',
        backgroundImage : `url(https://picsum.photos/seed/${avatar}/600)`,
        backgroundRepeat : 'no-repeat',
        backgroundSize : 'cover',
        width : '100%',
        height : '100%',
    }}>
        
            <div className="card col-lg-6">
                <div className="card-header w-100">
                    <h5 className=''>Input DATA Siswa Baru</h5>
                    
                </div>
                <div className="card-body">

                    <form onSubmit={handleSubmit}>

                       <div className="row">
                            <div className="mb-3 col">
                                <label htmlFor="NIK" className="form-label">NIK</label>
                                <input type="text" className="form-control" id="nik" onChange={(e)=>{
                                    setInputData({
                                        ...inputData,
                                        nik : e.target.value
                                    })
                                }}/>
                            </div>

                            <div className="mb-3 col">
                                <label htmlFor="nama_depan" className="form-label">Nama Depan</label>
                                <input type="text" className="form-control" id="nama_depan" onChange={handleChange} />
                            </div>
                       </div>

                       <div className="row">
                           <div className="mb-3 col">
                                <label htmlFor="nama_belakang" className="form-label">Nama Belakang</label>
                                <input type="text" className="form-control" id="nama_belakang" onChange={handleChange} />
                            </div>

                            <div className="mb-3 col">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" onChange={handleChange}/>
                            </div>

                            
                       </div>

                       <div className="row">
                            <div className="mb-3 col">
                                <label htmlFor="alamat" className="form-label">Alamat</label>
                                <input type="text" className="form-control" id="alamat" onChange={handleChange} />
                            </div>

                            <div className="mb-3 col">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input type="phone" className="form-control" id="phone" onChange={handleChange} />
                            </div>
                       </div>

                       <div className="row">
                            <div className="mb-3 col">
                                <label htmlFor="semester" className="form-label">Semester</label>
                                <input type="number" className="form-control" id="semester" onChange={handleChange} />
                            </div>

                            <div className="mb-3 col">
                                <label htmlFor="avatar" className="form-label">Avatar</label>
                                <input type="text" className="form-control" id="avatar" onChange={(e)=>{

                                    setAvatar(e.target.value)

                                    setInputData({
                                        ...inputData,
                                        avatar : `https://picsum.photos/seed/${e.target.value}/300`
                                    })
                                    console.log(inputData)

                                }}/>
                            </div>
                       </div>

                        <div className="row">
                            
                            <div className="col">
                                <button type="submit" className="btn btn-success ">Submit</button>
                                <button type="button" className="btn btn-secondary m-1 ">Cancel</button>
                            </div>

                            <div className="imageView col">
                                <img src={`https://picsum.photos/seed/${avatar}/100`} style={{
                                    borderRadius : '100%'
                                }}/>
                            </div>
                        </div>

                        
                    </form>

                </div>
            </div>


    </div>
  )
}

export default ModalInput
