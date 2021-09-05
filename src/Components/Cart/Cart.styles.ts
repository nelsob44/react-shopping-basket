import styled from "styled-components";

export const Wrapper = styled.aside`
  .basket {
  }
  font-family: Arial, Helvetica, sans-serif;
  width: 95%;
  padding: 20px;

  .cart-bottom {
    display: flex;
    .cart-total {
      flex: 40%;
    }
    .cart-checkout-button {
      flex: 60%;
      margin-top: 1rem;
      .checkout-button {
        float: right;
        background-color: #03e8fc;
        color: white;
      }
      .clear-button {
        color: grey;
      }
    }
  }

  @media (min-width: 600px) {
    width: 500px;
  }

  @media (max-width: 600px) {
    width: calc(100vw - 60px);

    .cart-total,
    .clear-button,
    .checkout-button {
      font-size: 0.6rem;
    }
    .cart-total {
      margin-top: 0.6rem;
    }
  }
`;
