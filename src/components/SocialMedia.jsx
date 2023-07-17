import React from 'react'
import Chair from './Chair'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styled from 'styled-components'

const Desc = styled.div`
width:200px;
height: 70px;
padding: 20px;
background-color: white;
border-radius: 10px;
position: absolute;
top: 200px;
left: 600px;
color: black;
font-size: 14px;
font-weight: 300;
@media only screen and (max-width: 768px){
  top:0;
  bottom:0;
  left:0;
  right:0;
  margin:auto;
}
`

const SocialMedia = () => {
  return (
    <>
    <Canvas>
    <Stage environment="city" intensity={0.6}>
    <Chair/>
    </Stage>
      <OrbitControls enableZoom={false}/>
    </Canvas>
    <Desc>
      We Design Products with a Strong Focus on Both World Class Design and
      Ensuring Your Product is a Market Success.
    </Desc>
    </>
  )
}

export default SocialMedia