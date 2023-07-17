import styled from "styled-components"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Who from "./components/Who"
import Works from "./components/Works"



const Container = styled.div`
height: 100vh;

scroll-behavior: smooth;
overflow-y: auto;
scrllbar-width: none;
color: white;
background: url("./img/bg.jpg");
&::-webkit-scrollbar{
  display:none;
}

`
function App() {
  return (
    <Container>
     <Hero/>
     <Who/>

     <Works/>
     <Contact/>
    </Container>

  )
}

export default App
