import React from "react";
import styled from "styled-components";
import Rating from '@material-ui/lab/Rating';
function Card(){
  return (
    <Container>
      <Image>
        <img src="data:image/jpeg;base64,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" alt="" />
      </Image>
      <Description>
        <h5>XB13 EXTRA BASS™ Portable Wireless Speaker</h5>
        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
        <p>₹ 1000</p>

        <button>Add to Cart</button>
      </Description>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  background-color: #fff;
  z-index: 10;
`;
const Image = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex: 0.3;
  img {
    width: 180px;
    height: 200px;
  }
`;
const Description = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 0.7;

  h5 {
    font-size: 16px;
    font-weight: 600;
  }

  p {
    font-weight: 600;
  }

  button {
    width: 100%;
    height: 33px;
    background-color: #fa8900;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
`;
export default Card;
