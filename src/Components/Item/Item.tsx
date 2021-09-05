import { Button } from "@material-ui/core/";
// Types
import { CartItemType } from "../../App";
// Styles
import { Wrapper } from "./Item.styles";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3 aria-label="Item title">{item.title}</h3>
      <p aria-label="Item description">{item.description}</p>
      <h3 aria-label="Item price">£{item.price}</h3>
    </div>
    <Button
      onClick={() => handleAddToCart(item)}
      aria-label="Add item to shopping cart"
    >
      Add to cart
    </Button>
  </Wrapper>
);

export default Item;
