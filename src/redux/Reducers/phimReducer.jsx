import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { TOKEN_CYBERSOFT } from '../../util/setting';
const initialState = {
    arrFilm: []
}

const phimReducer = createSlice({
  name: "phimReducer",
  initialState,
  reducers: {
      layDanhSachPhimAction: (state,action) =>{
          console.log(action);
        state.arrFilm = action.payload
      }
  }
});

export const {layDanhSachPhimAction} = phimReducer.actions

export default phimReducer.reducer


export const getFilmApiAction = () =>{
    return async dispatch =>{
        try{
            let result = await axios({
                url:"https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
                method:"GET",
                headers:{
                    'TokenCybersoft': TOKEN_CYBERSOFT
                },
            })
            const action = layDanhSachPhimAction(result.data.content)
            dispatch(action)
        }catch(error){
            console.log(error);
        }
    }
}