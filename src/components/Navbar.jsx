import React from 'react'
import styled from 'styled-components'
import { ResumeButton } from './MyButton'

const Section = styled.div`
display: flex;
justify-content: center;


@media only screen and (max-width: 768px){
  width: 100%
}
`
const Container = styled.div`
width: 1400px;
display:flex;
justify-content: space-between;
align-items: center;
padding: 10px 0px;


@media only screen and (max-width: 768px){
  width: 100%;
  padding: 10px;
}
`
const Links = styled.div`
display: flex;
align-items: center;
gap: 10px;
`
const Icons = styled.div`
display: flex;
align-items: center;
gap: 10px;
`
const Logo = styled.img`
height: 80px
`
const List = styled.ul`
display: flex;
list-style: none;
gap: 10px;

@media only screen and (max-width: 768px){
  display: none;
  
} 

`
const ListItem = styled.li`
cursor: pointer;
`
const Icon = styled.img`
width: 30px;
height: 30px;
cursor: pointer;
`
const Button = styled.button`
border: none;
border-radius: 5px;
color: white;
width: 100px;
padding: 10px;
background-color: #7149C6;
cursor:pointer;
`

const Navbar  = () => {
  return (
    <Section>
    <Container>
    <Links>
         <Logo src="./img/logo.png"/>
         <List>
            <ListItem>Home</ListItem>
         </List>
    </Links>
    <Icons>
        <Icon src="./img/search.png"/>
        <Button type='button' className='btn' onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact Me</Button>
        <ResumeButton/>
        <Button type='button' className='btn' onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>Projects</Button>
    </Icons>
    </Container>
    </Section>
  )
}

export default Navbar