import React, { useState } from 'react'
import ModalHOC from '../../HOC/ModalHOC'
import LoginPage from '../LoginPage/Login'
export default function HocDemo(props) {
    // const ModalHOCLoginPage= new ModalHOC(Login)
    const [component, setComponent] = useState(<p>Default Component</p>)
  return (
    <div className='contbuttonainer'>
        <button  onClick={() =>{
            setComponent(<p> đăng ký </p>)
        }} data-toggle="modal" data-target="#modelId" className="btn btn-success">
            Đăng ký
        </button>
        <button  onClick={() =>{
            setComponent(<LoginPage/>)
        }} data-toggle="modal" data-target="#modelId" className="btn btn-primary">Đăng nhập
        </button>
        {/* <ModalHOC modalContent={<LoginPage/>}/> */}
        {/* <ModalHOCLoginPage/> */}
        <ModalHOC modalContent ={component}/>
    </div>
  )
}
