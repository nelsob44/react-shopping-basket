import { Wrapper } from "./Backdrop.styles";

type Props = {
  modalOpen: boolean;
};

const Backdrop: React.FC<Props> = ({ modalOpen }) =>
  modalOpen ? (
    <Wrapper>
      <div></div>
    </Wrapper>
  ) : null;

export default Backdrop;
