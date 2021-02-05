import "./styles";
import { Overlay, ModalContainer } from "./styles";

function Modal({ title, children }) {
  return (
    <Overlay>
      <ModalContainer>
        <span>&times;</span>
        <header>{title}</header>
        {children}
      </ModalContainer>
    </Overlay>
  );
}

export default Modal;
