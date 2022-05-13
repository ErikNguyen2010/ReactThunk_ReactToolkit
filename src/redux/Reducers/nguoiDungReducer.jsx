

import { createSlice } from '@reduxjs/toolkit'
import { ACCESSTOKEN, http, USER_LOGIN } from '../../util/setting';

const initialState = {
    userLogin: []
}

const nguoiDungReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
      dangNhap: (state,action) =>{
          console.log(action);
          state.userLogin = action.payload
      }
  }
});

export const {dangNhap} = nguoiDungReducer.actions

export default nguoiDungReducer



export const dangNhapApiAction = (userLogin) =>{
    return async dispatch =>{
        try{
            let result = await http.post('/api/quanlynguoidung/dangnhap', userLogin)
            let usLoginResult = result.data.content
            localStorage.setItem(USER_LOGIN, JSON.stringify(usLoginResult))
            localStorage.setItem(ACCESSTOKEN, usLoginResult.accessToken)
            const action = dangNhap(usLoginResult)
            dispatch(action);

            //set cookie
            // setCookie(USER_LOGIN, JSON.stringify(usLoginResult), 30)

        }catch(error){
            console.log(error);
        }
    }
}