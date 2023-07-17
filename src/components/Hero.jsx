import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { OrbitControls} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'


const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

@media only screen and (max-width: 768px){
  height:200vh ;
}
`
const Container = styled.div`
height: 100%;
scroll-snap-align: center;
display:flex;
width: 1400px;
justify-content: space-between;

@media only screen and (max-width: 768px){
  width: 100%;
  flex-direction: column;
  align-item: center;
  justify-content: center;
}
`
const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap:20px
position: relative;
flex: 2;
@media only screen and (max-width: 768px){
  flex: 1;
  align-items: center;
}
`
const Right = styled.div`
flex: 3;
position: relative;
@media only screen and (max-width: 768px){
  flex: 1;
  width: 100%;

}
`
const Title = styled.h1`
font-size: 74px;

@media only screen and (max-width: 768px){
  text-align: center;
}
`
const Bio = styled.div`
display: flex;
align-items: center;
gap: 10px;
`
const Line = styled.img`
height: 5px;
`
const Subtitle = styled.h2`
color: white;
`
const Desc = styled.p`
font-size: 24px;
color: white;
padding: 0px 0px 10px 0px;
@media only screen and (max-width: 768px){
  padding: 20px;
  text-align: center;
}
`
const Button = styled.button`
border: none;
border-radius: 5px;
color: white;
width: 100px;
padding: 10px;
font-weight: 500;
background-color: #7149C6;
cursor: pointer;
`
const Img = styled.img`
width: 600px;
height: 600px;
position: absolute;
object-fit: contain;
top:0;
right:0;
bottom: 0;
left: 0;
margin: auto;
animation: animate 2s infinite ease alternate;

@media only screen and (max-width: 768px){
  height:300px;
  width: 300px;
}

@keyframes animate {
  to{
    transform: translateY(30px);
  }
}
`
const Hero = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>Design, Create, Innovate</Title>
          <Bio>
            <Line src="./img/line.png"/>
            <Subtitle>About Me</Subtitle>
          </Bio>
          <Desc> I enjoy developing beautiful, functional websites as a Web developer.
          ReactJs, NodeJs,and React Native expertise. I create user-friendly, responsive websites.
    </Desc>
  
        </Left>
        <Right>
        <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1}/>
        <directionalLight position={[3,2,1]}/>
        <Sphere args={[2,100,200]} scale={1.1}>
        <MeshDistortMaterial color="#7149C6" attach="material" distort={0.5} speed={2}/>
        </Sphere>
        </Canvas>
         <Img src="./img/moon.png"/>
        </Right>
      </Container>
    </Section>
  )
}

export default Hero