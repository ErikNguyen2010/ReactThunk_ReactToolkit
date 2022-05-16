import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import HeaderHome from '../../pages/_Components/HeaderHome'

export default function HomeTemplate(props) {
  const [screen, setScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() =>{
    window.onload = () =>{
      setScreen({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.onresize = () =>{
      setScreen({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    return () =>{
      window.removeEventListener("onload");
      window.removeEventListener("onresize");
    }

  },[])
  console.log('screen', screen);
  let Component = props.component
  if(props.componentMobile){
    if(screen.width <= 765){
      Component = props.componentMobile
    }
  }
  return <Route exact path={props.path} render={(propsRoute) =>{
    return <div>
        <HeaderHome/>
        <Component {...propsRoute}/>
        <footer className='bg-dark text-white p-5 font-weight-bold text-center'>Copy right @</footer>
    </div>
  }}/>
}
