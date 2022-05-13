import React, { useRef } from 'react'
import {useDispatch} from 'react-redux'
import { dangNhapApiAction } from '../../redux/Reducers/nguoiDungReducer'
export default function Login() {
    const userLoginRef = useRef({
        taiKhoan: "",
        matKhau: "",
    })
    const dispatch = useDispatch()
    const handleChange = (event) =>{
        let {value , name} = event.target
        userLoginRef.current[name] = value
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        const action = dangNhapApiAction(userLoginRef.current)
        dispatch(action)
    }
  return (
      <form onSubmit={handleSubmit} className="container">
          <h3>Login</h3>
          <div className="form-group">
              <p>Tài khoản</p>
              <input type="text" name='taiKhoan' onChange={handleChange} className="form-control" id="taiKhoan" />
          </div>
          <div className="form-group">
              <p>Mật khẩu</p>
              <input name='matKhau' onChange={handleChange} type="text" className="form-control" id="matKhau" />
          </div>
          <div className="form-group">
              <button  type='submit' className="btn btn-success">Đăng nhập</button>
          </div>
      </form>
  )
}
