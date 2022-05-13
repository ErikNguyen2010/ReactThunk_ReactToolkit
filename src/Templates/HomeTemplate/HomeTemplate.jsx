import React from 'react'
import { Route } from 'react-router-dom'
import HeaderHome from '../../pages/_Components/HeaderHome'

export default function HomeTemplate(props) {
  return <Route exact path={props.path} render={(propsRoute) =>{
    return <div>
        <HeaderHome/>
        <props.component {...propsRoute}/>
        <footer className='bg-dark text-white p-5 font-weight-bold text-center'>Copy right @</footer>
    </div>
  }}/>
}
