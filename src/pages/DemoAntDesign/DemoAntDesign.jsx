import React from 'react'
import { Carousel } from 'antd';

function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default function DemoAntDesign(props) {
  return (
    <div style={{minHeight: "500"}} className="container">
         <Carousel afterChange={onChange} autoplay="true">
            <div>
            {/* <h3 style={contentStyle}>1</h3> */}
            <img src={"https://picsum.photos/id/15/124/23"} alt="..." style={contentStyle} />
            </div>
            <div>
            <h3 style={contentStyle}>2</h3>
            </div>
            <div>
            <h3 style={contentStyle}>3</h3>
            </div>
            <div>
            <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
        <button onClick={() =>{
        }} className='btn btn-success'>next</button>
        <button onClick={() =>{

        }} className='btn btn-danger'>previous</button>
    </div>
  )
}
