
import React from "react";
import styled from "styled-components";
import Card from "./Card";

import Navbar from "./Navbar";

function Home() {
  
  return (
    <Container>
      <Navbar />
      <Banner>
        <img src="./banner.jpg" alt="" />
        <img src="./mobile_banner.jpg" alt="" />
      </Banner>

      <Main>
        <Card
          image={"https://www.sony.co.in/image/c0ebc50847b507a1e788c08c0530f599?fmt=pjpeg&wid=165&bgcolor=FFFFFF&bgc=FFFFFF"}
          price={3499}
          rating={3}
          title={"Echo dot 3rd Gen"}
        />
        <Card
          image={"https://www.sony.co.in/image/c0ebc50847b507a1e788c08c0530f599?fmt=pjpeg&wid=165&bgcolor=FFFFFF&bgc=FFFFFF"}
          price={3499}
          rating={3}
          title={"Echo dot 3rd Gen"}
        />
        <Card
          image={"https://www.sony.co.in/image/c0ebc50847b507a1e788c08c0530f599?fmt=pjpeg&wid=165&bgcolor=FFFFFF&bgc=FFFFFF"}
          price={3499}
          rating={3}
          title={"Echo dot 3rd Gen"}
        />
        <Card
          image={"https://www.sony.co.in/image/c0ebc50847b507a1e788c08c0530f599?fmt=pjpeg&wid=165&bgcolor=FFFFFF&bgc=FFFFFF"}
          price={3499}
          rating={3}
          title={"Echo dot 3rd Gen"}
        />
        <Card
          image={"https://www.sony.co.in/image/c0ebc50847b507a1e788c08c0530f599?fmt=pjpeg&wid=165&bgcolor=FFFFFF&bgc=FFFFFF"}
          price={3499}
          rating={3}
          title={"Echo dot 3rd Gen"}
        />
        <Card
          image={"https://www.sony.co.in/image/c0ebc50847b507a1e788c08c0530f599?fmt=pjpeg&wid=165&bgcolor=FFFFFF&bgc=FFFFFF"}
          price={3499}
          rating={3}
          title={"Echo dot 3rd Gen"}
        />


      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background-color: rgb(234, 237, 237);
  max-width: 4909px;
  margin: auto;
  height: fit-content;
`;

const Banner = styled.div`
  width: 100%;
  img {
    width: 100%;
    -webkit-mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 2),
      rgba(0, 0, 0, 0.95),
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0)
    );

    &:nth-child(2) {
      display: none;
    }

    @media only screen and (max-width: 767px) {
      &:nth-child(1) {
        display: none;
      }

      &:nth-child(2) {
        display: block;
        -webkit-mask-image: none;
      }
    }
  }
`;

const Main = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  width: 100%;

  grid-auto-rows: 420px;
  grid-template-columns: repeat(4, 280px);
  grid-gap: 20px;

  /* Mobile */
  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 50%);
    grid-gap: 0;
  }

  /* Tablets */

  @media only screen and (min-width: 767px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 30%);
  }

  @media only screen and (min-width: 767px) {
    margin-top: -130px;
    padding: 10px 0px;
  }
`;
export default Home;
