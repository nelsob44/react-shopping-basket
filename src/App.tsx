import { useState } from "react";
import { useQuery } from "react-query";
// Components
import Item from "./Components/Item/Item";
import Modal from "./Components/Modal/Modal";
import { Drawer, LinearProgress, Grid, Badge } from "@material-ui/core/";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Cart from "./Components/Cart/Cart";
// Styles
import { Wrapper, StyledButton } from "./App.styles";
// Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [paymentAmount, setModalPayment] = useState(0);
  const [modalItem, setModalItem] = useState({} as CartItemType);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  const viewItemDetail = (item: CartItemType) => {
    setCartOpen(false);
    setModalOpen(true);
    setModalItem(() => {
      return item;
    });
  };

  const makePayment = (total: number) => {
    setCartOpen(false);
    setModalOpen(true);
    setModalPayment(() => {
      return total;
    });
  };

  const dismissModal = () => {
    setModalOpen(false);
    setModalPayment(0);
    setModalItem({} as CartItemType);
  };

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prevState) => {
      // Is the item in cart already?
      const isItemInCart = prevState.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prevState.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // If the item is not in cart
      return [...prevState, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prevState) =>
      prevState.reduce((acm, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acm;
          return [...acm, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acm, item];
        }
      }, [] as CartItemType[])
    );
  };

  const removeEntireItemType = (id: number) => {
    setCartItems((prevState) =>
      prevState.reduce((ack, item) => {
        if (item.id === id) {
          return ack;
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };

  const clearCart = () => {
    setCartItems((prevState) =>
      prevState.reduce((ack, item) => {
        return ack;
      }, [] as CartItemType[])
    );
  };

  if (isLoading) return <LinearProgress />;
  if (error)
    return (
      <div>
        <p aria-label="Page error message">Sorry, there was an error...</p>
      </div>
    );

  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
          removeEntireItemType={removeEntireItemType}
          clearCart={clearCart}
          viewItemDetail={viewItemDetail}
          makePayment={makePayment}
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
      {modalOpen && (
        <Modal
          item={modalItem}
          dismissModal={dismissModal}
          paymentAmount={paymentAmount}
        />
      )}
    </Wrapper>
  );
};

export default App;
