import { OrbitControls} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components'
import Cube from './Cube'


const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;
`
const Container = styled.div`
height: 100vh;
scroll-snap-align: center;
display:flex;
width: 1400px;
justify-content: space-between;
`
const Left = styled.div`
flex: 1;

@media only screen and (max-width: 768px){
   display: none; ;
}
`
const Right = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
gap:20px
position: relative;

@media only screen and (max-width: 768px){
  align-items: center;
  text-align: center;
}
`
const Title = styled.h1`
font-size: 74px;

@media only screen and (max-width: 768px){
  font-size: 60px ;
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

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
        <Canvas camera={{ fov: 25, position:[5,5,5] }}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1}/>
        <directionalLight position={[3,2,1]}/>
            <Cube/>
        </Canvas>
        </Left>
        <Right>
          <Title>Think Different</Title>
          <Bio>
            <Line src="./img/line.png"/>
            <Subtitle>Who Am I</Subtitle>
          </Bio>
          <Desc> Excited to explore the world of coding, I'm a motivated beginner in web and app development. With a curiosity to learn new skills, I aspire to create visually appealing websites and applications, ready to tackle any challenges that come my way.
    </Desc>
        </Right>
      </Container>
    </Section>
  )
}

export default Who