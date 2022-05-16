import React from 'react'
import { Route } from 'react-router-dom'
import HeaderHome from '../../pages/_Components/HeaderHome'

export default function LoginTemplate(props) {
  return <Route exact path={props.path} render={(propsRoute) =>{
    return <div>
        <HeaderHome/>
        <props.component {...propsRoute}/>
    </div>
  }}/>
}