import { Button } from "@material-ui/core";
// Types
import { CartItemType } from "../../App";
// Styles
import { Wrapper } from "./CartItem.styles";
import ClearIcon from "@material-ui/icons/Clear";

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
  removeEntireItemType: (id: number) => void;
  viewItemDetail: (clickedItem: CartItemType) => void;
};

const CartItem: React.FC<Props> = ({
  item,
  addToCart,
  removeFromCart,
  removeEntireItemType,
  viewItemDetail,
}) => (
  <Wrapper>
    <div>
      <h3 aria-label="Item title">{item.title}</h3>
      <div className="information">
        <p aria-label="Item price">Price: £{item.price}</p>
        <p aria-label="Amount for item">Total: £{item.amount * item.price}</p>
      </div>
      <div className="buttons">
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => removeFromCart(item.id)}
          aria-label="Remove one item from cart"
        >
          -
        </Button>
        <p aria-label="Item amount">{item.amount}</p>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => addToCart(item)}
          aria-label="Add one item to cart"
        >
          +
        </Button>
      </div>
    </div>
    <Button onClick={() => viewItemDetail(item)} aria-label="View item detail">
      <img src={item.image} alt={item.title} />
    </Button>
    <Button
      className="dismiss-button"
      onClick={() => removeEntireItemType(item.id)}
      aria-label="Remove entire item from cart"
    >
      <ClearIcon></ClearIcon>
    </Button>
  </Wrapper>
);

export default CartItem;
