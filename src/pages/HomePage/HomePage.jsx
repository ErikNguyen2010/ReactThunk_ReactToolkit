import React, { useEffect } from 'react'
import{useDispatch, useSelector} from 'react-redux'
import { getFilmApiAction } from '../../redux/Reducers/phimReducer'
export default function HomePage(props) {
    const {arrFilm} = useSelector(reducer=> reducer.phimReducer)
    const dispatch = useDispatch()
    useEffect(()=>{
        const actionThunk = getFilmApiAction();
        dispatch(actionThunk)
    },[])
  return (
    <div>HomePage</div>
  )
}
