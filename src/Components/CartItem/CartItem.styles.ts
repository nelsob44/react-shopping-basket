import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, Sans-serif;
  border-bottom: 2px dashed grey;
  padding-bottom: 20px;

  div {
    flex: 1;
  }

  .dismiss-button {
    float: right;
  }
  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
  }

  img {
    max-width: 80px;
    object-fit: cover;
    margin-left: 40px;
  }

  @media (max-width: 600px) {
    h3,
    p {
      font-size: 0.8rem;
    }
  }
`;
