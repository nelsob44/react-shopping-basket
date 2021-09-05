import CartItem from "../CartItem/CartItem";
import { Button } from "@material-ui/core";
import { Wrapper } from "./Cart.styles";
import { CartItemType } from "../../App";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
  removeEntireItemType: (id: number) => void;
  clearCart: () => void;
  viewItemDetail: (clickedItem: CartItemType) => void;
  makePayment: (total: number) => void;
};

const Cart: React.FC<Props> = ({
  cartItems,
  addToCart,
  removeFromCart,
  removeEntireItemType,
  clearCart,
  viewItemDetail,
  makePayment,
}) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
  return (
    <Wrapper>
      <div className="basket">
        <h2 aria-label="Your shopping basket">Your Shopping Basket</h2>
        {cartItems.length === 0 ? <p>No item in basket.</p> : null}
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            removeEntireItemType={removeEntireItemType}
            viewItemDetail={viewItemDetail}
          />
        ))}
        {cartItems.length > 0 && (
          <div className="cart-bottom">
            <div className="cart-total">
              <h2 aria-label="Total cost">
                Total: £{calculateTotal(cartItems).toFixed(2)}
              </h2>
            </div>
            <div className="cart-checkout-button">
              <Button
                className="clear-button"
                onClick={() => clearCart()}
                aria-label="Clear shopping basket"
              >
                Clear
              </Button>
              <Button
                className="checkout-button"
                size="small"
                disableElevation
                variant="contained"
                onClick={() => makePayment(calculateTotal(cartItems))}
                aria-label="Continue to checkout"
              >
                Check Out <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
              </Button>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Cart;
