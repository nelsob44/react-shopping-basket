import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 80%;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 16px;
  left: 10%;
  top: 30%;
  box-sizing: border-box;
  transition: all 0.3s ease-out;

  img {
    max-width: 200px;
    object-fit: cover;
    margin-left: 40px;
  }

  .dismiss-modal {
    float: right;
  }
  .pay-button {
    background-color: #03e8fc;
  }
  @media (max-width: 599px) {
    img {
      max-width: 100px;
      object-fit: cover;
      margin-left: 20px;
    }
    top: 10%;
  }

  @media (min-width: 600px) {
  }
`;
