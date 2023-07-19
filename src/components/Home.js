import React from 'react'
import styled from "styled-components";
import Navbar from "./Navbar";
//import styled from "styled-components";
function Home() {
  return (
    <Container>
    <Navbar/>  
        <h1>Welcome Home page</h1>
      
    </Container>
  )
}

const Container = styled.div`
  width : 100%;
  // background-color : red;
`;
export default Home
