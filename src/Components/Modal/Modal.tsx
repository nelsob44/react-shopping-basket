import { CartItemType } from "../../App";
import { Button } from "@material-ui/core";
import Backdrop from "../Backdrop/Backdrop";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
// Styles
import { Wrapper } from "./Modal.styles";

type Props = {
  item: CartItemType;
  dismissModal: () => void;
  paymentAmount: number;
};

const Modal: React.FC<Props> = ({ item, dismissModal, paymentAmount }) => (
  <div>
    <Backdrop modalOpen />
    <Wrapper>
      {paymentAmount === 0 && (
        <div>
          <div>
            <img src={item.image} alt={item.title} />
            <Button
              className="dismiss-modal"
              onClick={() => dismissModal()}
              aria-label="Close item detail modal"
            >
              <HighlightOffIcon></HighlightOffIcon>
            </Button>
          </div>
          <div>
            <h3 aria-label="Item title">{item.title}</h3>
            <p aria-label="Item description">{item.description}</p>
            <h3 aria-label="Item price">£{item.price}</h3>
          </div>
        </div>
      )}
      {paymentAmount > 0 && (
        <div>
          <Button
            disableElevation
            variant="contained"
            className="pay-button"
            aria-label="Make payment"
          >
            <i>
              <b>Pay £{paymentAmount.toFixed(2)} now</b>
            </i>
          </Button>
          <Button
            className="dismiss-modal"
            onClick={() => dismissModal()}
            aria-label="Close payment modal"
          >
            Cancel
          </Button>
        </div>
      )}
    </Wrapper>
  </div>
);

export default Modal;
