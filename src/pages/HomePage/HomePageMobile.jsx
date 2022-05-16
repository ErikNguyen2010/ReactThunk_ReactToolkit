import React, { useEffect } from 'react'
import{useDispatch, useSelector} from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getFilmApiAction } from '../../redux/Reducers/phimReducer'
export default function HomePageMobile(props) {
    const {arrFilm} = useSelector(reducer=> reducer.phimReducer)
    const dispatch = useDispatch()
    useEffect(()=>{
        const actionThunk = getFilmApiAction();
        dispatch(actionThunk)
    },[])
    const renderFilm = () =>{
      return arrFilm.map((film, key) =>{
        return <tr key={key}>
            <td style={{width:"20%"}}>
                <img width={100} height={200} src={film.hinhAnh} alt="..." />
            </td>
            <td>
                <p height={{height:120}}>{film.moTa.length > 150? film.moTa.substr(0,100) + "..." : film.moTa}</p>
            </td>
            <td style={{width: "20%"}}>
                <NavLink to={"/detail"} className="btn btn-success">dat ve</NavLink>
            </td>
        </tr>
      })
    }
  return (
    <div className='container'>
      <table border="0" className="table">
          <tbody>
            {renderFilm()}
          </tbody>
      </table>
    </div>
  )
}
