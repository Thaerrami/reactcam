import { useFormik } from 'formik'
import React from 'react'
import *  as Yup from 'yup'

function FMK() {
    const validationSchema = Yup.object({
        name:Yup.string().required('you miss to fill this field').min(11),
        email:Yup.string().email('this is not an email ! it not containing @').required(),
        password:Yup.string().required('password required').min(8),
        inputAddress:Yup.string().required('please enter this field')
    })
    const formik =useFormik({
        initialValues:{
            email:'',
            password:'',
            inputAddress:'',
            inputAddress2:'',
            inputCity:'',
            inputState:'',
            inputZip:''
        },               
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
          },
          validationSchema
    })
    return (
        <div style={{width:'60%',margin:'auto',background:'#ddd',padding:'13px',marginTop:'20px',marginBottom:'20px'}} className='rounded'>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Email</label>
                    <Error error={formik.errors.email} />
                <input 
                type="email" 
                className="form-control" 
                id="inputEmail4" 
                placeholder="Email"
                name='email'
                onChange={formik.handleChange}
                value={formik.values.email}
                />
                  
                  </div>
              <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Password</label>
                    
                    <Error error={formik.errors.password} />
                
                <input 
                type="password" 
                className="form-control" 
                id="inputPassword4" 
                placeholder="Password"
                name='password'
                onChange={formik.handleChange}
                value={formik.values.password}
                />
                 
                  </div>
            </div>
            <div className="form-group">
                  <label htmlFor="inputAddress">Address</label>
                  
                  <Error error={formik.errors.inputAddress}  />
              <input 
              type="text" 
              className="form-control" 
              name='inputAddress' 
              id="inputAddress" 
              placeholder="1234 Main St"
              onChange={formik.handleChange}
              value={formik.values.inputAddress}
              />
                
                </div>
            <div className="form-group">
                  <label htmlFor="inputAddress2">Address 2</label>
              
                  <Error error={formik.errors.inputAddress2}  />
              <input 
              type="text" 
              className="form-control" 
              name='inputAddress2' 
              id="inputAddress2" 
              placeholder="Apartment, studio, or floor"
              onChange={formik.handleChange}
              value={formik.values.inputAddress2}
          />
              
                </div>
            <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputCity">City</label>
              
                    <Error error={formik.errors.inputCity}  />
                <input 
                type="text" 
                className="form-control" 
                name="inputCity" 
                id="inputCity"
                onChange={formik.handleChange}
                value={formik.values.inputCity}
          />
              
                  </div>
              <div className="form-group col-md-4">
                    <label htmlFor="inputState">State</label>
                    
                    <Error error={formik.errors.inputState}  />
                
                <select 
                id="inputState" 
                name="inputState" 
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.inputState}
                >
                      <option >Choose...</option>
                  <option>...</option>
                </select>
              
              </div>
              <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Zip</label>
              
              <Error error={formik.errors.inputZip} />
                <input 
                type="text" 
                className="form-control"
                id="inputZip"
                name="inputZip" 
                onChange={formik.handleChange}
                value={formik.values.inputZip}
         />
                  </div>
            </div>
            <div className="form-group">
                  <div className="form-check">
              
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
              
                    <label className="form-check-label" htmlFor="gridCheck">
                      Check me out
                </label>
              </div>
            </div>
            
            <button type="submit" className="btn btn-primary">Sign in</button>
            
            </form>
        </div>
    )
}

export default FMK

const Error =(props)=>{
    return(
        <div className='text-danger h-25 text-sm-center m-1' style={{fontSize:'15px'}}>
            {props.error?props.error:null}
        </div>
    )
}