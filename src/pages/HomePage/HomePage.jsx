import React, { useEffect } from 'react'
import{useDispatch, useSelector} from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getFilmApiAction } from '../../redux/Reducers/phimReducer'
export default function HomePage(props) {
    const {arrFilm} = useSelector(reducer=> reducer.phimReducer)
    const dispatch = useDispatch()
    useEffect(()=>{
        const actionThunk = getFilmApiAction();
        dispatch(actionThunk)
    },[])
    const renderFilm = () =>{
      return arrFilm.map((film, key) =>{
        return <div className='col-4 col-md-4 col-xs-2' key={key}>
          <div className="card">
            <img src={film.hinhAnh} alt="..." />
            <div className="card-body">
              <p>
                {film.tenPhim}
              </p>
              <p className='card-body'>{film.moTa}</p>
              <NavLink className="btn btn-success" to="/detail">Dat ve</NavLink>
            </div>
          </div>
        </div>
      })
    }
  return (
    <div className='container'>
      <div className="row">
        {renderFilm()}
      </div>
    </div>
  )
}
